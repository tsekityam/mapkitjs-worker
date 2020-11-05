# MapKit JS Worker

Worker for demostrating how to use MapKit JS.

This worker contains two parts.

- [`/services/jwt`](https://mapkit-js.kytse.workers.dev/services/jwt), an API that returns JWT for MapKit JS.
- [`/`](https://mapkit-js.kytse.workers.dev/), a simple Apple Maps application, demostrating how to use the API above.

## How to use

1. [Creating a Maps Identifier and a Private Key](https://developer.apple.com/documentation/mapkitjs/creating_a_maps_identifier_and_a_private_key)

2. Update `account_id` and `zone_id` in `wrangler.toml`

3. Put secrets to Cloudflare Worker

   ```bash
   $ cat {path_to/AuthKey_xxx.p8} | wrangler secret put MAPKIT_PRIVATE_KEY
   $ wrangler secret put KEY_ID
   $ wrangler secret put TEAM_ID
   ```

4. Publish to Cloudflare Worker

   `$ wrangler publish`

## References

- https://developer.apple.com/maps/web/
- https://developer.apple.com/documentation/mapkitjs/creating_and_using_tokens_with_mapkit_js
- https://jwt.io/
