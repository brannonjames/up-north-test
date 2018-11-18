import React from 'react';
import './Alphabet.css';

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const Alphabet = ({ sections, handleLetterClick, clearFilter }) => {

  const renderAlphabet = () => {
    return ALPHABET.map(letter => {
      if (sections.includes(letter)) {
        return (
          <a key={letter} href="www.google.com" onClick={e => {
            e.preventDefault();
            handleLetterClick(letter);
          }}>
            {letter}
          </a>
        );
      }
      return <p key={letter}>{letter}</p>;
    });
  };

  return (
    <div className="Alphabet">
      <button onClick={clearFilter}>Show All</button>
      { renderAlphabet() }
    </div>
  )
};

Alphabet.defaultProps = {
  sections: [],
  handleLetterClick: (e) => { e.preventDefault() }
}

export default Alphabet;
