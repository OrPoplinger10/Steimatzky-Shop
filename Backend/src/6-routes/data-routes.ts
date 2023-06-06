import express, {Request, Response, NextFunction} from "express";
import BookModel from "../2-models/book-model";
import dataService from "../5-service/data-service";

const router = express.Router();

router.get("/genre", async(request: Request, response: Response, next: NextFunction) => {
    try{

        // Get all genres from the service
        const genre = await dataService.getAllGenres();

        response.json(genre);
    }
    catch(err: any){

        next(err)
    }
})

router.get("/books", async(request: Request, response: Response, next: NextFunction) => {
    try{

        // Get all genres from the service
        const books = await dataService.getAllBooks();

        response.json(books);

    }
    catch(err: any){

        next(err)
    }
})

router.post("/books", async(request: Request, response: Response, next: NextFunction) => {
    try{
        const book = new BookModel(request.body);
        const addedBook = await dataService.addBooks(book);
        response.status(201).json(addedBook);
    }
    catch(err: any){

        next(err)
    }
})

router.delete("/books/:id([0-9]+)", async(request: Request, response: Response, next: NextFunction) => {
    try{

        const id = +request.params.id;
        
       await dataService.deleteBook(id);

        response.sendStatus(204);

    }
    catch(err: any){

        next(err)
    }
})











export default router