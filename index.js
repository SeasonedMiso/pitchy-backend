//start with: node index.js

const express = require("express");
const app = express();
const port = 80;
const data = require("./sentencestest.json");
const cors = require("cors");
const MeCab = new require("mecab-async"),
  mecab = new MeCab();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/pitch", (req, res) => {
  console.log("a");
  res.header("Access-Control-Allow-Origin", "*");
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// mecab.wakachi(
//   "いつもニコニコあなたの隣に這い寄る混沌ニャルラトホテプです！",
//   function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   }
// );
