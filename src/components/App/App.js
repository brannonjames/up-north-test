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
    selectedLetter: null,
    formLoading: false,
    listLoading: false
  }

  // LIFECYCLE METHODS
  async componentDidMount() {
    try {

      this.setState({ listLoading: true, error: null });
      const books = await getAllBooks();
      this.setState({ books, listLoading: false });

    } catch (error) {
      console.log(error);
      this.setState({ error: error.message, listLoading: false });
    }
  }

  // HELPERS
  handleFormSubmit = async data => {
    try {
      
      this.setState({ formLoading: true, error: null, selectedLetter: null });
      const updatedBooks = await addNewBook(data);
      this.setState({ books: updatedBooks, formLoading: false });

    } catch (error) {
      this.setState({ error: error.message, formLoading: false });
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
    const { books, selectedLetter, error, listLoading, formLoading } = this.state;
    return (
      <div className="App">
        <header>
          { error && <p className="errorText">{error}</p> }
          <Alphabet 
            sections={Object.keys(books)}
            handleLetterClick={this.handleLetterSelection}
            clearFilter={() => this.setState({ selectedLetter: null })}
          />
        </header>
        <main>
          <BookForm 
            onSubmit={this.handleFormSubmit}
            isLoading={formLoading}
          />
          { listLoading ? 
            <p>Loading...</p> :
            <BookList 
              data={selectedLetter || books}
            />
          }
        </main>
      </div>
    );
  }
}

export default App;
