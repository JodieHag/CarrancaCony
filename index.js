const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'www')))
  .set('src', path.join(__dirname, 'src'))
  .set('view engine', 'pug')
  .get('/', (req, res) => res.render('www/index_ca'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
