import { deleteBook } from "../../models/Book";
import { useParams, useNavigate } from "react-router-dom";

export default function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const res = await deleteBook(id);
    if (res.status === 200) {
      navigate("/");
    } else {
      alert("Failed to delete book.");
    }
  };

  return (
    <>
      <br />
      <button onClick={handleDelete} className="btn btn-danger">
        Delete Book
      </button>
    </>
  );
}
