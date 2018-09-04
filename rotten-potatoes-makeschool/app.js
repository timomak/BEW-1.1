const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes-makeschool', { useMongoClient: true});

const Review = mongoose.model('Review', {
  title: String
});
let reviews = [
  { title: "Great Review" },
  { title: "Next Review" }
]

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

app.get('/reviews', (req, res) => {

})

app.listen(3000, () => {
  console.log('App listenning om port 3k!')
})
