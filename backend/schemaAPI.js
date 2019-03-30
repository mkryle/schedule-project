const express = require('express')
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4')
const sqlite = require('sqlite')
const path = require('path')
var schemaRouter = express.Router();
schemaRouter.use(bodyParser.json());

//skapa databas
let database
//assign databas
sqlite.open('./databases/schema.sqlite').then(database_ => {
    database = database_
}) // Open DB end



//get all
schemaRouter.get('/admin/getSchema', (request, response) => {
    database.all('SELECT * FROM schema').then(schema => {
        response.send(schema)
    }) // db all end
}) // get ends


// get createdBy
schemaRouter.get('/admin/getSchema/createdBy/:namn', (request, response) => {
    database.all('SELECT * FROM schema WHERE createdBy=?;',
        [request.params.namn]
    ).then(schema => {
        response.send(schema)
    }) // db all end
    response.status(201)
}) //db run close


// get datum
schemaRouter.get('/admin/getSchema/bydate/:datum', (request, response) => {
    database.all('SELECT * FROM schema WHERE date=?;',
        [request.params.datum]
    ).then(schema => {
        response.send(schema)
    }) // db all end
    response.status(201)
}) //db run close



//post för att lägga till i schemat
schemaRouter.post('/admin/getSchema', (request, response) => {
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
schemaRouter.delete('/admin/getSchema/:deleteTask', (request, response) => {
    database.run('DELETE FROM schema WHERE id=?;',
        [request.params.deleteTask]
    ).then(() => {
        database.all('SELECT * FROM schema').then(schema => {
            response.send(schema)
        }) // db all end
        response.status(201)
    }) //db run close
}) // app del close



// put för att ända i schemat via id
schemaRouter.put('/admin/getSchema/:id', (request, response) => {
    database.run('UPDATE schema SET date=?, startTime=?, endTime=?, topName=?, subName=?, altSubName=?, eventName=?, createdBy=?, priavateLink=?, WHERE id=?;',
        [request.body.date, request.body.startTime, request.body.endTime, request.body.topName, request.body.subName, request.body.altSubName, request.body.eventName, request.body.createdBy, request.params.id]
    ).then(() => {
        database.all('SELECT * FROM schema').then(schema => {
            response.send(schema)
        }) // db all end
        response.status(201)
    }) //db run close
}) // app del close


module.exports = schemaRouter
