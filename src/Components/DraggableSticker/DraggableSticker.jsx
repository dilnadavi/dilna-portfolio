import { useState, useRef, useEffect } from 'react'
import './DraggableSticker.css'

const DraggableSticker = ({ src, alt = 'sticker', size = 30, initialXPercent = 0.5, initialYPercent = 0.5, rotate = 0, containerRef, paddingLeft = 10 }) => {
  const [pos, setPos] = useState(null)
  const [dragging, setDragging] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0, shine: 0 })
  const [hovered, setHovered] = useState(false)
  const offset = useRef({ x: 0, y: 0 })
  const imgRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      if (width === 0 || height === 0) return
      setPos(current => {
        if (current !== null) return current
        return {
          x: paddingLeft + Math.min(initialXPercent * (width - paddingLeft), width - paddingLeft - size),
          y: Math.min(initialYPercent * height, height - size),
        }
      })
    })

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [containerRef, initialXPercent, initialYPercent, size, paddingLeft])

  const onMouseEnter = () => setHovered(true)

  const onMouseLeave = () => {
    setHovered(false)
    setTilt({ x: 0, y: 0, shine: 0 })
  }

  const onMouseMoveHover = (e) => {
    if (dragging) return
    const rect = imgRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -18, y: dx * 18, shine: (dx + 1) / 2 })
  }

  const onMouseDown = (e) => {
    e.preventDefault()
    setTilt({ x: 0, y: 0, shine: 0 })

    const containerRect = containerRef.current.getBoundingClientRect()
    offset.current = {
      x: e.clientX - containerRect.left - pos.x,
      y: e.clientY - containerRect.top - pos.y,
    }
    setDragging(true)

    const onMove = (e) => {
      const containerRect = containerRef.current.getBoundingClientRect()
      const newX = e.clientX - containerRect.left - offset.current.x
      const newY = e.clientY - containerRect.top - offset.current.y
      setPos({
        x: Math.max(paddingLeft, Math.min(newX, containerRect.width - size)),
        y: Math.max(0, Math.min(newY, containerRect.height - size)),
      })
    }
    const onUp = () => {
      setDragging(false)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const onTouchStart = (e) => {
    const touch = e.touches[0]
    const containerRect = containerRef.current.getBoundingClientRect()
    offset.current = {
      x: touch.clientX - containerRect.left - pos.x,
      y: touch.clientY - containerRect.top - pos.y,
    }
    setDragging(true)

    const onMove = (e) => {
      e.preventDefault()
      const touch = e.touches[0]
      const containerRect = containerRef.current.getBoundingClientRect()
      const newX = touch.clientX - containerRect.left - offset.current.x
      const newY = touch.clientY - containerRect.top - offset.current.y
      setPos({
        x: Math.max(paddingLeft, Math.min(newX, containerRect.width - size)),
        y: Math.max(0, Math.min(newY, containerRect.height - size)),
      })
    }
    const onEnd = () => {
      setDragging(false)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onEnd)
    }

    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onEnd)
  }

  if (!pos) return null

  const transform = dragging
    ? `rotate(${rotate}deg) scale(1.12)`
    : hovered
      ? `rotate(${rotate}deg) perspective(400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.1)`
      : `rotate(${rotate}deg) scale(1)`

  return (
    <div
      style={{
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        width: size,
        height: size,
        zIndex: dragging ? 10000 : 9999,
        cursor: dragging ? 'grabbing' : 'grab',
        transform,
        transition: dragging ? 'none' : 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMoveHover}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        draggable={false}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          transition: 'filter 0.2s ease',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

export default DraggableSticker