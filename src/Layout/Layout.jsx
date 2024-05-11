import Navbar from "../NavigationBar/NavigationBar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>{children}</main>
    </div>
  );
};

export { Layout };

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
