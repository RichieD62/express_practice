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
    var course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {
        res.status(404).send("the course with the given idea was not found")
        console.log("object not found")
    } else {
        res.send(course)
    }
})

// Starts the server
app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})
