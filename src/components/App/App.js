import React, { Component } from 'react';
import './App.css';
import { getAllBooks } from '../../services/api';

import Alphabet from '../Alphabet/Alphabet';
import BookList from '../BookList/BookList';

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
      </div>
    );
  }
}

export default App;
