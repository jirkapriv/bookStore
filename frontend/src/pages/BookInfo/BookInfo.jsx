import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBook } from "../../models/Book";
import { Link } from "react-router-dom";
import DeleteBook from "../../components/DeleteBook/DeleteBook";

export default function BookInfo(props) {
  const [book, setBook] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  const load = async () => {
    const data = await getBook(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setBook(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <div className="container mt-5 text-center">
        <p>Book not found</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading book...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Book: {book.name}</h2>
          <div className="mb-3">
            <h5 className="card-text">
              Book ID: <strong>{id}</strong>
            </h5>
          </div>
          <div className="mb-3">
            <h5 className="card-text">
              Author: <strong>{book.author}</strong>
            </h5>
          </div>
          <div className="mb-3">
            <h5 className="card-text">
              Published: <strong>{book.published}</strong>
            </h5>
          </div>
          <div className="mb-3">
            <h5 className="card-text">
              Price: <strong>${book.price}</strong>
            </h5>
          </div>
          <div>
            <img
              src={book.imgPath}
              alt="idk"
              className="img-fluid mb-3"
              style={{
                maxHeight: "200px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="text-center">
            <Link to="/" className="btn btn-secondary">
              Go back
            </Link>
            <br />
            <br />
            <Link to={`/book/${id}/update`} className="btn btn-secondary">
              go to update page
            </Link>
            <br />

            <DeleteBook />
          </div>
        </div>
      </div>
    </div>
  );
}
