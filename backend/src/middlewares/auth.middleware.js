import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const isUserAuthenticate = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const id = decoded.id;

    const user = await userModel.findById(id);
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized access",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error:", error);
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }
};

export default isUserAuthenticate
