import React, { Component } from 'react';
import './App.css';
import { getAllBooks, addNewBook } from '../../services/api';

import Alphabet from '../Alphabet/Alphabet';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

class App extends Component {
  state = {
    books: {},
    error: null,
    selectedLetter: null
  }

  // LIFECYCLE METHODS
  async componentDidMount() {
    try {

      const books = await getAllBooks();
      this.setState({ books });

    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  }

  // HELPERS
  clearError() {
    this.setState({ error: null });
  }

  handleFormSubmit = async data => {
    try {
      
      const updatedBooks = await addNewBook(data);
      this.setState({ books: updatedBooks });

    } catch (error) {
      console.log(error)
      this.setState({ error: error.message });
    }
  }

  handleLetterSelection = letter => {
    this.setState(prev => ({
      selectedLetter: {
        [letter]: prev.books[letter]
      }
    }));
  }
 
  render() {
    const { books, selectedLetter, error } = this.state;
    return (
      <div className="App">
        { error && <p className="errorText">{error}</p> }
        <Alphabet 
          sections={Object.keys(books)}
          handleLetterClick={this.handleLetterSelection}
        />
        <BookList 
          data={selectedLetter || books}
        />
        <BookForm 
          onSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default App;
