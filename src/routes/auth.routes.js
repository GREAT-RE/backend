const authRouter = require('express').Router()
const Users = require("../controllers/users.controllers")
const { createNewUser, checkEmail, verifyToken } = require("../middlewares/users.middlewares")

authRouter.post("/sign-up", createNewUser, Users.createUser)

authRouter.post("/login", checkEmail, Users.loginUser)

// authRouter.post("/change-password", verifyToken, Users.changePassword)

authRouter.post("/forget-password", checkEmail, Users.forgetPassword)

module.exports = authRouter