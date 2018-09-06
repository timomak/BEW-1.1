var giphy = require('giphy-api')();
var express = require('express');
var app = express();
var exphbs = require("express-handlebars");
var http = require('http');


app.get('/', function (req, res) {
  console.log(req.query.term)
  if (req.query.term === undefined) {
    giphy.search("/", function (err, response) {
      res.render('home', {gifs: response.data})
    });
  }
  else {
    giphy.search(req.query.term, function (err, response) {
      res.render('home', {gifs: response.data})
    });
  }
});

app.get('/hello-world', function (req,res){
  res.send("Hello World");
});
app.get('/hello-gif', function (req, res){
  var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
  res.render('hello-gif', {gifUrl: gifUrl})
})
app.get('/greetings/:name', function (req, res){
  var name = req.params.name
  res.render('greetings', {name: name})
})

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(3000, function () {
  console.log("Gif Search listenning on port localhost:3000!")
});

app.use(express.static('public'));
