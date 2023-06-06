import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BookModel from "../../../models/BookModel";
import GenreModel from "../../../models/GenreModel";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";
import "./Insert.css";

function Insert(): JSX.Element {

  const[genre, setGenre] = useState<GenreModel[]>([]);

  // Get audience from backend once:
   useEffect(()=>{
   dataService.getAllGenre()
   .then(dbGenre => setGenre(dbGenre))
   .catch(err => notifyService.error(err));
  }, []);

  const {register, handleSubmit} =useForm<BookModel>();

  const navigate = useNavigate()

  function send(book: BookModel): void{
    dataService.addBook(book)
    .then(() => {
      notifyService.success("Book has been added");
      navigate("/list")
    })
    .catch(err => notifyService.error(err));

  }






    return (

        <div className="Insert">
          <h1>Add book</h1>

          <form onSubmit= {handleSubmit(send)}>

         <label>Genre: </label>
         <select defaultValue="" {...register("genreId")} required>
            <option disabled value="">Select Target Audience...</option>
            {genre.map(g => <option key={g.genreId} value={g.genreId}>{g.genreType}</option>)}
          </select>

          <label>Name: </label>
          <input type="text" {...register("bookName")} required />

          <label>Summary: </label>
          <input type="text" {...register("bookSummary")} required />

          <label>Price: </label>
          <input type="number" step="0.01" {...register("price")} required />

          <label>Stock: </label>
          <input type="number" {...register("stock")} required />

          <button>Add</button>

          </form>
			
        </div>
    );
}

export default Insert;
