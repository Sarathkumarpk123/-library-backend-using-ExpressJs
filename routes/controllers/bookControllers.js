const getAllBooks=(req, res) => {
    res.send('Hello World!')
  }
  const getBooksById=(req, res) => {
    res.send('got a post request')
  }
  const addBooks=(req, res) => {
    res.send('Hello World!')
  }
  const updateBooks=(req, res) => {
    res.send('Hello World!')
  }
  const deleteBooks=(req, res) => {
    res.send('Hello World!')
  }
  module.exports={
    getAllBooks,
    getBooksById,
    addBooks,
    updateBooks,
    deleteBooks
  }