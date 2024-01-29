const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://lokeshchauhan629:lokesh123@cluster0.zlu5zmi.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

const User = require("./model/User");

// endpoint for registering a user
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // create new user

  const newUser = new User({
    name: name,
    email: email,
    password: password,
  });

  // save the user to database

  newUser
    .save()
    .then((user) => {
      res
        .status(200)
        .json({ message: "User Created Successfully", user: user });
    })
    .catch((err) => {
      res.status(500).json({ message: "User Creation Failed", error: err });
    });
});

// endpoint to login
const createToken = (userId) => {
  // set token payload
  const payload = {
    userId: userId,
  };

  // create token
  const token = jwt.sign(payload, "Q$%&*()!@#$%^&*()_+", { expiresIn: "1h" });
  return token;
};

// endpint for login

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // check if the email and password are provided
  if (!email || !password) {
    res.status(400).json({ message: "Email and Password Required" });
    return; // Add return statement to stop further execution
  }

  // check for the user with the email
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "User Not Found" });
        return; // Add return statement to stop further execution
      }

      // check for the password
      if (user.password !== password) {
        res.status(400).json({ message: "Invalid Password" });
        return; // Add return statement to stop further execution
      }

      const token = createToken(user._id);
      res.status(200).json({ message: "Login Successful", token: token });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Login Failed", error: err });
    });
});
