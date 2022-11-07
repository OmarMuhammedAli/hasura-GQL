const functions = require("firebase-functions");
const {notifyAboutCommentHandler} = require('./notifyAboutComments')
const {createUserHandler} = require('./createUser')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.notifyAboutComment = functions.https.onRequest(
  notifyAboutCommentHandler
);

exports.createUser = functions.https.onRequest(
  createUserHandler
)
