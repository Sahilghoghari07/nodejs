const users = require("../models/userModel");

// get all users
const getUsers = (req, res) => {
  res.status(200).json(users);
};

// get single users
const getUserById = (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));

  if (!user) return res.status(404).json({ message: "User not found!" });
  res.json(user);
};

// add new user
const addUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User Added Successfully",
    data: newUser,
  });
};

// update user
const updateUser = (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found!" });
  }

  if (!req.body.name) {
    return res.status(400).json({ message: "Name is required" });
  }

  user.name = req.body.name;

  res.status(200).json({
    message: "User updated successfully",
    data: user,
  });
};

// delete user
const deleteUserById = (req, res) => {
  let index = users.findIndex((user) => user.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "User not found!" });
  }

  users.splice(index, 1);

  res.status(200).json({
    message: "User deleted successfully",
    data: users,
  });
};

module.exports = { getUsers, getUserById, addUser, updateUser, deleteUserById };
