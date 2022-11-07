const admin = require("firebase-admin");

exports.getUserProfileHandler = async (req, res) => {
  try {
    const { id } = req.body.input;
    const { uid, email, displayName } = await admin.auth().getUser(id);
    console.log(admin.auth().getUser(id))
    res.status(200).send({
      id: uid,
      email,
      displayName,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};
