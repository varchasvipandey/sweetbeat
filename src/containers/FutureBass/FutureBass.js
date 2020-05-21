import React, { Component } from "react";

//components
import Pad from "../../components/Pad/Pad";

//sounds
import loop from "../../assets/audio/future_bass/loop.ogg";

import kick from "../../assets/audio/future_bass/kick.ogg";
import hat_c from "../../assets/audio/future_bass/hat_c.ogg";
import hat_o from "../../assets/audio/future_bass/hat_o.ogg";

import perc from "../../assets/audio/future_bass/perc.ogg";
import perc2 from "../../assets/audio/future_bass/perc2.ogg";
import snare from "../../assets/audio/future_bass/snare.ogg";

import ride from "../../assets/audio/future_bass/ride.ogg";
import clap from "../../assets/audio/future_bass/clap.ogg";
import crash from "../../assets/audio/future_bass/crash.ogg";

class FutureBass extends Component {
  state = {
    keyboard: 1
  };

  render() {
    // pad configuration
    let padConfig = {
      genre: "Future bass",
      titleColor: "#8413ee",
      loop,
      sounds: [kick, hat_c, hat_o, perc, perc2, snare, ride, clap, crash],
      keyboard: this.state.keyboard
    };

    return (
      <section className="genre genre-futureBass">
        <Pad {...padConfig} />
      </section>
    );
  }
}

export default FutureBass;
