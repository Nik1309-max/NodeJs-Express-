const express = require('express');

const app = express();

app.use(express.json())

const student = []

app.post('/',(req,res)=>{
    student.push(req.body)
    res.status(200).json({
        message: "Student details received"
    })
});

app.get('/send_details',(req,res)=>{
    res.status(201).json({
        message: "Students ar here",
        students: student
    })
})

app.delete('/:index',(req,res)=>{
    const index = req.params.index;
    delete student[index]
    res.status(204).send();
});

app.patch('/:index',(req,res)=>{
    const index = req.params.index;
    student[index] = res.body
    res.status(200).json({
        message: "Student updated",
        students: student
    })
});








module.exports = app