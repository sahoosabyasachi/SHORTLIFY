import express from "express";
import { urlRedirection, urlShortener } from "../controllers/url.controller.js";
import isUserAuthenticate from "../middlewares/auth.middleware.js";
import { fetchUser } from "../controllers/fetchUser.controller.js";

const router = express.Router();

router.post("/shorten", isUserAuthenticate, urlShortener);
router.get("/url", isUserAuthenticate, fetchUser);

router.get("/:shortId",  urlRedirection);

export default router;
