import { NavLink } from "react-router-dom";
import "./nav.css";
const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements" style={{ flex: "flex" }}>
          <ul>
            <li>MOVIEDB</li>
            <li>
              <NavLink
                to="/movies"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none ",
                })}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
