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

app.use(function (request, result, next) {
    result.header('Access-Control-Allow-Origin', '*');
    result.header('Access-Control-Allow-Headers', 'Content-Type');
    result.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});




// load the day
app.get('/byWhoAndDate/:datum/:namn', (request, response) => {
    database.all('SELECT * FROM schema WHERE date=? AND createdBy=?;',
        [request.params.datum, request.params.namn]
    ).then(schema => {
        response.send(schema)
    }) // db all end
    response.status(201)
}) //db run close


// load the day
app.get('/byClassAndDate/:datum/:namn', (request, response) => {
    database.all('SELECT * FROM schema WHERE date=? AND subName=?;',
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