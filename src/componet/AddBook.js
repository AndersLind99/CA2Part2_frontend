import { useState } from "react";
import { Prompt } from "react-router";



function AddBook(props) {
  const [book, setBook] = useState({ id: null, title: "", info: "" });
  let [isBlocking,setIsBlocking] = useState(false);
  

  const handlesubmit = (evt) => {
    setIsBlocking(false);
    evt.preventDefault();
    props.bookFacade.addBook(book);
   
    
  };
  

  const handleInput = (evt) => {
    setIsBlocking(true);
    const target = evt.target;
    book[target.id] = target.value;
    setBook({ ...book });
  };

  return (
    <div>
      <h1>Add Book</h1>

    
      <form onSubmit={handlesubmit} onChange={handleInput}>
      <Prompt
        when={isBlocking}
        message={location =>
          `Are you sure you want to go to ${location.pathname}`
        }
      />

        <input
          id="title"
          type="text"
          placeholder="Title"
          defaultValue={book.title}
        />
        <br />
        <input
          id="info"
          type="text"
          placeholder="Info"
          defaultValue={book.info}
        />
        <br />
        <button onClick={handlesubmit} >Add book</button>
      </form>
    </div>
  );
}



export default AddBook;
