# Remix OPTIONS error repro

Minimal reproduction of errors when loadings Remix v1.8+ apps in Vercel Preview environments with their new [Comments](https://vercel.com/docs/concepts/deployments/comments) feature enabled.

The injected scripts for this feature make an OPTIONS request to `/` on startup, which triggers a 405 response (more details on [original issue](https://github.com/remix-run/remix/issues/5093)). The script appears to fail gracefully, so this is not completely breaking, but may have knock on effects for other apps.

This is a bare minimum reproduction of what the Vercel script is doing on startup.

## Getting started

Install deps with your package manager of choice, run the dev or prod builds and navigate to `http://localhost:3000`. You should see the server error in the terminal, and the 405 response in your browsers Network tab.
