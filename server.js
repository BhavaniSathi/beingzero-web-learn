const express = require('express');
 
const app = express();
app.use(express.static("frontend"))
app.get("/", function(req, res){
    res.send("Welcome to Sweety's page");
})
app.get("/home", function(req, res){
    res.send("Welcome to home page");
})
app.get("/resume", function(req, res){
    let f=__dirname+"/frontend/html/resume.html";
    res.sendFile(f);
})
app.get("/google", function(req, res){
  let gg=__dirname+"/frontend/html/ggl.html";
  res.sendFile(gg);
})
app.get("/rgb", function(req, res){
    let r=__dirname+"/frontend/html/rgb.html";
    res.sendFile(r);
  })
  app.get("/login", function(req, res){
    let fr=__dirname+"/frontend/html/login.html";
    res.sendFile(fr);
})
app.get("/register", function(req, res){
    let reg=__dirname+"/frontend/html/register.html";
    res.sendFile(reg);
})
app.get("/pie", function(req, res){
    let pi=__dirname+"/frontend/html/pie.html";
    res.sendFile(pi);
})
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
