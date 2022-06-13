const https = require("https");

https.get("https://www.fruityvice.com/api/fruit/all", (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});
