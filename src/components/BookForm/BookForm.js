import React, { Component } from 'react';
import './BookForm.css';

class BookForm extends Component {
  state = {
    ISBN: '',
    title: '',
    description: ''
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.isLoading !== nextProps.isLoading) {
      return true;
    }
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      return true
    }
    return false;
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      ISBN: '',
      title: '',
      description: ''
    });
  }

  render() {
    const { ISBN, title, description } = this.state;
    return (
      <form 
        className="BookForm"
        onSubmit={this.handleSubmit}
      >
        <input 
          type="number"
          placeholder="ISBN"
          name="ISBN"
          onChange={this.handleChange}
          value={ISBN}
        />
        <input
          placeholder="Title"
          name="title"
          onChange={this.handleChange}
          value={title}
        />
        <textarea
          placeholder="Description"
          name="description"
          onChange={this.handleChange}
          value={description}
        ></textarea>
        { this.props.isLoading ?
          <p>Loading...</p> :
          <button type="submit">Submit</button>
        }
      </form>
    );
  }

}

BookForm.defaultProps = {
  onChange: () => {},
  onSubmit: (e) => { e.preventDefault() }
};

export default BookForm;
