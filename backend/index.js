#!/usr/bin/env node
//läser in skit
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const path = require('path')
const sqlite = require('sqlite')
app.use(express.static(path.join(path.resolve(), 'public')))


//skapa databas
let database


//assign databas
sqlite.open('database/schema.sqlite').then(database_ => {
    database = database_
}) // Open DB end 


//get all
app.get('/', (request, response) => {
    database.all('SELECT * FROM schema').then(schema => {
        response.send(schema)
    }) // db all end
}) // get ends


// get datum
app.get('/bydate/:datum', (request, response) => {
    database.run('SELECT * FROM schema WHERE date=?;',
        [request.params.date]
    ).then(schema => {
        response.send(schema)
    }) // db all end
    response.status(201)
}) //db run close

// get topName
app.get('/bytopname/:topName', (request, response) => {
    database.run('SELECT * FROM schema WHERE topName=?;',
        [request.params.topName]
    ).then(schema => {
        response.send(schema)
    }) // db all end
    response.status(201)
}) //db run close

// get privateLink
app.get('/byprivatelink/:privateLink', (request, response) => {
    database.run('SELECT * FROM schema WHERE privateLink=?;',
        [request.params.privateLink]
    ).then(schema => {
        response.send(schema)
    }) // db all end
    response.status(201)
}) //db run close


// get createdBy
app.get('/createdby/:createdBy', (request, response) => {
    database.run('SELECT * FROM schema WHERE createdBy=?;',
        [request.params.createdBy]
    ).then(schema => {
        response.send(schema)
    }) // db all end
    response.status(201)
}) //db run close


//post för att lägga till i schemat
app.post('/', (request, response) => {
    database.run('INSERT INTO schema VALUES (?,?,?,?,?,?,?,?,?,?)',
        [request.body.date, request.body.startTime, request.body.endTime, request.body.topName, request.body.subName, request.body.altSubName, request.body.eventName, request.body.createdBy, request.body.privateLink, request.body.id]
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



// put för att ända i schemat via id
app.put('/:id', (request, response) => {
    database.run('UPDATE schema SET date=?, startTime=?, endTime=?, topName=?, subName=?, altSubName=?, eventName=?, createdBy=?, priavateLink=?, WHERE id=?;',
        [request.body.date, request.body.startTime, request.body.endTime, request.body.topName, request.body.subName, request.body.altSubName, request.body.eventName, request.body.createdBy, request.body.privateLink, request.params.id]
    ).then(() => {
        database.all('SELECT * FROM schema').then(schema => {
            response.send(schema)
        }) // db all end
        response.status(201)
    }) //db run close
}) // app del close

app.listen(3000)
