const express = require("express");
const bodyParser = require("body-parser");
  
const app = express();
  
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.post("/database/accounts/loginGJAccount.php", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});
  
app.get("/", function(request, response){
    response.sendFile(__dirname + "/register.html");
});
  
  app.listen(3000);