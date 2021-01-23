# MapKit JS Worker

Cloudflare Workers that generate JWT for MapKit JS.

It contains two routes:

- [`/services/jwt`](https://mapkitjs.kytse.com/services/jwt), an API endpoint that returns JWT for MapKit JS.
- [`/`](https://mapkitjs.kytse.com/), a simple Apple Maps application, demostrating how to use the API above.

## How to use

This repository use GitHub Actions to deploy the service to Cloudflare Workers

1. Upload your Cloudflare API token to `CF_API_TOKEN` in GitHub repository secret

2. Upload your MapKit Key to `MAPKIT_PRIVATE_KEY` in GitHub repository secret

3. Replace my Cloudflare `CF_ACCOUNT_ID` with yours in `.github/workflows/main.yml`

4. Replace my Cloudflare `CF_ZONE_ID` with yours in `.github/workflows/main.yml`

5. Replace my MapKit JS `KEY_ID` with yours in `wrangler.toml`

6. Replace my Apple Developer `TEAM_ID` with yours in `wrangler.toml`

7. Replace my routes `ROUTES` with yours in `wrangler.toml`

Once you commit the changes to GitHub, GitHub Actions should be triggered and deploy the services to Cloudflare Workers

## References

- https://github.com/marketplace/actions/deploy-to-cloudflare-workers-with-wrangler
- https://developers.cloudflare.com/workers/cli-wrangler/configuration
- https://developer.apple.com/maps/web/
- https://developer.apple.com/documentation/mapkitjs/creating_and_using_tokens_with_mapkit_js
- https://jwt.io/
