import axios from 'axios';
import { convertArrayToBooksObj } from './normalize';

const ENDPOINT = '/api/books';

export const getAllBooks = async () => {
  try {

    const { data } = await axios.get(ENDPOINT);
    const books = convertArrayToBooksObj(data);
    return books;

  } catch (error) {
    throw Error('Could not load books');
  }
}

export const addNewBook = async formData => {
  try {

    const { data } = await axios.post(ENDPOINT, formData);
    const books = convertArrayToBooksObj(data);
    return books;

  } catch (error) {
    throw Error('Could not add book');
  }
}