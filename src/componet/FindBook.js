import { Switch } from "react-router";
import { Route } from "react-router";
import Details from "./details";

// TODO: finish the search part of finding a book, thinking make a form with 1 box for the book id.

function FindBook(props) {
  return (
    <div>
<div>



  
</div>




      <div>
        <Switch>
          <Route path={"/find-book/:id"}>
            <Details bookFacade={props.bookFacade} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default FindBook;
