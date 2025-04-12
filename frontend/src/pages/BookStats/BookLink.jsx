import { Link } from "react-router-dom";

export default function BookLink(props) {
  return (
    <div className="card h-100 text-center">
      <div className="card-body d-flex flex-column justify-content-between align-items-center">
        <h5 className="card-title">{props.name}</h5>

        <img
          src={props.imgPath}
          alt={props.name}
          className="img-fluid mb-3"
          style={{ maxHeight: "200px", width: "auto", objectFit: "contain" }}
        />

        <Link to={`/book/${props._id}`} className="btn btn-primary mt-auto">
          View Details
        </Link>
      </div>
    </div>
  );
}
