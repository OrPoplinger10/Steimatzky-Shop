class BookModel{
    public bookId: number;
    public genreId: number;
    public bookName: string;
    public bookSummary: string;
    public price: number;
    public stock: number;


  public constructor(book: BookModel){
    this.bookId = book.bookId
    this.genreId = book.genreId
    this.bookName = book.bookName
    this.bookSummary = book.bookSummary
    this.price = book.price
    this.stock = book.stock
  }


}

export default BookModel;