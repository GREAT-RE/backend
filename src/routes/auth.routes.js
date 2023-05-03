const authRouter = require('express').Router()
const Users = require("../controllers/users.controller.js")
const { createNewUser, checkEmail } = require("../middlewares/users.middleware.js")

authRouter.post("/sign-up", createNewUser, Users.createUser)

authRouter.post("/login", checkEmail ,Users.login)