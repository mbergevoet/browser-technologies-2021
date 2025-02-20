require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')
// var bodyParser = require('body-parser')

// const questions = require('./static/json/questions.json');
const { authUser } = require('./helpers/authUser');
const { getCourseData } = require('./helpers/getCourseData');
const { addToJson } = require('./helpers/addToJson');
const { surveyCompleted } = require('./helpers/surveyCompleted');

app
    .use(express.static(`${__dirname}/static`))
    .use(express.urlencoded({ extended: true }))
    .set('view engine', 'ejs')
    .set('views', path.join(`${__dirname}/views`))
    .get('/', (req, res) => {
        res.render('pages/login.ejs')
    })
    .post('/', (req, res) => {
        const studentName = req.body.name
        const studentId = req.body.id
        authUser(studentName, studentId, req, res)
    })
    .get('/home/:id', (req, res) => {
        console.log(surveyCompleted(req.params.id)[0])
        res.render('pages/home.ejs', { subjects: surveyCompleted(req.params.id)[0], id: req.params.id })
    })
    .get('/subject/:course/:id', (req, res) => {
        res.render('pages/subject.ejs', { courseData: getCourseData(req.params.course)[0], id: req.params.id })
    })
    .post('/subject/:course/:id', (req, res) => {
        addToJson(req.body, res, req.params.course, req.params.id)
        res.redirect(`/home/${req.params.id}`)
    })
    .listen(port, function () {
        console.log(`Server listening at http://localhost:${port}`)
    })