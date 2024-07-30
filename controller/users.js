const axios = require("axios");
const { createViewPath } = require("../helpers/create_view_path");

const getUsers = async (req, res) => {
  try {
    const userData = await axios("https://jsonplaceholder.typicode.com/users");
    const users = await userData.data;
    res.render(createViewPath("users"), {
      title: "Users",
      users,
      page_name: "users",
    });
  } catch (error) {
    console.log();
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    res.render(createViewPath("user"), {
      title: "Users",
      user: data,
      page_name: "users",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAddUser = async (req, res) => {
  res.render(createViewPath("add-user"), {
    title: "Yangi user",
    page_name: "users",
  });
};

const postAddUser = async (req, res) => {
  const { username, email } = req.body;
  try {
    const userData = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      {
        username,
        email,
      }
    );
    const user = userData.data;
    res.render(createViewPath("user"), {
      title: "Yangi qo'shilgan",
      user,
      page_name: "users",
    });
  } catch (error) {
    console.log(error);
  }
};

const delUserByID = async (req, res) => {
  const { id } = req.params;
  try {
    const userData = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = userData.data;
    console.log("Ochirilgan", user, "Ochirilgan");
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};

const getEditByID = async (req, res) => {
  const { id } = req.params;
  try {
    const userData = await axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
    });
    const user = userData.data;
    res.render(createViewPath("edit-user"), {
      title: user.username,
      user,
      page_name: "users",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  getAddUser,
  postAddUser,
  delUserByID,
  getEditByID,
};
