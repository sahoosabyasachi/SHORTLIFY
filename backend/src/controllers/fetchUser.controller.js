import { userModel } from "../models/user.model.js";

export const fetchUser = async (req, res) => {
  const urls = await userModel.findById(req.user._id).populate("shortUrls");

  res.json({
    url: urls.shortUrls,
  });
};
