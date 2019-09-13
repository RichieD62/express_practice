const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const courses = [
    {id:1, name: 'course1'},
    {id:2, name: 'course2'},
    {id:3, name: 'course3'},
]

app.get('/', function(req, res) {
    res.send("Hello World!!");
})

app.get('/api/courses', function(req, res) {
    res.send(courses)
})

app.get('/api/courses/:id', function(req, res) {
    res.send(req.params)
})

// Starts the server
app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})
