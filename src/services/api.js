import axios from 'axios';
import { convertArrayToBooksObj } from './normalize';

const ENDPOINT = '/api/books';

export const getAllBooks = async () => {
  try {

    const { data } = await axios.get(ENDPOINT);
    const books = convertArrayToBooksObj(data);
    return books;

  } catch (error) {
    console.log(error)
    throw Error('Could not load books');
  }
}