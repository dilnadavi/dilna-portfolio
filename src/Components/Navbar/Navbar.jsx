import { NavbarData } from "./NavbarData.jsx"
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-box">
        <ul className="nav-menu">
          {NavbarData.map((val, key) => (
            <li key={key} onClick={() => window.location.reload()} style={{ cursor: 'pointer' }}>
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
