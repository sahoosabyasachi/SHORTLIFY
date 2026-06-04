import express from "express";
import { urlRedirection, urlShortener } from "../controllers/url.controller.js";
import isUserAuthenticate from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/shorten",isUserAuthenticate, urlShortener);

router.get("/:shortId", isUserAuthenticate, urlRedirection);

export default router;
