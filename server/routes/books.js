const express = require("express");
const router = express.Router();

const BookContoller = require("../controllers/books")

router.post("/", BookContoller.createBook)
router.get("/", BookContoller.getAllBooks)
router.get("/:id", BookContoller.getBook)
router.put("/:id", BookContoller.updateBook)
router.delete("/:id", BookContoller.deleteBook)

module.exports = router;
