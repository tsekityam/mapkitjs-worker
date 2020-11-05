var jwt = require("jsonwebtoken");
var url = require("url");

async function handleRequest(request) {
  var payload = {
    origin: url.parse(request.url).hostname,
  };

  var token = jwt.sign(payload, MAPKIT_PRIVATE_KEY, {
    algorithm: "ES256",
    expiresIn: "60m",
    issuer: TEAM_ID,
    keyid: KEY_ID,
  });

  const res = new Response(token);
  res.headers.set("access-control-allow-origin", "same-origin");
  return res;
}

module.exports = handleRequest;
