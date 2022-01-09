
const axios = require('axios');

axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220109&stockNo=2330&_=1641716372516")
// axios.get('http://34.221.173.92:3000/data')
.then(function (response){
    //handle success
    console.log(response.data);
})

.catch(function (error) {
    //handle error
    console.log(error)
});