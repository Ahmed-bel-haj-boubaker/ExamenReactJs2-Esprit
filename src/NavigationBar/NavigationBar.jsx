import { NavLink } from "react-router-dom";
import "./nav.css";
import { useSelector } from "react-redux";
const NavigationBar = () => {
  const nbItem = useSelector((state) => state.nbItem);
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
            <li>
              <NavLink
                to="/wishlist"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none ",
                })}
              >
                wishlist ({nbItem})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
