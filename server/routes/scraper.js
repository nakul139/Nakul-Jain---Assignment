const express = require("express");
const { exec } = require("child_process");
const path = require("path");
const router = express.Router();

const pythonCmd = process.platform === "win32" ? "python" : "python3";

router.get("/", (req, res) => {
  exec(
    `${pythonCmd} scraper.py`,
    { cwd: path.join(__dirname, "..") },
    (err, stdout, stderr) => {
      if (err) {
        console.error("Script Error:", stderr || err.message);
        return res.status(500).json({ error: err.message });
      }

      try {
        const data = JSON.parse(stdout);
        res.json(data);
      } catch (parseErr) {
        console.error("Parse Error:", parseErr.message);
        res.status(500).json({ error: "Failed to parse Python output" });
      }
    }
  );
});

module.exports = router;
