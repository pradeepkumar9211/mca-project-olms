const { Router } = require("express");
const signUp = require("../controllers/authController");

const AuthRouter = Router();

AuthRouter.post("/", signUp);

module.exports = AuthRouter;
