const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/suma', (req, res) => {
  console.log(req.query);
  const n1 = +req.query.n;
  const n2 = +req.query.m;
  const sume = n1 + n2;
  res.send(`La Suma es:${sume}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})