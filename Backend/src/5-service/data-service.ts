import dal from "../4-utils/dal";
import { OkPacket } from "mysql";
import GenreModel from "../2-models/genre-model";
import BookModel from "../2-models/book-model";
import { ResourceNotFoundError } from "../2-models/client-errors";


async function getAllGenres(): Promise<GenreModel[]>{

    const sql = "SELECT * FROM genre";

    //Bring me the result of the query:
    const genre = await dal.execute(sql);

    return genre;

}

async function getAllBooks(): Promise<BookModel[]>{
    
    //A combined query that also adds information from another 
    //table B.* means to fetch everything from Books and G.genreType
     //means to fetch the genres from the table we added
    const sql = "SELECT B.*, G.genreType FROM books as B JOIN genre as G on B.genreId = G.genreId";

     //Bring me the result of the query:
     const books = await dal.execute(sql);

     return books;


}

async function addBooks(book: BookModel): Promise<BookModel> {
    const sql = "INSERT INTO books VALUES(DEFAULT, ?, ?, ?, ?, ?)";

    const result: OkPacket = await dal.execute(sql, 
    [book.genreId, book.bookName, book.bookSummary, book.price, book.stock]);

    book.bookId = result.insertId;

    return book;
}

async function deleteBook(id: number): Promise<void> {

    const sql = `DELETE FROM books WHERE bookId = ${id}`;

    const result: OkPacket = await dal.execute(sql);

    if(result.affectedRows === 0) throw new ResourceNotFoundError(id);


}

export default{
    getAllGenres,
    getAllBooks,
    addBooks,
    deleteBook
}