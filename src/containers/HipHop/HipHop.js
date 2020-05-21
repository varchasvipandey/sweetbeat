import React, { Component } from "react";

//components
import Pad from "../../components/Pad/Pad";

//sounds
import loop from "../../assets/audio/hiphop/loop.ogg";

import kick from "../../assets/audio/hiphop/kick.ogg";
import hat_c from "../../assets/audio/hiphop/hat_c.ogg";
import hat_o from "../../assets/audio/hiphop/hat_o.ogg";

import perc from "../../assets/audio/hiphop/perc.ogg";
import perc2 from "../../assets/audio/hiphop/perc2.ogg";
import snare from "../../assets/audio/hiphop/snare.ogg";

import ride from "../../assets/audio/hiphop/ride.ogg";
import clap from "../../assets/audio/hiphop/clap.ogg";
import crash from "../../assets/audio/hiphop/crash.ogg";

class HipHop extends Component {
  state = {
    keyboard: 0
  };

  render() {
    // pad configuration
    let padConfig = {
      genre: "hip hop",
      titleColor: "#ff2c00",
      loop: loop,
      sounds: [kick, hat_c, hat_o, perc, perc2, snare, ride, clap, crash],
      keyboard: this.state.keyboard
    };

    return (
      <section className="genre genre-hiphop">
        <Pad {...padConfig} />
      </section>
    );
  }
}

export default HipHop;
