# MapKit JS Worker

Cloudflare Workers that generate JWT for MapKit JS.

It contains two parts:

- [`/services/jwt`](https://mapkitjs.kytse.com/services/jwt), an API that returns JWT for MapKit JS.
- [`/`](https://mapkitjs.kytse.com/), a simple Apple Maps application, demostrating how to use the API above.

## How to use

1. [Creating a Maps Identifier and a Private Key](https://developer.apple.com/documentation/mapkitjs/creating_a_maps_identifier_and_a_private_key)

2. Upload your Cloudflare API token to GitHub repository secret `CF_API_TOKEN`

3. Upload your MapKit Key to GitHub repository secret `MAPKIT_PRIVATE_KEY`

4. Replace my Cloudflare `account_id` with yours in `wrangler.toml`

5. Replace my MapKit JS `KEY_ID` with yours in `wrangler.toml`

6. Replace my Apple Developer `TEAM_ID` with yours in `wrangler.toml`

Once you commit the changes in `wrangler.toml` to GitHub, GitHub Actions should be triggered and deploy the services to Cloudflare Workers

## References

- https://github.com/marketplace/actions/deploy-to-cloudflare-workers-with-wrangler
- https://developers.cloudflare.com/workers/cli-wrangler/configuration
- https://developer.apple.com/maps/web/
- https://developer.apple.com/documentation/mapkitjs/creating_and_using_tokens_with_mapkit_js
- https://jwt.io/
