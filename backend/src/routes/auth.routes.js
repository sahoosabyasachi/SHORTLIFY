import express from "express";
import { logInUser, registerUser } from "../controllers/auth.controller.js";
import isUserAuthenticate from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", logInUser);
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  
  return res.status(200).json({
    message:"Logged out successfully"
  })
});
router.get("/user", isUserAuthenticate, (req, res) => {
  const user = req.user;
  res.json({
    user: {
      userName: user.userName,
    },
  });
});

export default router;
