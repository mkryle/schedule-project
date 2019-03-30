//läser in skit
const express = require('express')
const studentsAPI = require('./studentsAPI')
const schemaAPI = require('./schemaAPI')
const path = require('path')
var cors = require('cors')

const app = express();

app.use(cors())




app.use(studentsAPI);
app.use(schemaAPI);





// load the day
app.get('/byWhoAndDate/:datum/:namn', (request, response) => {
    database.all('SELECT * FROM schema WHERE date=? AND createdBy=?;',
        [request.params.datum, request.params.namn]
    ).then(schema => {
        response.send(schema)
    }) // db all end
    response.status(201)
}) //db run close







//post för att lägga till i schemat
app.post('/', (request, response) => {
    database.run('INSERT INTO schema VALUES (?,?,?,?,?,?,?,?,?)',
        [request.body.date, request.body.startTime, request.body.endTime, request.body.topName, request.body.subName, request.body.altSubName, request.body.eventName, request.body.createdBy, uuidv4()]
    ).then(() => {
        database.all('SELECT * FROM schema').then(schema => {
            response.send(schema)
        }) // db all end
        response.status(201)
    }) //db close
}) // app close





// put för att ända i schemat via id
app.put('/:id', (request, response) => {
    database.run('UPDATE schema SET date=?, startTime=?, endTime=?, topName=?, subName=?, altSubName=?, eventName=?, createdBy=?, priavateLink=?, WHERE id=?;',
        [request.body.date, request.body.startTime, request.body.endTime, request.body.topName, request.body.subName, request.body.altSubName, request.body.eventName, request.body.createdBy, request.params.id]
    ).then(() => {
        database.all('SELECT * FROM schema').then(schema => {
            response.send(schema)
        }) // db all end
        response.status(201)
    }) //db run close
}) // app del close


app.listen(3000)