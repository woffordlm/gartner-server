const router = require('express').Router();
const axios = require('axios').default;

router.get("/api/stock/:name", (req,res) => {
    let name = req.params.name
     const options = {
         method: 'GET',
         url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name}&outputsize=compact&apikey=${process.env.API_KEY}`,
       };
       
       axios.request(options).then(function (response) {
          return response.data
       })
       .then((data) => {
         res.send(data)
       })
       .catch(function (error) {
         console.error(error);
         res.status(500).json(err);
       });
 }
 )

module.exports = router;