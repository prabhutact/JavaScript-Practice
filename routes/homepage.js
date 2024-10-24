const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
  res.send("Hi Hello")
})

router.get("/about",(req, res) => {
  res.send("This is About Page")
})


module.exports = router