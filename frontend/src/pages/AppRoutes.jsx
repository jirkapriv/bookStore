import { Route, Routes, BrowserRouter } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import BookInfo from "./BookInfo/BookInfo";
import CreateBook from "./CreateBook/CreateBook";
import UpdateBook from "./updateBook/UpdateBook";
import RegisterUser from "./RegisterUser/RegisterUser";
import LoginUser from "./LoginUser/LoginUser";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/book/:id" element={<BookInfo />} />
          <Route path="/book/addNewBook" element={<CreateBook />} />
          <Route path="/book/:id/update" element={<UpdateBook />} />
          <Route path="/user/register" element={<RegisterUser />} />
          <Route path="/user/login" element={<LoginUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
