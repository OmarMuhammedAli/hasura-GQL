const fetch = require("node-fetch");

const AUTH_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAuFG2Grmd_pj4BHb0XUj9AcLr8aCPz7hw";

exports.loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body.input.credentials;
    console.log(email, password);
    const loginRequest = await fetch(AUTH_URL, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });
    const { idToken, localId } = await loginRequest.json();
    res.status(200).send({
      accessToken: idToken,
      id: localId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};
