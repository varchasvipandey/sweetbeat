import React from "react";
import Swiper from "react-id-swiper";
import toastr from "toastr";

import "./App.css";

//components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

//containers
import Home from "./containers/Home/Home";
import FutureBass from "./containers/FutureBass/FutureBass";
import HipHop from "./containers/HipHop/HipHop";

class App extends React.Component {
  state = {
    darkmode: null,
    backgroundColor: null
  };

  switchTheme = query => {
    if (query === 1) {
      this.setState({ darkmode: true }, () => {
        this.setState({ backgroundColor: "rgb(24, 24, 24)" });
        localStorage.setItem("sweetbeat-theme", "rgb(24, 24, 24))");
        localStorage.setItem("sweetbeat-darkmode", "true");
      });
    } else {
      this.setState({ darkmode: false }, () => {
        this.setState({ backgroundColor: "rgba(255,255,255)" });
        localStorage.setItem("sweetbeat-theme", "rgba(255,255,255)");
        localStorage.setItem("sweetbeat-darkmode", "false");
      });
    }
  };

  componentDidMount() {
    if (!localStorage.getItem("sweetbeat-theme")) {
      localStorage.setItem("sweetbeat-theme", "rgba(255,255,255)");
      localStorage.setItem("sweetbeat-darkmode", "false");
    } else {
      this.setState({
        darkmode: localStorage.getItem("sweetbeat-darkmode"),
        backgroundColor: localStorage.getItem("sweetbeat-theme")
      });
    }

    if (window.screen.width > 600) {
      // NOTIFY
      toastr.options = {
        positionClass: "toast-bottom-full-width",
        fadeIn: 300,
        fadeOut: 1000,
        hideDuration: 300,
        timeOut: 2000
      };
      toastr.clear();
      setTimeout(
        () =>
          toastr.warning(
            "Run this application on mobile phones for best experience"
          ),
        300
      );
    }
  }

  render() {
    // SWIPER PARAMS
    const params = {
      pagination: ".swiper-pagination",
      paginationClickable: true,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      spaceBetween: 0,
      speed: 500,
      effect: "slide"
    };

    return (
      <React.Fragment>
        {/* NAV */}
        <Nav darkmode={this.state.darkmode} switchTheme={this.switchTheme} />

        <Swiper {...params}>
          {window.screen.width < 600 ? (
            <div
              className="page"
              style={{ backgroundColor: this.state.backgroundColor }}
            >
              <Home />
            </div>
          ) : (
            <template></template>
          )}

          <div
            className="page"
            style={{ backgroundColor: this.state.backgroundColor }}
          >
            <FutureBass />
          </div>
          <div
            className="page"
            style={{ backgroundColor: this.state.backgroundColor }}
          >
            <HipHop />
          </div>
        </Swiper>
        {/* FOOTER */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
