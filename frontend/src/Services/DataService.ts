import axios from "axios";
import BookModel from "../models/BookModel";
import GenreModel from "../models/GenreModel";
import appConfig from "../Utils/Appconfig";

class DataService {

    public async getAllGenre(): Promise<GenreModel[]>{
        const response = await axios.get<GenreModel[]>(appConfig.genreUrl);
       const genre = response.data;
       return genre;
        
    }

    public async getAllBooks(): Promise<BookModel[]>{
       const response = await axios.get<BookModel[]>(appConfig.booksUrl);
       const books = response.data;
       return books;
    }

    public async addBook(book: BookModel): Promise<void> {
        const response = await axios.post<BookModel>(appConfig.booksUrl, book);
         const addedBook = response.data;
         console.log(addedBook);
    }

}

const dataService = new DataService();

export default dataService