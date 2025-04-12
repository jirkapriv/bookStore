import { getAllBooks } from "../../models/Book";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import BookLink from "../BookStats/BookLink";

export default function MainPage() {
    const [books, setBooks] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    const load = async () => {
        const data = await getAllBooks();
        if (data.status === 500) return setLoaded(null);
        if (data.status === 200) {
            setBooks(data.payload);
            setLoaded(true);
        }
    };

    useEffect(() => {
        load();
    }, []);

    if (isLoaded === null) {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            BookStore
                        </Link>
                    </div>
                </nav>
                <div className="container mt-5 text-center">
                    <p>Books not found</p>
                </div>
            </>
        );
    }

    if (!isLoaded) {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            BookStore
                        </Link>
                    </div>
                </nav>
                <div className="container mt-5 text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p>Loading books...</p>
                </div>
            </>
        );
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        BookStore
                    </Link>
                </div>
            </nav>
            <div className="container mt-5">
                <div className="row">
                    {books.map((book, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <BookLink {...book} />
                        </div>
                    ))}
                </div>
                

                <div className="text-center mt-4">
                    <Link to={"/book/addNewBook"} className="btn btn-success">
                        Add new book
                    </Link>
                </div>
            </div>
        </>
    );
}
