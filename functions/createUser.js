const { logger } = require("firebase-functions");
const admin = require('firebase-admin')

const credentials = require('./hasura-course-61c82-firebase-adminsdk-lwy7l-db5102e122.json')

admin.initializeApp({
  credential: admin.credential.cert(credentials)
})

exports.createUserHandler = async (req, res) => {
  try {
    logger.log(req.body);

    const { email, password, displayName } = req.body.input.credentials;
    
    const user = await admin.auth().createUser({
      email,
      password,
      displayName,
    });
    
    await admin.auth().setCustomUserClaims(user.uid, {
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["user"],
        "x-hasura-default-role": "user",
        "x-hasura-user-id": user.uid,
      },
    });

    res.status(200).send({
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};
