import express from "express";
import { urlRedirection, urlShortener } from "../controllers/url.controller.js";

const router = express.Router();

router.post("/shorten", urlShortener);

router.get("/:shortId", urlRedirection);

export default router;