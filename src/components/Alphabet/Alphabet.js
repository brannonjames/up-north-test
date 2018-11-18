import React, { Component } from 'react';
import './Alphabet.css';

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class Alphabet extends Component {
  shouldComponentUpdate(nextProps) {
    const current = JSON.stringify(this.props.sections);
    const next = JSON.stringify(nextProps.sections)
    if (current === next) {
      return false;
    }
    return true;
  }

  renderAlphabet() {
    return ALPHABET.map(letter => {
      if (this.props.sections.includes(letter)) {
        return <a key={letter} href="www.google.com" onClick={e => {
          e.preventDefault();
          this.props.handleLetterClick(letter);
        }}>
          {letter}
        </a>;
      }
      return <p key={letter}>{letter}</p>;
    });
  };

  render() {
    return (
      <div className="Alphabet">
        <button onClick={this.props.clearFilter}>Show All</button>
        { this.renderAlphabet() }
      </div>
    );
  }

}

Alphabet.defaultProps = {
  sections: [],
  handleLetterClick: (e) => { e.preventDefault() }
}

export default Alphabet;
