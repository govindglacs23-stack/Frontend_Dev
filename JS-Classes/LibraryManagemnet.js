class Book{
    constructor(title,author,isbn,isIssued=false){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
        this.isIssued=isIssued;
    }
    issueBook(){ this.isIssued=true; }
    returnBook(){ this.isIssued=false; }
}
const books=[
    new Book("A","Author1","111"),
    new Book("B","Author2","222"),
    new Book("C","Author3","333",true)
];
const available=books.filter(b=>!b.isIssued);
console.log(available);
function issueByISBN(code){
    const book=books.find(b=>b.isbn===code);
    if(book) book.issueBook();
    console.log(book);
}
