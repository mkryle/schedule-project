const express = require('express')
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4')
const sqlite = require('sqlite')
var router = express.Router();
router.use(bodyParser.json());


router.get('/admin', (req, res) => res.send('Hello Admin'))

let database

sqlite.open('./databases/schema.sqlite').then(database_ => {
  database = database_
})

// get all records from database
router.get('/admin/getStudents', (req, res) => {
    database.all('SELECT * FROM users').then(rows => {
      res.send(rows)
    })
})

// get on record from database by id
router.get('/admin/getStudents/:id', (req, res) => {
    database.all('SELECT * FROM users WHERE id = ?',
      [req.params.id]
  ).then(row => {
      res.send(row)
    })
})


// delete record from database
router.delete('/admin/getStudents/:id', (req, res) => {
    database.run('DELETE FROM users WHERE id=?;',
        [req.params.id]
    ).then(() => {
        database.all('SELECT * FROM users').then(students => {
            res.send(students)
        }) // db all end
        res.status(201)
    }) //db run close
})

// update records från database
// router.put('/admin/getStudents/:id', (req, res) => {
//   // const student = req.body;
//   // const studentID = student.id;
// 	// const studentName = student.name;
//   // const studentCourseid = student.Courseid;
//     database.run('UPDATE users SET name=?, courseid=?, WHERE id=?',
//         [req.body.name, req.body.courseid, req.params.id]
//       ).then((err, result) => {
//               if (err){
//           res.status(400).json({"error": res.message})
//           return;
//         }
//         res.json({
//           message: "success",
//           data: data,
//           changes: this.changes
//         })
//     }) //db run close
// })


// new update Testing
router.patch("/admin/getStudents/:id", (req, res, next) => {
    var data = {
        name: req.body.name,
        courseid: req.body.courseid,
    }
    database.run(
        `UPDATE users set
           name = COALESCE(?,name),
           courseid = COALESCE(?,courseid)
           WHERE id = ?`,
        [data.name, data.courseid, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
})
//add new posts into database
router.post('/admin/getStudents', (req, res) => {
    database.run('INSERT INTO users VALUES (?,?,?)',
        [uuidv4(), req.body.name, req.body.courseid]
    ).then(() => {
        database.all('SELECT * FROM users').then(students => {
          res.send(students)
        }) // db all end
        res.status(201)
    }) //db close
})

module.exports = router
