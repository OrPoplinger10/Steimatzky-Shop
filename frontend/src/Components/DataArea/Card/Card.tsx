import BookModel from "../../../models/BookModel";
import "./Card.css";

interface CardProps {
    book: BookModel;
	
}

function Card(props: CardProps): JSX.Element {
    return (
        <div className="Card">
            Name: {props.book.bookName}  <br />
           Summary: {props.book.bookSummary}  <br />
            Price: {props.book.price}  <br />
           Stock: {props.book.stock}  
           
			
        </div>
    );
}

export default Card;
