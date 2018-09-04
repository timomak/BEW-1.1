const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/rotten-potatoes-makeschool', { useMongoClient: true});

const Review = mongoose.model('Review', {
  title: String,
  description: String,
  movieTitle: String
});

let reviews = [
  { title: "Great Review" },
  { title: "Next Review" }
]
app.use(bodyParser.urlencoded({ extended: true}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
  Review.find()
  .then(reveiws => {
    res.render('reviews-index', {reviews: reviews});
  })
  .catch(err => {
    console.log(err);
  })
})

app.post('/reviews', (req, res) => {
  Review.create(req.body).then((review) => {
    console.log(review);
    res.redirect('/');
  }).catch((err) => {
    console.log(err.message)
  })
  // res.render('reviews-new', {})
})

app.get('/reviews/new', (req, res) => {
  res.render('reviews-new', {});
})

app.listen(3000, () => {
  console.log('App listenning om port 3k!')
})
