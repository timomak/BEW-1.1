// const reviewsFile = require('./reviews-controller');
const express = require('express')
const methodOverride = require('method-override')
const app = express()
var exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/rotten-potatoes-makeschool', { useNewUrlParser: true });
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes-makeschool');

const Review = mongoose.model('Review', {
  title: String,
  description: String,
  movieTitle: String
});

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/reviews');
routes(app, Review);



app.listen(3000, () => {
  console.log('App listenning om port 3k!')
})
