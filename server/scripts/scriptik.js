// script to add default admin to mongoDB
// add plainPassword and mongo connection string
// server needs to run ofc to connect to database, runn it by- node scriptik.js
// bcrypt installed is need

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user");

async function createAdmin() {
  await mongoose.connect("");

  const username = "admin";
  const plainPassword = "";
  const hash = await bcrypt.hash(plainPassword, 10);

  const admin = new User({
    name: username,
    passwordHash: hash,
    role: "admin",
  });

  await admin.save();
  console.log("Admin user created!");
  mongoose.disconnect();
}

createAdmin();
