const express = require ("express")
const { getUsers, addUser, getUser, updateUser, deleteUser } = require("../controllers/users")
const router = express.Router()

router.get = ("/", getUsers)

router.post = ("/", addUser)

router.get=("/:id", getUser)

router.put = ("/:id", updateUser)

router.delete = ("/:id", deleteUser)

module.exports = router