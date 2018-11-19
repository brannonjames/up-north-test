import React from 'react';
import './BookList.css';

const BookList = ({ data, onSelection }) => {

  const renderSectionItems = (section) => {
    return Object.values(data[section]).map(book => (
      <p key={book.ISBN}>
        <a 
          href="www.google.com"
          onClick={e => {
            e.preventDefault()
            onSelection(book);
          }}
        >
          {book.title}
        </a>
      </p>
    )); 
  }

  const renderSections = () => {
    // render each letter section, then render each subsequent book
    const sections = Object.keys(data);
    return sections.map(sectionLetter => (
      <div key={sectionLetter}>
        <p>{sectionLetter}</p>
        <ul>
          { renderSectionItems(sectionLetter) }
        </ul>
      </div>
    ));
  }

  return (
    <ul className="BookList">
      { renderSections() }
    </ul>
  );
}

BookList.defaultProps = {
  data: []
};

export default BookList;
