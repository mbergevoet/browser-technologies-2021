require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')

const questions = require('./static/json/questions.json');
const { authUser } = require('./static/scripts/authUser');

function storeDataInJsonFile(data) {
    const dataToJson = JSON.stringify(data);
    return fs.appendFileSync(
        './data/survey-data.json',
        dataToJson + ',\n',
        (error) => {
            if (error) throw error;
        }
    );
}

app
    .use(express.static(`${__dirname}/static`))
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
    .get('/home', (req, res) => {
        res.render('pages/home.ejs')
    })
    .get('/subject/:id', (req, res) => {
        const questionId = req.params.id
        res.render('pages/subject.ejs', { questionData: questions[questionId - 1] })
    })
    .post('/subject/:id', (req, res) => {
        storeDataInJsonFile(req.body)
        res.redirect('/home')
    })
    .listen(port, function () {
        console.log(`Server listening at http://localhost:${port}`)
    })