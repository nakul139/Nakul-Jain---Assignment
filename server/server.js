const express = require("express");
const cors = require("cors");
const scrapeRoute = require("./routes/scraper.js");

const app = express();
app.use(cors());
app.use("/", scrapeRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server Listening at ${PORT}`);
});
