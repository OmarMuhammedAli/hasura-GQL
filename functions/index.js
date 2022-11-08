const functions = require("firebase-functions");
const admin = require("firebase-admin");
const initApolloServer = require("./remoteSchema");

const { notifyAboutCommentHandler } = require("./notifyAboutComments");
const { createUserHandler } = require("./createUser");
const { getUserProfileHandler } = require("./getUserProfile");
const { loginHandler } = require("./login");
const { uploadPhotoHandler } = require("./uploadPhoto");

const credentials = require("./hasura-course-61c82-firebase-adminsdk-lwy7l-db5102e122.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
  storageBucket: 'gs://hasura-course-61c82.appspot.com'
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.notifyAboutComment = functions.https.onRequest(
  notifyAboutCommentHandler
);

exports.createUser = functions.https.onRequest(createUserHandler);

exports.getUserProfile = functions.https.onRequest(getUserProfileHandler);

exports.firebaseUserProfile = functions.https.onRequest(
  initApolloServer.createHandler()
);

exports.login = functions.https.onRequest(loginHandler);

exports.uploadPhoto = functions.https.onRequest(uploadPhotoHandler);
