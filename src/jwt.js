var njwt = require("njwt");
var url = require("url");

async function handleRequest(request) {
  var claims = {
    iss: TEAM_ID,
    iat: Math.floor(Date.now() / 1000),
    origin: url.parse(request.url).hostname
  };

  var jwt = njwt.create(claims, MAPKIT_PRIVATE_KEY, "ES256");
  jwt.setHeader("kid", KEY_ID);

  var token = jwt.compact();

  const res = new Response(token);
  res.headers.set("access-control-allow-origin", "same-origin");
  return res;
}

module.exports = handleRequest;
