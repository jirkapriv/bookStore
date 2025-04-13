const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeAdmin = require("../middlewares/authorizeAdmin");
const BookContoller = require("../controllers/books");

router.post("/", authenticateToken, authorizeAdmin, BookContoller.createBook);
router.get("/", BookContoller.getAllBooks);
router.get("/:id", BookContoller.getBook);
router.put("/:id", authenticateToken, authorizeAdmin, BookContoller.updateBook);
router.delete("/:id", authenticateToken, authorizeAdmin, BookContoller.deleteBook);

module.exports = router;
