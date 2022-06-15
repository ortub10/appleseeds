const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 3050;

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));

const BASE_URL = "http://api.weatherstack.com/current";
// const KEY = "a074e3d69976dd56a41e98243dd18f1c";
const KEY = "812faae0de38e3fc47c24b3c95827204";

app.get("/:city", (req, res) => {
  const params = { access_key: KEY, query: req.params.city };
  axios
    .get(BASE_URL, { params })
    .then((response) =>
      res.send({ temperature: response.data.current.temperature })
    )
    .catch((err) => res.send({ error: err }));
});

app.listen(PORT, () => {
  console.log(`listen to pore ${PORT}`);
});
