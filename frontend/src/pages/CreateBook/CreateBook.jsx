import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createBook } from "../../models/Book";

export default function CreateBook() {
  const [formData, setFormData] = useState({});
  const [info, setinfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const book = await createBook(formData);
    if (book.status === 200) {
      redirectToSuccessPage(book.payload._id);
    } else {
      setinfo(book.msg);
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/book/${id}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create New Book</h1>

      {info && <div className="alert alert-danger">{info}</div>}

      <form onSubmit={handlePost} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Book Name
          </label>
          <input
            type="text"
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
            className="form-control"
            required
            name="price"
            placeholder="Enter price"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="imgPath" className="form-label">
            img Path
          </label>
          <input
            type="text"
            className="form-control"
            required
            name="imgPath"
            placeholder="Enter path to img"
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
