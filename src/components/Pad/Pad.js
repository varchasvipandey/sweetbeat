import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import toastr from "toastr";

import "./Pad.css";

class Pad extends React.Component {
  state = {
    loopPlaying: false,
    kick: new Audio(this.props.sounds[0]),
    hat_c: new Audio(this.props.sounds[1]),
    hat_o: new Audio(this.props.sounds[2]),
    perc: new Audio(this.props.sounds[3]),
    perc2: new Audio(this.props.sounds[4]),
    snare: new Audio(this.props.sounds[5]),
    ride: new Audio(this.props.sounds[6]),
    clap: new Audio(this.props.sounds[7]),
    crash: new Audio(this.props.sounds[8]),
    keyboard: this.props.keyboard
  };

  // sound configuration for loop
  loop = new Audio(this.props.loop);
  play = () => {
    this.setState({ loopPlaying: true }, () => {
      this.loop.play();
    });
  };
  pause = () => {
    this.setState({ loopPlaying: false }, () => {
      this.loop.pause();
    });
  };

  //sound configuration for buttons
  playSound = sound => {
    sound.preload = "auto";
    sound.load();

    let clone = sound.cloneNode();
    clone.play();
  };

  switchControls = query => {
    if (query === 0) {
      this.setState({ keyboard: 0 });
      // NOTIFY
      toastr.options = {
        positionClass: "toast-bottom-full-width",
        fadeIn: 300,
        fadeOut: 1000,
        hideDuration: 300,
        timeOut: 2000
      };
      toastr.clear();
      setTimeout(() => toastr.error("Numpad disabled"), 300);
    } else {
      this.setState({ keyboard: 1 });
      // NOTIFY
      toastr.options = {
        positionClass: "toast-bottom-full-width",
        fadeIn: 300,
        fadeOut: 1000,
        hideDuration: 300,
        timeOut: 2000
      };
      toastr.clear();
      setTimeout(() => toastr.success("Numpad enabled"), 300);
    }
  };

  componentDidMount() {
    if (this.props.keyboard === 1) this.setState({ keyboard: 1 });
  }

  render() {
    // styling properties
    let color = this.props.titleColor;
    let border = `2px solid ${this.props.titleColor}`;
    // style object
    let styles = {
      title: {
        color: color
      },
      buttons: {
        border: border,
        color: color
      },
      padButtons: {
        backgroundImage: `linear-gradient(to right bottom, ${color}, ${color}cb)`
      }
    };

    return (
      <React.Fragment>
        <p className="genre__name" style={styles.title}>
          {this.props.genre}
        </p>
        <div className="genre__controls">
          <button
            style={styles.buttons}
            className="genre__controls-button"
            onClick={this.state.loopPlaying ? this.pause : this.play}
          >
            {this.state.loopPlaying ? (
              <i className="fas fa-pause"></i>
            ) : (
              <i className="fas fa-play"></i>
            )}
          </button>
          <button style={styles.buttons} className="genre__controls-button">
            {this.state.keyboard ? (
              <i
                className="far fa-keyboard"
                onClick={() => this.switchControls(0)}
              ></i>
            ) : (
              <i
                className="fas fa-keyboard"
                onClick={() => this.switchControls(1)}
              ></i>
            )}
          </button>
        </div>
        {/* PAD */}
        <div className="pad">
          {/* ROW 1 */}
          <div className="pad__row">
            <div
              style={styles.padButtons}
              className="pad__button"
              onClick={() => this.playSound(this.state.kick)}
            >
              1
            </div>
            <div
              style={styles.padButtons}
              className="pad__button"
              onClick={() => this.playSound(this.state.hat_c)}
            >
              2
            </div>
            <div
              style={styles.padButtons}
              className="pad__button"
              onClick={() => this.playSound(this.state.hat_o)}
            >
              3
            </div>
          </div>
          {/* ROW 2 */}
          <div className="pad__row">
            <div
              style={styles.padButtons}
              className="pad__button"
              onClick={() => this.playSound(this.state.perc)}
            >
              4
            </div>
            <div
              style={styles.padButtons}
              className="pad__button"
              onClick={() => this.playSound(this.state.perc2)}
            >
              5
            </div>
            <div
              style={styles.padButtons}
              className="pad__button"
              onClick={() => this.playSound(this.state.snare)}
            >
              6
            </div>
          </div>
          {/* ROW 3 */}
          <div className="pad__row">
            <div
              style={styles.padButtons}
              className="pad__button"
              onClick={() => this.playSound(this.state.ride)}
            >
              7
            </div>
            <div
              style={styles.padButtons}
              className="pad__button"
              onClick={() => this.playSound(this.state.clap)}
            >
              8
            </div>
            <div
              style={styles.padButtons}
              className="pad__button"
              onClick={() => this.playSound(this.state.crash)}
            >
              9
            </div>
          </div>
        </div>
        {/* KEYBOARD HANDLER */}
        {this.state.keyboard ? (
          <KeyboardEventHandler
            handleKeys={["7", "8", "9", "4", "5", "6", "1", "2", "3", "enter"]}
            onKeyEvent={(key, e) => {
              console.log(key);
              if (key === "enter")
                this.state.loopPlaying ? this.pause() : this.play();
              if (key === "7") this.playSound(this.state.kick);
              if (key === "8") this.playSound(this.state.hat_c);
              if (key === "9") this.playSound(this.state.hat_o);
              if (key === "4") this.playSound(this.state.perc);
              if (key === "5") this.playSound(this.state.perc2);
              if (key === "6") this.playSound(this.state.snare);
              if (key === "1") this.playSound(this.state.ride);
              if (key === "2") this.playSound(this.state.clap);
              if (key === "3") this.playSound(this.state.crash);
            }}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Pad;
