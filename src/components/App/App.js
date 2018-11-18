import React, { Component } from 'react';
import './App.css';
import { getAllBooks, addNewBook } from '../../services/api';

import Alphabet from '../Alphabet/Alphabet';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

class App extends Component {
  state = {
    books: {},
    error: null
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
 
  render() {
    const { books, error } = this.state;
    return (
      <div className="App">
        { error && <p className="errorText">{error}</p> }
        <Alphabet 
          sections={Object.keys(books)}
        />
        <BookList 
          data={books}
        />
        <BookForm 
          onSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default App;
