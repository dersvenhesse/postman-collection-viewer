# postman-collection-viewer

A simple Vuetify-based project to upload and display exported collection files from Postman directly in the browser.

The latest version ist deployed as GitHub Page: [dersvenhesse.github.io/postman-collection-viewer](https://dersvenhesse.github.io/postman-collection-viewer/).

<p align="center">
  <img src="https://raw.githubusercontent.com/dersvenhesse/postman-collection-viewer/main/screenshot.png" width="640" />
</p>

## Features

* Listing requests from an uploaded collection file, with the following information per request:
  * HTTP method and URL
  * Path (each parents folder name and the requests name)
  * Headers
  * Auth type
  * Body
  * Events (e.g. test, prerequest, postrequest) in a fold-out
* Filtering listed requests by name

## Setup

Run `npm install` and use either `npm run dev` for local development or `npm run build` for production build.

## Known Issues

* Theme changes (to dark or light) don't apply to code blocks until reloading

## Notes

* The code has inspirations from [gopalkildoliya/postman-collection-viewer](https://github.com/gopalkildoliya/postman-collection-viewer)
