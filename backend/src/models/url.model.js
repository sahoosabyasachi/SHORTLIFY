import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortId: {
        type: String,
        required: true
    },
    clicks:{
        type: Number,
        default: 0
    }

})

export const urlModel = mongoose.model("url", urlSchema);