const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.notifyAboutComment = functions.https.onRequest((request, response) => {
  functions.logger.info("Request Body", request.body);
  response.send("Hello from Firebase!");
});
