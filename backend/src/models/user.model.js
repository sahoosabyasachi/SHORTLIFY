import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  shortUrls: [
    {
      type: mongoose.Types.ObjectId,
      ref: "url",
    },
  ],
});

export const userModel = mongoose.model("user", userSchema);
