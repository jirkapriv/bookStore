const Book = require("../models/book");

exports.createBook = async (req, res) => {
  try {
    const newBook = new Book({
      name: req.body.name,
      author: req.body.author,
      published: req.body.published,
      price: req.body.price,
      imgPath: req.body.imgPath,
    });

    const result = await newBook.save();

    if (result) {
      return res.status(200).json({
        msg: "Vse ok kniha vytvorena",
        payload: result,
      });
    } else {
      return res.status(400).json({
        msg: "Chyba při vytváření knihy",
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Chyba na serveru",
    });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const result = await Book.find();

    if (result) {
      return res
        .status(200)
        .send({ msg: "Vse ok knihy najity", payload: result });
    }
    res.status(500).send({
      msg: "neco se nepovedlo",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBook = async (req, res) => {
  try {
    const result = await Book.findById(req.params.id);

    if (result) {
      return res
        .status(200)
        .send({ msg: "Vse ok kniha najita", payload: result });
    }
    res.status(500).send({
      msg: "neco se nepovedlo",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updatedBook = {
      name: req.body.name,
      author: req.body.author,
      published: req.body.published,
      price: req.body.price,
      imgPath: req.body.imgPath,
    };

    const result = await Book.findByIdAndUpdate(req.params.id, updatedBook);

    if (result) {
      return res
        .status(200)
        .send({ msg: "Vse ok kniha updatnuta", payload: result });
    }
    res.status(500).send({
      msg: "neco se nepovedlo",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);

    if (result) {
      return res
        .status(200)
        .send({ msg: "Vse ok kniha smazana", payload: result });
    }
    res.status(500).send({
      msg: "neco se nepovedlo",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
