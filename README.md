# test-client-for-oauth2
OAuth2 client (server) helps testing OAuth providers

## Reason

Need a client application which tests my OAuth2 provider implementation, or any other for that sake.

## Setup

- clone repo
- install dependencies `npm i`
- modify `config.js`
  - **port** default `9090`
  - **baseUrl** used to build `redirect_uri`
  - **client** object is passed as options to [client-oauth2](https://github.com/mulesoft/js-client-oauth2#options-global-and-method-based)
    * **clientId** The client id string assigned to you by the provider
    * **clientSecret** The client secret string assigned to you by the provider (not required for `token`)
    * **accessTokenUri** The url to request the access token (not required for `token`)
    * **authorizationUri** The url to redirect users to authenticate with the provider (only required for `token` and `code`)
    * **redirectUri** A custom url for the provider to redirect users back to your application (only required for `token` and `code`)
    * **scopes** An array of scopes to authenticate against
    * **state** Nonce sent back with the redirect when authorization is complete to verify authenticity (should be random for every request)
  - **paths.authFlowStart** this path will start authentication sequence (eg: redirect to get authorization code)
  - **paths.authFlowCallback** callback path finishes OAuth flow and renders token. Also used to build `redirect_uri`
- start app `node index`
- open `baseUrl` and follow `Get auth token` link to initiate auth flow

