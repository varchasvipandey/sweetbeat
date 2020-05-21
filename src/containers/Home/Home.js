import React, { Component } from "react";

import "./Home.css";

import Logo from "../../assets/images/logo-full.png";
import theme from "../../assets/audio/theme.ogg";

class Home extends Component {
  state = {
    audioPlay: false,
    audioPause: true
  };

  theme_song = new Audio(theme);

  play = () => {
    this.setState({ audioPlay: true, audioPause: false }, () => {
      this.theme_song.play();
    });
  };
  pause = () => {
    this.setState({ audioPlay: false, audioPause: true }, () => {
      this.theme_song.pause();
    });
  };

  render() {
    let playing;
    playing = this.state.audioPlay ? (
      <div className="home__audio-container" onClick={this.pause}>
        <p className="home__audio-icon">
          <i className="fas fa-volume-up"></i>
        </p>
      </div>
    ) : null;

    return (
      <header className="home">
        {playing}
        <div className="home__content-container">
          <img
            src={Logo}
            alt="sweetBeat"
            className="home__logo"
            onClick={!this.state.audioPlay ? this.play : this.pause}
          ></img>
          {/* CENTER */}
          <div className="home__content-center">
            <p className="home__swiper">
              <i className="fas fa-angle-double-left"></i>
            </p>
          </div>
        </div>
        {/* Swipe */}
      </header>
    );
  }
}

export default Home;
