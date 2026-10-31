const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;
const publicDirectory = path.join(__dirname, "public");

app.disable("x-powered-by");
app.use(express.static(publicDirectory, {
  extensions: ["html"],
  maxAge: process.env.NODE_ENV === "production" ? "1h" : 0
}));

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    application: "Naija Quest",
    timestamp: new Date().toISOString()
  });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDirectory, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Naija Quest is listening on port ${PORT}`);
});
