const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello there');
});

const courses = [
    { id: 1, name: "Web Development" },
    { id: 2, name: "IT" },
    { id: 3, name: "Cybersecurity" },
];

// http GET requests route
app.get('/api/courses', (req, res) => {
    res.send(courses);
});
//request course by id 
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with the given ID was not found");
        return
    }
    res.send(course);
})

// http POST requests
app.post('/api/courses', (req, res) => {
    const name = req.body.name;
     if(name.length <= 3)
     {
         res.status(404).send("The name of the course must be greater than 3 characters");
         return
     }
     else
     {
        const course = {
            id: courses.length + 1,
            name: name
        };
        courses.push(course);
        res.send(course);
     }
});

// PUT Requests
app.put('/api/courses/:id', (req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
        //Write the code in order to look up the course, if not existing return a 404
        //otherwise 
    if (!course) {
        res.status(404).send("The course with the given ID was not found");
        return
    }
        //update the course
        //return the updated course
    });    

// DELETE requests
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with the given ID was not found");
        return
    }
    // Use indexOf() of and splice() methods to delete the coourse by index
    res.send(course);
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
