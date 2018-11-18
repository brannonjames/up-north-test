import axios from 'axios';

const ENDPOINT = '/api/books';

export const getAllBooks = async () => {
  try {

    const { data } = await axios.get(ENDPOINT);
    return data;

  } catch (error) {
    console.log(error)
    return 'Could not load books';
  }
}