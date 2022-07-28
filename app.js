const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const questionRoutes = require("./routes/questionsRoutes");
const answerRoutes = require("./routes/answersRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

//db conections
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((result) =>
    app.listen(3000, function () {
      console.log("Server is running on Port 3000");
    })
  )
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.use(authRoutes);
app.use("/profile", profileRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);
app.use("/comment", commentRoutes);
