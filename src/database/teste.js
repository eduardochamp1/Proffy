const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
  //inserir dados
  proffyValue = {
    name: "José Zouain",
    avatar: "https://avatars.githubusercontent.com/u/12834807?v=4",
    whatsapp: "89989996767",
    bio: `Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório
    e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas
    explosões.`,
  }

  classValue = {
    subject: "Circuitos",
    cost: "20,00",
    //proffy id vira pelo bando de dados
  }

  classScheduleValues = [
    //class_id vira pelo banco de dados, após cadastrarmos a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  const selectedProffys = await db.all("SELECT * FROM proffys")

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)

  const selectClassSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class.id = classes.id = 1
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `)
})