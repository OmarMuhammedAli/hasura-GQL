const { logger } = require("firebase-functions");

exports.notifyAboutCommentHandler = async (req, res) => {
  logger.info("Request Body", req.body);
  res.send("Hello from Firebase!");
}