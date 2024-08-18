
const express = require('express')
const router = express.Router()

const{ getAllBooks,getBooksById,addBooks,updateBooks,deleteBooks } = require('./controllers/bookControllers')
router.get('/', getAllBooks )

   router.get('/:bookid',getBooksById )

     router.post('/',addBooks)

     router.patch('/:bookid',updateBooks )

     router.delete('/:bookid',deleteBooks )

module.exports = router