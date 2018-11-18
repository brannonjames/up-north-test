# UP North Developer Test

## Getting Started

Ensure MongoDB is [installed](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)

`mongod` to run database

`npm install`

`npm start`

## Notes

-Database

I chose MongoDB as my database. It's usually quicker to set up and is appropiate
since I'm not working with any relational data.

-Performance

To prevent unnessesary renders I added the shouldComponentUpdate to BookForm and 
Alphabet since it's more rare these actually need to be updated. I also played with
normalizing the books data coming in. This practice is recommended in Redux since it
allows querying an object directly without having to loop over large arrays for certain updated.

-Search Bar 

Other than building out a SearchBar component UI, filtering out the search query shouldn't change
the code too much since all the data already sits in the client side. If I wanted to create a search
method with the current setup, I would probably need to implement a method similar to this:

```
const handleSearchQueryChange = query => {
  const books = Object.keys(this.state.books).reduce((acc, val) => {
    const filteredBooks = Object.keys(val).reducer((acc2, val2) => {
      const currentBook = this.state.books[val][val2];
      if (currentBook.title.includes(query)) {
        acc2[currentBook.ISBN] = currentBook;
        return acc2;
      }
    }, {})
    acc[val] = filteredBooks;
    return acc;
  }, {});
  this.setState({ .books });
}
```

In retrospect, normalizing all the incoming data probably was not worth it. 
 


 
