require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const { createViewPath } = require("./helpers/create_view_path");
const userRoute = require("./routes/users");
const PORT = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("styles")); //serveStatic
app.use(express.static("images")); //serveStatic
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(morgan("combined")); //middleware ulash

app.get("/", async (req, res) => {
  const userPost = await fetch("https://jsonplaceholder.typicode.com/posts");
  const uPosts = await userPost.json();
  res.render(createViewPath("index"), {
    title: "Main",
    uPosts,
    page_name: "main",
  });
});

app.use(userRoute);

app.get("/gallery", (req, res) => {
  res.render(createViewPath("gallery"), {
    title: "Galleriya",
    page_name: "gallery",
  });
});
app.get("/contact", (req, res) => {
  res.render(createViewPath("contact"), {
    title: "Kontaklarim",
    page_name: "contact",
  });
});
app.use((req, res) => {
  res.render(createViewPath("error404"), {
    title: "Xatolik",
    page_name: "error",
  });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishga tushdi`);
});
