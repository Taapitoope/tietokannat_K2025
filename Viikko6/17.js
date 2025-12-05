
// 2. objekti nimeltä book 
// 3. jonka sisällä on taulukko bookArray
const book = {
     bookArray: [
        { id_book: 1,  name: "Everything You Ever Wanted to Know", author: "Upton",      isbn: "082305649x" },
        { id_book: 2,  name: "Photography",                        author: "Vilppu",     isbn: "205711499" },
        { id_book: 3,  name: "Drawing Manual Vilppu",              author: "Zelanshi",   isbn: "1892053039" },
        { id_book: 4,  name: "TBA",                                author: "Zelanshi",   isbn: "0534613932" },
        { id_book: 5,  name: "Shaping Space",                      author: "Speight",    isbn: "0534613934" },
        { id_book: 6,  name: "Art Since 1940",                     author: "Speight",    isbn: "0131839780" },
        { id_book: 7,  name: "Make it in Clay",                    author: "Stokstad",   isbn: "0076417011" },
        { id_book: 8,  name: "Art History Vol II & ala carte lab", author: "Stokstad",   isbn: "205795617" },
        { id_book: 9,  name: "Accounting Concepts",                author: "Albrecht",   isbn: "1111287856" },
        { id_book: 10, name: "Intermediate Accounting",            author: "Stice",      isbn: "0538479736" },
        { id_book: 11, name: "Management Info Systems",            author: "Marakas",    isbn: "9780073376813" },
        { id_book: 12, name: "Management",                         author: "Williams",   isbn: "9780757524028" },
        { id_book: 13, name: "Leadership Wisdom of Jesus",         author: "Manz",       isbn: "9781609940041" },
        { id_book: 14, name: "Business Law Today",                 author: "Miller",     isbn: "9780324786156" },
        { id_book: 15, name: "Management Info Systems",            author: "Marakas",    isbn: "9780073376813" }
    ],

// 4.

//  getAllBooks(), joka tulostaa koko bookArrayn konsolille (huom! this-osoitin)
    getAllBooks() {
        console.log("\nKaikki kirjat:\n");
        console.log(this.bookArray);
    },

//  getOneBook(x), joka tulostaa sille argumenttina(x:n arvo) annetun kirjan tiedot
    getOneBook(x) {
    for (let i = 0; i < this.bookArray.length; i++) {
        if (this.bookArray[i].id_book == x) {
            console.log("\nTaulukon", x, "kirja:\n");
            console.log(this.bookArray[i]);
            return;
            }
        }
    },

//  addBook(id_book, name, author, isbn), joka lisää sille annetun kirjan bookArrayhin (käytä push metodia)book-objekti
    addBook(id_book, name, author, isbn) {
    const newBook = { id_book, name, author, isbn };
    this.bookArray.push(newBook);
    console.log("\nLisätty kirja:\n\n", newBook);
    const lastBook = this.bookArray[this.bookArray.length - 1];
}

};
// 5. Testaa jokaista metodia
book.getAllBooks(),
book.getOneBook(13);
book.addBook(16, "Huonemiehen poika", "Kalle Päätalo", "1234567890");
book.getAllBooks();
