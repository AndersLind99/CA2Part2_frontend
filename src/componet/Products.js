import { Link, Switch, Route } from "react-router-dom";
import Details from "./details";

function Products(props) {
  return (
    <div>
      <h1>products page</h1>
      <ul>
        {props.bookFacade.getBooks().map((book) => (
          <li key={book.id}>
            Id: {book.id}, Title: {book.title}{" "}
            <Link to={`/products/${book.id}`}>Details</Link>{" "}
          </li>
        ))}
      </ul>
      <hr />

      <Switch>
        <Route path={"/products/:id"}>
          <Details bookFacade={props.bookFacade} />
        </Route>
      </Switch>
    </div>
  );
}

export default Products;
