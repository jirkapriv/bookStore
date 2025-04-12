import { Link } from "react-router-dom";

export default function BookLink(props) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <Link to={`/book/${props._id}`} className="btn btn-primary">
          View Details
        </Link>


      </div>
    </div>
  );
}
