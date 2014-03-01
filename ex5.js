var Book = function(title, genre, author, read, readDate) {
    this.title = title || "Unknown Title";
    this.genre = genre || "Unknown Genre";
    this.author = author || "Unknown Author";
    this.read = read || "False";
    this.readDate = readDate || "Unknown read date";
};


var BookList = function(booksRead, booksNotRead, bookShelf) {
    this.booksRead = numBooksRead;
    this.booksNotRead = numBooksNotRead;
    this.bookShelf = bookShelf || "No books on shelf";
    this.nextBook = nextBook;
    this.addBook = addBook;
    function numBooksRead(){
        for (var i =0; i < bookShelf.length; i++) {
        var book = bookShelf[i];
            if (book.read == "True"){
                booksRead.push(Book);
            }
        }
        console.log("You have read " + booksRead.length + " books.");
    }
    function numBooksNotRead(){
        for (var i =0; i < bookShelf.length; i++) {
        var book = bookShelf[i];
            if (book.read == "False"){
                booksNotRead.push(Book);
            }
        }
        console.log("You have " + booksNotRead.length + " unread books on your shelf.");
    }

    function nextBook(){
        for (var i =0; i < bookShelf.length; i++) {
            var book = bookShelf[i];
            if (book.read == "False") {
                console.log("Here is a new book: " + book.title);
                break;
            }
        }
    }

    function addBook(Book){
        bookShelf.push(Book);
        console.log("You have added " + Book.title + " to your bookshelf.");
    }
};



var HarryPotter = new Book("Harry Potter and the Sorcerer's Stone",
 "Fantasy", "JK Rowling", "True", "2/27/14");

var MobyDick = new Book("Moby Dick", "Adventure", "Herman Melville", "True");

var Twilight = new Book("Twilight", "Fantasy", "Stephanie Meyer", "False");

var myList = new BookList([], [], [HarryPotter, MobyDick]);

// console.log(myList.nextBook());
console.log(myList.addBook(Twilight));

console.log(myList.booksRead());
console.log(myList.booksNotRead());