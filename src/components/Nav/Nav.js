import React from "react";

import "./Nav.css";

import Logo from "../../assets/images/white-logo-text.png";

class Nav extends React.Component {
  state = {
    darkmode: this.props.darkmode
  };

  switchHandler = query => {
    if (query === 1) this.setState({ darkmode: true });
    else this.setState({ darkmode: false });
    this.props.switchTheme(query);
  };

  render() {
    return (
      <nav className="nav">
        <img src={Logo} alt="sweetbeat" className="nav__logo"></img>
        {/* LOGO */}
        {this.state.darkmode ? (
          <ion-icon
            name="moon"
            onClick={() => this.switchHandler(0)}
          ></ion-icon>
        ) : (
          <ion-icon
            name="sunny"
            onClick={() => this.switchHandler(1)}
          ></ion-icon>
        )}
      </nav>
    );
  }
}

export default Nav;
