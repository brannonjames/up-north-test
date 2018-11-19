import React from 'react';
import './CurrentBook.css';

const CurrentBook = ({ currentBook }) => {
  if (!currentBook) { return null }
  return (
    <div className="CurrentBook">
      <h3>{currentBook.title}</h3>
      <p>{currentBook.description}</p>
    </div>
  );
}

export default CurrentBook;