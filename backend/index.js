const express = require('express')
const studentsAPI = require('./studentsAPI')
const schemaAPI = require('./schemaAPI')
const path = require('path')
var cors = require('cors')
var bodyParser = require("body-parser");
const app = express();


// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use(studentsAPI);
app.use(schemaAPI);







app.listen(3000, () => console.log('Im running at 3000!'))
