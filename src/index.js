const Router = require("./router");

const jwtHandler = require("./jwt");
const uiHandler = require("./ui");

async function handleRequest(request) {
  const r = new Router();

  r.get(".*/services/jwt", jwtHandler);
  r.get(".*/", uiHandler);

  return await r.route(request);
}

module.exports = handleRequest;
