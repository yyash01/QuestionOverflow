const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
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
const dbURI =
  "mongodb+srv://yash:jain123@cluster0.wasy4.mongodb.net/DSAOVERFLOW";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(3000, function () {
      console.log("Server is running on Port 3000");
    })
  )
  .catch((err) => console.log(err));

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("home"));
app.get("/profile", (req, res) => res.render("profile"));
app.use("/profile/answer", profileRoutes);
app.use("/profile/question", profileRoutes);
app.use(authRoutes);
app.use(questionRoutes);
app.use("/answer", answerRoutes);
app.use("/questions/:id/answer", answerRoutes);
app.use("/answer/:id/comment", commentRoutes);
