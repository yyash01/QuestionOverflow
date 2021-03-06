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
  // "mongodb+srv://yash:jain123@cluster0.wasy4.mongodb.net/DSAOVERFLOW";
  "mongodb+srv://yash:jain123@cluster0.wasy4.mongodb.net/DSAOVERFLOW";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(
    (result) =>
      app.listen(3000, function () {
        console.log("Server is running on Port 3000");
      })
    // .on("error", function (err) {
    //   process.once("SIGUSR2", function () {
    //     process.kill(process.pid, "SIGUSR2");
    //   });
    //   process.on("SIGINT", function () {
    //     // this is only called on ctrl+c, not restart
    //     process.kill(process.pid, "SIGINT");
    //   });
    // })
  )
  .catch((err) => console.log(err));

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("login"));
app.use("/profile", profileRoutes);
app.use(authRoutes);
app.use(questionRoutes);
app.use("/answer", answerRoutes);
app.use("/questions/:id/answer", answerRoutes);
app.use("/answer/:id/comment", commentRoutes);
app.use("/comment", commentRoutes);
