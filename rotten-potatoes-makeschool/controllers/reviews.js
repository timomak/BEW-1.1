module.exports = function (app, Review) {
  let reviews = [
    { title: "Great Review" },
    { title: "Next Review" }
  ]

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
      res.redirect(`/reviews/${review._id}`);
    }).catch((err) => {
      console.log(err.message)
    })
    // res.render('reviews-new', {})
  })

  app.get('/reviews/new', (req, res) => {
    res.render('reviews-new', {});
  })

  app.get('/reviews/:id', (req, res) => {
    Review.findById(req.params.id).then((review) => {
        res.render('reviews-show', { review: review })
    }).catch((err) => {
      console.log(err.message);
    })
  })

  app.get('/reviews/:id/edit', function (req, res) {
    Review.findById(req.params.id, function(err, review) {
      res.render('review-edit' , { review: review });
    })
  })

  app.put('/reviews/:id', (req, res) => {
    Review.findByIdAndUpdate(req.params.id, req.body)
      .then(review => {
        res.redirect(`/reviews/${review._id}`)
      })
      .catch(err => {
        console.log(err.message)
      })
  })

  app.delete('/reviews/:id', function(req, res) {
    console.log("Delete review")
    Review.findByIdAndRemove(req.params.id).then((review) => {
      res.redirect('/');
    }).catch((err) => {
      console.log(err.message);
    })
  })
}
