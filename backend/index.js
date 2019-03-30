const express = require('express')
const studentsAPI = require('./studentsAPI')
const schemaAPI = require('./schemaAPI')
const path = require('path')
var cors = require('cors')

const app = express();

app.use(cors())




app.use(studentsAPI);
app.use(schemaAPI);







app.listen(7000, () => console.log('Im running at 7000!'))
