const express = require("express");
const {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUserById,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUserById);

module.exports = router;
