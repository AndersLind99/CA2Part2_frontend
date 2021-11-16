import { useParams } from "react-router";

function Details(props) {
  let { id } = useParams();
  let { title, info } = props.bookFacade.findBook(id);

  return (
    <div>
      <div>
        <h2>Title: {title}</h2>
        ID: {id} <br />
        Info: {info}
      </div>
    </div>
  );
}

export default Details;
