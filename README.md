# Naija Quest — 3D Adventure

A browser-based 3D adventure set in a colourful Nigerian village. Players create a character, choose male or female, select a skin tone and outfit, and collect five golden kola nuts while avoiding hazards.

## Project structure

```text
naija-quest/
├── public/
│   ├── index.html
│   └── assets/
│       ├── css/style.css
│       └── js/game.js
├── server.js
├── package.json
├── render.yaml
├── .gitignore
└── README.md
```

## Run locally

Requirements: Node.js 20 or newer and an internet connection (Three.js is loaded from jsDelivr).

```bash
npm install
npm start
```

Open <http://localhost:10000>.

## Controls

- Keyboard: W, A, S, D or arrow keys.
- Touch screens: use the on-screen directional pad.

## Deploy to Render

1. Push this project to a GitHub repository.
2. In Render, choose **New + → Blueprint** and connect the repository, or create a **Web Service**.
3. For a Web Service use:
   - Runtime: Node
   - Build command: `npm install`
   - Start command: `npm start`
   - Health check path: `/health`
4. Deploy. Render will use the included `render.yaml` if you create a Blueprint.

## Current scope

This is a single-player browser prototype. It has character naming and appearance choices, a 3D village scene, collectible treasures, hazards, lives and touch/keyboard controls. It does not yet include online multiplayer, account registration, cloud-saved progress, or a server-side leaderboard.

The 3D scene uses Three.js as a browser ES module loaded from jsDelivr; the Node.js server serves the game and exposes a health endpoint.
