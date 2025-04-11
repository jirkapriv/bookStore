const Book = require("../models/book");

exports.createBook = async (req, res) => {
  try {
    const newBook = new Book({
      name: req.body.name,
      author: req.body.author,
      published: req.body.published,
      price: req.body.price,
    });
    const result = await newBook.save();

    if (result) {
      return res
        .status(200)
        .send({ msg: "Vse ok kniha vytvorena", payload: result });
    }
    res.status(500).send({
      msg: "neco se nepovedlo",
    });
  } catch (error) {
    res.status(500).send(error);
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

exports.getBook = async (req, res) =>{
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

}