const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sqlite = require('sqlite')
const sha512 = require('sha512')

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
        database.run('INSERT INTO logins VALUES (?,?,?)', [request.body.name, hashedPassword, userSalt])
            .then(res => {
                console.log(res)
                response.status(201)
                response.send('Account Created')
            }).catch(err => {
                console.log(`Name: ${request.body.name}`)
                console.log(`Usersalt: ${userSalt}`)
                console.log(`Password: ${hashedPassword}`)
                console.log(`Error: ${err}`)
                response.status(400)
                response.send('Account Creation Failed')
            })
    } else {
        response.status(400)
        response.send('Incorrect parameters')
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
    hash = salt + password + hiddenSalt
    return sha512(hash).toString('hex')
}

function generateUserSalt(username) {
    const unix = +new Date()
    salt = username + unix
    return sha512(salt).toString('hex')
}
console.log('Listening on port 3000')
app.listen(3000)