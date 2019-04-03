const express = require('express')
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4')
const sqlite = require('sqlite')
var routerLogin = express.Router();
routerLogin.use(bodyParser.json());
// const Cryptr = require('cryptr');
// const cryptr = new Cryptr('myTotalySecretKey');

const sha512 = require('js-sha512')

const hiddenSalt = '123456789'

// const encryptedString = cryptr.encrypt('bacon');
// const decryptedString = cryptr.decrypt(encryptedString);
//
// console.log(encryptedString); // 5590fd6409be2494de0226f5d7
// console.log(decryptedString); // bacon

let database

sqlite.open('./databases/schema.sqlite').then(database_ => {
    database = database_
})

routerLogin.get('/admin/getLogins', (request, response) => {
    database.all('SELECT * FROM admins').then(logins => {
        response.send(logins)
    })
})

routerLogin.post('/admin/getLogins', (req, res) => {
    database.run('INSERT INTO admins VALUES (?,?,?,?)',
        [uuidv4(), req.body.username, req.body.password, hiddenSalt]
    ).then(() => {
        database.all('SELECT * FROM admins').then(admins => {
          res.send(admins)
        }) // db all end
        res.status(201)
    }) //db close
})

routerLogin.put('/admin/getLogins/:id', (req, res) => {
    database.run('UPDATE admins SET username=?, password=? WHERE id=?;',
        [req.body.username, req.body.password, req.params.id]
    ).then(() => {
        database.all('SELECT * FROM admins').then(result => {
            res.send(result)
        }) // db all end
        res.status(201)
    }) //db run close
}) // app del close

// routerLogin.post('/admin/getLogins', (request, response) => {
//     // if (request.body.name && request.body.password) {
//     // const encryptedString = cryptr.encrypt('bacon');
//     // const decryptedString = cryptr.decrypt(encryptedString);
//     //
//     // console.log(encryptedString); // 5590fd6409be2494de0226f5d7
//     // console.log(decryptedString); // bacon
//     //
//     //     const userSalt = generateUserSalt(request.body.name)
//     //     const hashedPassword = hashPassword(request.body.password, userSalt)
//
//         database.run('INSERT INTO admins VALUES (?,?,?)',
//          [uuidv4(), request.body.name, request.body.password])
//             .then(res => {
//                 console.log(res)
//                 response.status(201)
//                 response.send('Account Created')
//             }).catch(err => {
//                 console.log(`Name: ${request.body.name}`)
//                 console.log(`Usersalt: ${userSalt}`)
//                 console.log(`Password: ${hashedPassword}`)
//                 console.log(`Error: ${err}`)
//                 response.status(400)
//                 response.send('Account Creation Failed')
//             })
//     // } else {
//     //     response.status(400)
//     //     response.send('Incorrect Parameters')
//     // }
// })

// routerLogin.get('/login/:name/:password', (request, response) => {
//     database.all('SELECT password, salt FROM logins WHERE name = ?;',
//         [request.params.name]).then(token => {
//         if (request.params.name === token[0].name)
//             response.send(token)
//
//         const hashedToken = hashPassword(request.body.password, token[0].salt)
//         if (hashedToken === token[0].password) {
//             response.status(201)
//             response.send('Logged In')
//         } else {
//             response.status(400)
//             response.send('Invalid Login')
//         }
//     })
// })
//
// routerLogin.delete('/:user', (request, response) => {
//
//     if (request.params.users) {
//         database.run('DELETE FROM logins WHERE name = ?',
//             [request.params.users])
//         response.status(201)
//         response.send('Account Deleted')
//
//     } else {
//         response.status(400)
//         response.send('No Account Found')
//     }
// })

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

module.exports = routerLogin
