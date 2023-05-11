const authRouter = require('express').Router()
const Users = require("../controllers/users.controllers")
const { createNewUser, checkEmail } = require("../middlewares/users.middlewares")
const { verifyToken } = require("../middlewares/token.middleware")

authRouter.post("/sign-up", createNewUser, Users.createUser)

authRouter.post("/login", checkEmail, Users.loginUser)

// authRouter.post("/change-password", verifyToken, Users.changePassword)

authRouter.post("/forget-password", checkEmail, Users.forgetPassword)

authRouter.get("/verify-token", verifyToken, Users.authenticateToken)

module.exports = authRouter