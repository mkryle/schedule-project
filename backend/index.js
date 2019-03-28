//läser in skit
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const path = require('path')
const sqlite = require('sqlite')
const uuidv4 = require('uuidv4')
app.use(express.static(path.join(path.resolve(), 'public')))
app.use(function (request, result, next) {
    result.header('Access-Control-Allow-Origin', '*');
    result.header('Access-Control-Allow-Headers', 'Content-Type');
    result.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
//skapa databas
let database
//assign databas
sqlite.open('databases/schema.sqlite').then(database_ => {
    database = database_
}) // Open DB end 



//get all
app.get('/', (request, response) => {
    database.all('SELECT * FROM schema').then(schema => {
        response.send(schema)
    }) // db all end
}) // get ends


// get createdBy
app.get('/createdBy/:namn', (request, response) => {
    database.all('SELECT * FROM schema WHERE createdBy=?;',
        [request.params.namn]
    ).then(schema => {
        response.send(schema)
    }) // db all end
    response.status(201)
}) //db run close


// get datum
app.get('/bydate/:datum', (request, response) => {
    database.all('SELECT * FROM schema WHERE date=?;',
        [request.params.datum]
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


//delete för att ta bort i schemat
app.delete('/:deleteTask', (request, response) => {
    database.run('DELETE FROM schema WHERE id=?;',
        [request.params.deleteTask]
    ).then(() => {
        database.all('SELECT * FROM schema').then(schema => {
            response.send(schema)
        }) // db all end
        response.status(201)
    }) //db run close
}) // app del close




app.listen(3000)