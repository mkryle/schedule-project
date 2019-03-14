const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sqlite = require('sqlite')

const hiddenSalt = '123456789'

app.use(bodyParser.json())

let database

sqlite.open('users.sqlite').then(database_ => {
    database = database_
})

app.get('/', (request, response) => {
    database.all('SELECT * FROM logins').then(logins => {
        response.send(logins)
    })
})

app.post('/', (request, response) => {
    if (request.body.name && request.body.password) {
        const userSalt = generateUserSalt(request.body.name)
        const hashedPassword = hashPassword(request.body.password, userSalt)
        database.run('INSERT INTO logins VALUES (?,?,?',
            [request.body.name, hashedPassword, userSalt])
        response.status(201)
        response.send('Account Created')

    } else {
        response.status(400)
        response.send('Account Creation Failed')
    }
})

app.put('/:editUser', (request, response) => {
    database.run('UPDATE logins SET name=?, password=? WHERE name=?',
            [request.body.name, request.body.password, request.params.editUser])
        .then(() => {
            database.all('SELECT * FROM logins').then(logins => {
                response.send(logins)
            })
            response.status(201)
            response.send('Your Profile Has Been Edited')
        })
})

app.delete('/:user', (request, response) => {

    if (request.params.users) {
        database.run('DELETE FROM logins WHERE name = ?',
            [request.params.users])
        response.status(201)
        response.send('Account Deleted')


    } else {
        response.status(400)
        response.send('No Account Found')
    }
})

function hashPassword(password, salt) {
    //hash(salt, password, hiddenSalt)
}

function generateUserSalt(username) {
    const unix = +new Date()
    //hash(username + unix)
}

app.listen(3000)