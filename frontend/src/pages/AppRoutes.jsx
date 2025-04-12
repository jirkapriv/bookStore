import { Route, Routes, BrowserRouter } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import BookInfo from "./BookInfo/BookInfo";
import CreateBook from "./CreateBook/CreateBook";
import UpdateBook from "./updateBook/UpdateBook";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/book/:id" element={<BookInfo />} />
          <Route path="/book/addNewBook" element={<CreateBook/>} />
          <Route path="/book/:id/update" element={<UpdateBook/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
