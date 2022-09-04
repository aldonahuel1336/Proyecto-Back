require('dotenv').config({path:'./.env'})
const express = require('express')
const handlebars = require('express-handlebars').create({ defaultLayout: 'index', extname:'hbs'});
const booksRoutes = require('./routes/booksRoutes')
const loginRouter = require('./routes/loginRoutes')
const cookieParser = require("cookie-parser")




const app = express()

// const puerto = process.env.PORT;

//app.use("/static", express.static(__dirname + "/public"))

//app.get("/", (req, res) => res.send("hola mundo"))
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs')

app.use(express.json())
app.use(cookieParser())


app.use("/books", booksRoutes)
app.use('/login', loginRouter)


app.listen(5000, () => console.log("Servidor levantado en el puerto",  5000))

