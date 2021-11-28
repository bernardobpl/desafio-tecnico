const { response } = require("express");
const express = require("express");
const app = express();
app.use(express.json());

const data = [];

app.get("/clients", function(req, res){
  res.json(data);
});

app.post("/clients", function(req, res){
  if(req.body && req.body.name) {

  const { name } = req.body;
    data.push({id: data.length , name});
    res.status(201).json(data);
  } else {
    res.sendStatus(400);
  }

});
app.listen(4000, function() {
  console.log("Server is running...");
});
