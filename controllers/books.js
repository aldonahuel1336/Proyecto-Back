const {allBooks, bookById, createBook, updateBook, deleteBook} = require ('../models/books')


module.exports.allBooksController = async (req, res) => { 
    try {
    const books = await allBooks()
    return res.send(books)
 } catch (error) {
    return res.send('se produjo un error')
   
}
}


module.exports.bookByIdController = async (req, res) => { 
   const {id} = req.params
   try { 
   const books = await bookById(id)
    return res.send(books)} catch (error) {
   return res.send('se produjo un error')
    
 }
 }


 module.exports.createBookController = async (req, res) => { 
    const{name, stock, publish_date, disponible} = req.body
     console.log(req)
   
    try {
    const books = await createBook({name, stock, publish_date, disponible})
    return res.send(books)
  } catch (error) {
     return res.send('error')
    
 }
 }

 module.exports.deleteBookController = async (req, res) => { 
     const {id} = req.params
     try {
          const books = await deleteBook(id)
          return res.send(books)
  }       catch (error) {
          console.log(error)
          return res.send('se produjo un error')
    
     }
 }


 module.exports.updateBookController = async (req, res) => { 
    const{id} = req.params
    const{name, stock, publish_date, disponible} = req.body;
     
   
    try {
    const books = await updateBook({id,name, stock, publish_date, disponible})
    return res.send(books)
  } catch (error) {
     return res.send('libro creado')
    
 }
 }


