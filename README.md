# Sunergy Inc. MVP

This repository contains a very small playable prototype of **Sunergy Inc. Mobile**. The game runs entirely in the browser and uses a simple Node.js server to deliver the static files.

## Getting Started

1. Ensure you have Node.js installed.
2. Run `node server.js`. To use a different port, run `PORT=YOURPORT node server.js` (on Windows: `set PORT=YOURPORT && node server.js`).
3. Open your browser at `http://localhost:YOURPORT` (defaults to `http://localhost:3000`).

## Gameplay

* Buy solar panels with SolarCoins.
* Panels generate energy every few seconds.
* Sell stored energy back to the grid to earn more SolarCoins.
* Energy production also grants carbon credits.

This MVP is simplified and intended as a starting point for further development.
