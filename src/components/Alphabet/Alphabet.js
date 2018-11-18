import React, { Component } from 'react';
import './Alphabet.css'

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class Alphabet extends Component {

  dataContainsthisLetter(letter) {
    const { data } = this.props;
    return data.some(book => {
      const firstLetterofTitle = book.title[0].toUpperCase();
       return firstLetterofTitle === letter
    });
  }

  renderAlphabet() {
    const { handleLetterClick } = this.props;
    return ALPHABET.map(letter => {
      if (this.dataContainsthisLetter(letter)) {
        return (
          <a
            key={letter}
            href="www" 
            onClick={handleLetterClick}
          >
            {letter}
          </a>
        );
      }
      return (
        <p key={letter}>{letter}</p>
      )
    });
  }

  render() {
    return (
      <div className="Alphabet">
        { this.renderAlphabet() }
      </div>
    )
  }
}

Alphabet.defaultProps = {
  data: [],
  handleLetterClick: (e) => { e.preventDefault() }
}

export default Alphabet;
