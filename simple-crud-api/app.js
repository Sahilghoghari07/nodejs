const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Sahil" },
  { id: 2, name: "Vivek" },
];

// get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// get single users
app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  console.log(user);

  if (!user) return res.status(404).json({ message: "User not found!" });

  res.json(user);
});

// add new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User Added Successfully",
    data: newUser,
  });
});

// update user
app.put("/users/:id", (req, res) => {
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
});

// delete user
app.delete("/users/:id", (req, res) => {
  users = users.filter((user) => user.id !== parseInt(req.params.id));

  res.json({ message: "User deleted", data: users });
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
