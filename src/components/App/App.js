import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Alphabet from '../Alphabet/Alphabet';

class App extends Component {
  state = {
    books: [],
    error: null
  }

  // LIFECYCLE METHODS
  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/books');
      this.setState({ books: data, error: null });
    } catch (error) {
      this.setState({ error: error });
    }
  }

  // HELPER METHODS
  clearError() {
    this.setState({ error: null });
  }

  render() {
    return (
      <div className="App">
        <Alphabet />
      </div>
    );
  }
}

export default App;
