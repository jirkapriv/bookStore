import { updateBook, getBook } from "../../models/Book";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function UpdateBook() {
  const [formData, setFormData] = useState({});
  const [info, setinfo] = useState();
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  const load = async () => {
    const data = await getBook(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      const bookData = data.payload;
      setBook(bookData);
      setFormData(bookData); // optional, if you want to pre-fill the formData too
      setLoaded(true);
    }
  };

  const updateForm = async () => {
    const book = await updateBook(id, formData);
    if (book.status === 200) {
      redirectToSuccessPage(book.payload._id);
    } else {
      setinfo(book.msg);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    updateForm();
  };
  const sterilizeDate = (rawDate) => {
    return rawDate.split("T")[0];
  };
  
  const cleanDate = book.published ? sterilizeDate(book.published) : "";
  const redirectToSuccessPage = (id) => {
    return navigate(`/book/${id}`);
  };




  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Update Book</h1>

      {info && <div className="alert alert-danger">{info}</div>}

      <form onSubmit={handlePost} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Book Name
          </label>
          <input
            type="text"
            defaultValue={book.name}
            className="form-control"
            required
            name="name"
            placeholder="Enter book name"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            defaultValue={book.author}
            className="form-control"
            required
            name="author"
            placeholder="Enter author's name"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="published" className="form-label">
            Published Date
          </label>
          <input
            type="date"
            defaultValue={cleanDate}
            className="form-control"
            required
            name="published"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            defaultValue={book.price}
            className="form-control"
            required
            name="price"
            placeholder="Enter price"
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <Link to="/" className="btn btn-secondary">
            Go back
          </Link>
        </div>
      </form>
    </div>
  );
}
