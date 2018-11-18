import React from 'react'


const BookList = ({ data }) => {

  const renderSectionItems = (section) => {
    return Object.values(data[section]).map(book => (
      <p key={book.ISBN}>{book.title}</p>
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
    <ul>
      { renderSections() }
    </ul>
  );
}

BookList.defaultProps = {
  data: []
};

export default BookList;
