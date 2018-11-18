const alphabetizeBooks = booksArr => {
  return booksArr.sort((book1, book2) => {
    return book1.title.localeCompare(book2.title);
  });
}

// converting the incoming array allows for faster retrieval of children
// In this case it also helps to section books by letter 
export const convertArrayToBooksObj = booksArr => {
  // console.log(booksArr);
  const sortedBooks = alphabetizeBooks(booksArr);
  return sortedBooks.reduce((accumulator, value) => {
    const firstLetter = String(value.title[0]).toUpperCase();
    accumulator[firstLetter] = {
      ...accumulator[firstLetter],
      [value.ISBN]: value
    };
    return accumulator;
  }, {});
}