var jwt = require("jsonwebtoken");

const MapKitJS = async (request: Request) => {
  var payload = {
    origin: ORIGIN,
  };

  var token = jwt.sign(payload, MAPKIT_PRIVATE_KEY, {
    algorithm: "ES256",
    expiresIn: "1d",
    issuer: TEAM_ID,
    keyid: KEY_ID,
  });

  const headers = {
    "Access-Control-Allow-Origin": ORIGIN,
  };
  return new Response(token, { headers });
};

export default MapKitJS;
