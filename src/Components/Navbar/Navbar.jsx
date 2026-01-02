import { NavbarData } from "./NavbarData.jsx"
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-box">
            <ul className="nav-menu">
                {NavbarData.map((val, key) => {
                    return (
                    <li key={key}>
                    <div>
                        <img src={val.icon} style={{ width: val.size, height: val.size }}/>
                        </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>
  )
}

export default Navbar