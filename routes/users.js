const express = require("express");
const { createViewPath } = require("../helpers/create_view_path");
const {
  getUsers,
  getUserById,
  getAddUser,
  postAddUser,
  delUserByID,
  getEditByID,
} = require("../controller/users");

const router = express.Router();

// router.get("/post/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const { data } = await axios(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     );
//     res.render(createViewPath("post"), {
//       title: "Posts",
//       post: data,
//       page_name: "posts",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get("/users", getUsers);
router.get("/user/:id", getUserById);

router.get("/add-user", getAddUser);
router.post("/add-user", postAddUser);

router.delete("/user/:id", delUserByID);

router.get("/edit/:id", getEditByID);

module.exports = router;
