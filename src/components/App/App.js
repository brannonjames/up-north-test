import React, { Component } from 'react';
import './App.css';
import { getAllBooks } from '../../services/api';

import Alphabet from '../Alphabet/Alphabet';

class App extends Component {
  state = {
    books: [],
    error: null
  }

  // LIFECYCLE METHODS
  async componentDidMount() {
    try {

      const books = await getAllBooks();
      this.setState({ books, error: null });

    } catch (error) {
      this.setState({ error: error });
    }
  }

  // HELPER METHODS
  clearError() {
    this.setState({ error: null });
  }

  render() {
    const { books, error } = this.state;
    return (
      <div className="App">
        { error && <p>{error}</p> }
        <Alphabet 
          data={books}
        />
      </div>
    );
  }
}

export default App;
