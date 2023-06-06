import { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";
import Card from "../Card/Card";
import "./List.css";

function List(): JSX.Element {

    const [book, setBook] = useState<BookModel[]>([]);

    useEffect(() => {
        dataService.getAllBooks()
        .then(dbBook => setBook(dbBook))
        .catch(err => notifyService.error(err));

    }, []);




    return (
        <div className="List">

            <h2>Books List</h2>
            
            {book.map(b => <Card key={b.bookId} book={b} />)}
			
        </div>
    );
}

export default List;
