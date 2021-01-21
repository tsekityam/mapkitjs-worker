var jwt = require("jsonwebtoken");

async function handleRequest(request) {
  var payload = { origin: new URL(request.url).origin };

  var token = jwt.sign(payload, MAPKIT_PRIVATE_KEY, {
    algorithm: "ES256",
    expiresIn: "1h",
    issuer: TEAM_ID,
    keyid: KEY_ID
  });

  const res = new Response(token);
  return res;
}

module.exports = handleRequest;
