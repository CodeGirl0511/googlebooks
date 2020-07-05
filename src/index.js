import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


function App(){

const[book,setBook]= useState("book");
const[result,setResult]= useState([result]);
const[apiKey,setApiKey]=useState("AIzaSyBgqcC1kGoZgfm_28kWHaIOSCsocOD4Fuc")

function handleChange(event){
const book=event.target.value;

setBook(book);
}
function handleSubmit(event){
  event.preventDefault();
  console.log(book);

  axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+AIzaSyBgqcC1kGoZgfm_28kWHaIOSCsocOD4Fuc,"+",maxResults=40,")
.then(data=> {

  console.log(data.data.items);
 setResult(data.data.items);
})
,


return(
  <div class="container">
    <h1>Book Search</h1>
    <form OnSubmit={handleSubmit}>
      <div class= "form-group">
         <input 
         type= "text" onChange={handleChange}
         className="form-control mt-10" 
         placeholder="Search for books" 
         autoCompete="off"/>
</div>
<button type ="submit" className="btn btn-danger">Search</button>
    </form>
    {result.map(book) => (
      <img src={book.volumeInfo.imageLinks.thumbnail} alt ={book.title} />img
    )
    </div>
);    

}

const rootElement = document.getElementbyId ("root");
ReactDOM.Render(<App/>, rootElement);
}
