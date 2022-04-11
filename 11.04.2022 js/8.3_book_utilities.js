//1
const book1 = {
    name:'Harry Potter',
    autor:'J.K. Rowling',
    year:1997,
  
}
const book2 = {
    name:'Fantastic Beasts and Where to Find Them',
    autor:'J.K. Rowling',
    year:2001,
  
}
//2
const bookUtils = {}; 
//3
bookUtils.getFirstPublished = function(book1, book2) {
    return    book1.year < book2.year ? book1 : book2;
};
//4
bookUtils.setNewEdition= function(book, year) {
    book.year = year;
};
//5
bookUtils.setLanguage= function(book, language) {
    book.language = language;
};
//6
bookUtils.setTranslation= function(book, language, translator ){
    book.translation= {language: language, translator: translator };
};
//7
bookUtils.setPublisher= function(book, name, location ){
    book.publisher= {name: name, location: location };
};
//8
bookUtils.isSamePublisher= function(book1,book2){
    return book1.publisher.name=== book2.publisher.name
     && book1.publisher.location===book2.publisher.location;
};

bookUtils.setPublisher(book1,'jk','Israel');
bookUtils.setPublisher(book2,'jk','Israel');
console.log(book1);
console.log(book2);
console.log(bookUtils.isSamePublisher(book1,book2));

