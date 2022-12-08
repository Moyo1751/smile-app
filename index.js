const path = require('path')
const express = require('express')
const app = express()
const port = 3000



app.use(express.static('public'))

app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: false }))

// app.use('/static', express.static(path.join(__dirname, 'public')))

console.log('current dir: ', __dirname)


app.get('/smile', (req, res) => {
  res.render('smile', {})
})

app.get('/login', (req, res) => {
    res.render('login', { title: 'Smile Game'})
})

app.post('/login', (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    res.send('Please provide a valid username and password')
    return
  }

  if (username === 'moyo' && password === '1234') {
    // res.send('Username and password is correct')
    res.redirect('/smile')
    return
  }
    return res.redirect('/login')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})