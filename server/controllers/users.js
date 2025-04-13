const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      name: req.body.name,
      password: passwordHash,
      role: "user",
    });

    const result = await newUser.save();
    const token = jwt.sign(
      { id: result._id, role: result.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).send({
      msg: "User created successfully",
      token,
      payload: { id: result._id, name: result.name, role: result.role },
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) {
      return res.status(400).send({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).send({ msg: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).send({
      msg: "Login successful",
      token,
      payload: { id: user._id, name: user.name, role: user.role },
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
