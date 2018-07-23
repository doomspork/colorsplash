import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import Swatch from './Swatch';
import Random from '../utils/random';

class Gradients extends Component {
  state = {
    colors: [],
    degrees: 0
  }

  onGenerate = () => {
    const { colors, degrees } = Random.gradient(2);

    this.setState({ colors: colors, degrees: degrees });

    return { colors: colors, degrees: degrees };
  }

  style = () => {
    return { background: "linear-gradient(" + this.state.degrees + "deg, " + this.state.colors.join(",") + ")" }
  }

  render() {
    return (
      <Swatch onBack={(newState) => this.setState(newState)} onGenerate={this.onGenerate} style={this.style}>
        <div className="content is-uppercase">
          {this.state.colors[0]} <FontAwesomeIcon color="grey" icon={faLocationArrow} size="xs" transform={{rotate: this.state.degrees - 45}} /> {this.state.colors[1]}
        </div>
      </Swatch>);
  }
}

export default Gradients;
