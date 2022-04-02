const axios = require("axios");

axios({
  method: "get",
  url: "https://rickandmortyapi.com/api/episode",
}).then((response) => {
    const ExelFormat = [];
    const data = response.data.results;
    ExelFormat.push(Object.keys(data[0]))
    for (let i in data){
        ExelFormat.push(Object.values(data[i]))
    }
    console.log(ExelFormat);
});
