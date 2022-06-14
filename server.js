const express = require("express");
const axios = require('axios').default;
// const routes = require('./controllers/');

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(routes);
app.get("/api", (req, res) => {
 
  const options = {
    method: 'GET',
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BYND&outputsize=compact&apikey=${process.env.API_KEY}`,
  };
  
  axios.request(options).then(function (response) {
     return response.data
  })
  .then((data) => {
    res.send(data)
  })
  .catch(function (error) {
    console.error(error);
  });






  });
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});