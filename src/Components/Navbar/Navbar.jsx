import { NavbarData } from "./NavbarData.jsx"
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='navbar'>
      <div className="navbar-box">
        <ul className="nav-menu">
          {NavbarData.map((val, key) => (
            <li key={key} onClick={() => scrollToSection(val.target)}>
              <img
                src={val.icon}
                style={{ width: val.size, height: val.size }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default Navbar