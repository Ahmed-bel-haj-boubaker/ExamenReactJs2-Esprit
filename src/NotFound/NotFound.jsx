import React from "react";
import notFoundSVG from "../assets/page-not-found.svg";
import "./Notfound.css";

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: true,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ showMessage: false });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { showMessage } = this.state;
    return (
      <>
        <div>{showMessage && <h1> Redirect to Movies page</h1>}</div>

        <div className="body">
          <img src={notFoundSVG} height={200} width={200} alt="vector" />
          <div className="wrapper">
            <h1>Page Not Found</h1>
            <p className="message">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sit
              inventore eveniet cumque alias.
            </p>
            <a href="#" className="btn">
              Learn More About Us
            </a>
            <p className="copyRights">&copy; 2020 DeltatyCode</p>
          </div>
        </div>
      </>
    );
  }
}

export default NotFound;
