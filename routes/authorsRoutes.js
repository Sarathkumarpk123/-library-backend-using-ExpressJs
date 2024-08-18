//router.post('/books', (req, res,next) => {      here (req, res,next) =>is the MIDLEWARE that check the request received from admin side or not ..so based on that only function will perform
//  if(){                                          Express Cors Midlewares--it tells certain request from front end that will only allowed.
//    next()
//  }
//  else{
//    res.send('u are not a admin')
//
//  }
//
// },(req, res) => {
//  res.send('got a post request')
//})


const{ getAllAuthors,getAuthorsById,addAuthors,updateAuthors,deleteAuthors } = require('./controllers/authorControllers')
const express = require('express')
const router = express.Router()

router.get('/', getAllAuthors)

  router.get('/:authorid',  getAuthorsById)

    router.post('/', addAuthors)

    router.patch('/:authorid',updateAuthors)

    router.delete('/:authorid', deleteAuthors )


module.exports = router