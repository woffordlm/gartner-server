// const router = require("express").Router();
// import fetch from "node-fetch";
// router.get("/BYND", (req,res) => {
   
//     const getData = async () => {

//         try {
//           let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BYND&outputsize=compact&apikey=PVGXY8RVCAKABW50';
//           const res = await fetch(url);
//           console.log('res:!!!!!!!!!!!!', res)
//           const stockData = await res.json();
//           console.log('stockdata:', stockData)
//           return stockData
//         } catch (error) {
//           console.error(error);
//         }
//     }
//     const results = getData()
//     console.log('results:', results)
   
//     res.send(results)

    

//     getData();
// }
// )
  

// module.exports = router;