const { response } = require("express");
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const rawData = fs.readFileSync('data.json')
const data = JSON.parse(rawData).users;

app.get("/clients", function(req, res){
  res.json(data);
});

app.post("/clients", function(req, res){
  if(req.body && req.body.name) {
    
    const { name } = req.body;
    data.push({id: data.length+1 , name});

    let dataParsed = JSON.stringify({ users: data });
    fs.writeFileSync('data.json', dataParsed);

    res.status(201).json(data);
  } else {
    res.sendStatus(400);
  }
});

app.delete("/clients/:id", function(req, res){
  try {
    const index = data.findIndex(user => user.id === parseInt(req.params.id));
    if(index !== -1) {
      data.splice(index, 1);
      let dataParsed = JSON.stringify({ users: data });
      fs.writeFileSync('data.json', dataParsed);
    }
    res.status(200).json(data);
  } catch(error) {
    res.status(400)
  }
})

app.listen(4000, function() {
  console.log("Server is running...");
});
