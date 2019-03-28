const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sqlite = require('sqlite')
const sha512 = require('js-sha512')

const hiddenSalt = '123456789'

app.use(bodyParser.json())
app.use(function (request, result, next) {
    result.header('Access-Control-Allow-Origin', '*');
    result.header('Access-Control-Allow-Headers', 'Content-Type');
    result.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

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
        response.send('Incorrect Parameters')
    }
})

app.get('/login/:name/:password', (request, response) => {
    database.all('SELECT password, salt FROM logins WHERE name = ?;',
        [request.params.name]).then(token => {
        if (request.params.name === token[0].name)
            response.send(token)

        const hashedToken = hashPassword(request.body.password, token[0].salt)
        if (hashedToken === token[0].password) {
            response.status(201)
            response.send('Logged In')
        } else {
            response.status(400)
            response.send('Invalid Login')
        }
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
    console.log(hash)
    return sha512(hash)
}

function generateUserSalt(username) {
    const unix = +new Date()
    salt = username + unix
    console.log(salt)
    return sha512(salt)
}
console.log('Listening on port 3000')
app.listen(3000)