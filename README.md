# MapKit JS Worker

Cloudflare Workers that generate JWT for MapKit JS.

It contains two parts:

- [`/services/jwt`](https://mapkit-js.kytse.com/services/jwt), an API that returns JWT for MapKit JS.
- [`/`](https://mapkit-js.kytse.com/), a simple Apple Maps application, demostrating how to use the API above.

## How to use

1. [Creating a Maps Identifier and a Private Key](https://developer.apple.com/documentation/mapkitjs/creating_a_maps_identifier_and_a_private_key)

2. Add Cloudflare `account_id` to `wrangler.toml`

3. Add `KEY_ID` of the MapKit key and `TEAM_ID` of Apple account to `wrangler.toml`

4. Put private key to Cloudflare Worker

   ```bash
   $ cat {path_to/AuthKey_xxx.p8} | wrangler secret put MAPKIT_PRIVATE_KEY
   ```

5. Publish to Cloudflare Worker

   `$ wrangler publish`

## References

- https://developers.cloudflare.com/workers/cli-wrangler/configuration
- https://developer.apple.com/maps/web/
- https://developer.apple.com/documentation/mapkitjs/creating_and_using_tokens_with_mapkit_js
- https://jwt.io/
