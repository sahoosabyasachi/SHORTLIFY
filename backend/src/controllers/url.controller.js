import { nanoid } from "nanoid";
import { urlModel } from "../models/url.model.js";

export const urlShortener = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({
        message: "URL is required",
      });
    }

    let finalUrl = originalUrl;

    if (
      !originalUrl.startsWith("http://") &&
      !originalUrl.startsWith("https://")
    ) {
      finalUrl = `https://${originalUrl}`;
    }

    try {
      new URL(finalUrl);
    } catch (error) {
      return res.status(400).json({ message: "invalid URL!" });
    }

    const shortId = nanoid(9);

    const url = await urlModel.create({
      originalUrl: finalUrl,
      shortId,
    });

    req.user.shortUrls.push(url._id);

    await req.user.save();

    res.status(201).json({
      message: "URL is shortened.",
      url: {
        shortId: url.shortId,
        shortUrl: `${process.env.BASE_URL}/${url.shortId}`,
      },
    });
  } catch (error) {
    console.error("Server error", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const urlRedirection = async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await urlModel.findOne({
      shortId,
    });

    if (!url) {
      return res.status(404).json({
        message: "URL does not exist",
      });
    }

    url.clicks += 1;
    await url.save();

    return res.redirect(url.originalUrl);
  } catch (error) {
    console.error("Server error", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};
