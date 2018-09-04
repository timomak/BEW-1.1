const express = require('express')
const app = express()
var exphbs = require('express-handlebars');

let reviews = [
  { title: "Great Review" },
  { title: "Next Review" }
]


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
  res.render('reviews-index', {reviews: reviews});
})

app.get('/reviews', (req, res) => {

})

app.listen(3000, () => {
  console.log('App listenning om port 3k!')
})
