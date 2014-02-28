var Book = function(title, genre, author, read, readDate) {
    this.title = title || "Unknown Title";
    this.genre = genre || "Unknown Genre";
    this.author = author || "Unknown Author";
    this.read = read || "False";
    this.readDate = readDate || "Unknown read date";
};

var BookList = function(booksRead, booksNotRead, bookShelf) {
    this.booksRead = booksRead || "You haven't read anything";
    this.booksNotRead = booksNotRead || "Find some new books";
    this.bookShelf = bookShelf || "No books on shelf";
    nextBook: function() {
        console.log("Here is a new book:");
    }
};

var HarryPotter = new Book("Harry Potter and the Sorcerer's Stone",
 "Fantasy", "JK Rowling", "True", "2/27/14");

console.log(HarryPotter);