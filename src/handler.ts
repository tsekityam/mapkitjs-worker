import { Router } from "itty-router";

import MapKitJS from "./handlers/mapkitjs";
import Demo from "./handlers/demo";

const router = Router();

router.get("/", Demo).get("/services/jwt", MapKitJS);

export const handleRequest = (request: Request) => router.handle(request);
