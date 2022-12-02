const express = require("express");
const app = express();
const router = express.Router();
const port = 8080;

router.get("/", (req, res) => {
  res.send("welcome!");
});

// body 에 들어오는 데이터를 json 형식으로 변환해서 읽는 body parser middleware
app.use("/api", express.json(), router);

app.listen(port, () => {
  console.log(port, " port is opened");
});
