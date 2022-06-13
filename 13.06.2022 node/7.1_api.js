const url = "https://www.fruityvice.com/api/fruit/all";
// axios

const axios = require("axios");
axios
  .get(url)
  .then((result) => {
    console.log(result.data);
  })
  .catch((error) => {
    console.log(error);
  });

//-------------------------------------------

//request

const request = require("request");
request(url, (error, response, body) => {
  if (response.statusCode === 200) {
    console.log(JSON.parse(body));
  } else if (response.statusCode === 404) {
    console.error(error);
  }
});

//---------------------------------------------

//superagent

const superagent = require("superagent");

superagent
  .get(url)
  .then((response) => {
    console.log(JSON.parse(response.text));
  })
  .catch((err) => {
    console.log(err);
  });
