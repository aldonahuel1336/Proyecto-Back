const express = require('express')
const router = express.Router()
const {allBooksController, bookByIdController, createBookController, updateBookController, deleteBookController} = require('../controllers/books')

//  router.use((req, res, next) => {
//     const {host} = req.headers
//     res.host = host

//    next()
//  })

 router.get('/', allBooksController)

 router.get("/:id", bookByIdController)

 router.post("/", createBookController)

 router.put("/:id", updateBookController)

 router.delete("/:id", deleteBookController)

 

router.get("/render", (req,res) =>{
    res.render("books", {layout:"index"})
})



module.exports = router;