const proffys = [
  {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "89989996767",
    bio: `Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório
    e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas
    explosões.`,
    subject: "Química",
    cost: "20,00",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },

  {
    name: "José Zouain",
    avatar: "https://avatars.githubusercontent.com/u/12834807?v=4",
    whatsapp: "89989996767",
    bio: `Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório
    e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas
    explosões.`,
    subject: "Circuitos",
    cost: "20,00",
    weekday: [1],
    time_from: [720],
    time_to: [1220],
  }
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

//Funcionalidades
function getSubject(subjectNumber) {
  const arrayPosition = +subjectNumber - 1
  return subjects[position]
}

function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
  const data = req.query

  const isNotEmpty = Object.keys(data).length > 0
  if (isNotEmpty) {

    data.subject = getSubject(data.subject)

    proffys.push(data)

    return res.redirect("/study")
  }

  return res.render("give-classes.html", { subjects, weekdays })
}

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)

  .listen(5500)