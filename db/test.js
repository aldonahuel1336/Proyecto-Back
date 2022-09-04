const {request} = require("./request")

request("SELECT * FROM books")
.then(data => console.log(data))
.catch(err => console.log(err))