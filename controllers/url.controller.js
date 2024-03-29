import { nanoid } from "nanoid";
import URL from "../models/url.model.js";

export async function handleGenerateShortUrl(req, res) {
  const body = req.body;
  if (!body.url)
    return res.status(400).json({ error: "Please provide the redirect url!" });
  const shortId = nanoid(6);
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user.id,
  });
  return res.render("home", { id: shortId });
}

export async function handleRedirect(req, res) {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectURL);
  return res.render("home", { id: shortId });
}
export async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res
    .status(200)
    .json({ timesClicked: result.visitHistory.length, analytics: result });
}
