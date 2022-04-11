const book = {
    book_name:'Harry Potter',
    author_name: 'J.K. Rowling',
    publish_year:1997,
    country: 'England',
    language: 'English'
};

const returnBook = (book) => {
    return `The book ${book.book_name} was written by ${book.author_name} in
     the year ${book.publish_year} `
}

console.log(returnBook(book));