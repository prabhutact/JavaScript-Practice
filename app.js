const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const homeRouter = require("./routes/homepage")



app.use("/", homeRouter)





app.listen(3000, () => {
  console.log("http://localhost:3000")
})
