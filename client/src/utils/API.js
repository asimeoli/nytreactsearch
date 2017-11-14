import axios from "axios";
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', { 
    params: {
      "api-key": authKey,
      "q": "Trump"
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });