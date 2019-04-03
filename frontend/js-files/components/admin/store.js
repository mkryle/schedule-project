import Vue from 'vue'
var baseServerUrl = 'http://localhost:3000';
var passwordHash = require('password-hash');
const saltRounds = 10;
export default {
  state: {
     students: [],
     studentId: '',
     studentName: '',
     studentCourse: '',
     adminUsername: '',
     adminPassword: '',
     admins: [],
   tokens: null
  },
  actions:{
    login (state,admin) {
    state.commit('LOGIN',admin)
  },
},
  mutations: {
    // function is to check if username and password is squal with the resquested input
    LOGIN(state,res){
      state.admins.forEach(function(one) {
        var genhash = passwordHash.generate(state.adminPassword);
        var hashedPassword = one.password
        var comparePaswords =  passwordHash.verify(res.password, hashedPassword)
        // console.log(genhash);
        console.log('hashedInDB------------>' + hashedPassword);
        console.log('Compare Input VS hashedInDB------------>' +passwordHash.verify(res.password, hashedPassword))
       if(one.username === res.username){
           if(comparePaswords == true){
               state.tokens = 'asjdka7342jukadasdu32474jads'
                       console.log('Compare Input VS hashedInDB------------>' +passwordHash.verify(res.password, hashedPassword))
           }
       }
});

},
registerAdmin(state){
  const vm = this
  var hashedPassword = passwordHash.generate(state.adminPassword);
      console.log(passwordHash.verify('password123', hashedPassword)); // true
  fetch(baseServerUrl + '/admin/getLogins', {
  body: JSON.stringify({username: state.adminUsername, password: hashedPassword}),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
}).then(function (response) {
  return response.json()
}).then(function (result) {
  console.log(result)
  console.log('New Admin registred')
})
  state.admins.push({username: state.adminUsername, password: state.adminPassword});
},
addStudent(state) {
  fetch(baseServerUrl + '/admin/getStudents', {
  body: JSON.stringify({name: state.studentName, courseid: state.studentCourse}),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
}).then(function (response) {
  return response.json()
}).then(function (result) {
  console.log(result)
  console.log('New Student Successfully added')
})
  state.students.push({studentId: state.studentId, studentName: state.courseid, studentCourse: state.studentCourse});
  state.studentId = ""
  state.studentName = ""
  state.studentCourse = ""
},
SET_STUDENT_ID(state, payload) {
  state.studentId = payload
},
STUDENT_NAME(state, payload) {
  state.studentName = payload
},
STUDENT_COURSE(state, payload) {
  state.studentCourse = payload
},
DELETE_USER(state, index) {
  fetch(baseServerUrl +'/admin/getStudents/' + index, {
    method: 'DELETE'
  }).then(() => {
              console.log('removed===>>>> ' + index);
              state.students.splice(index, 1)
          })
},
EDIT_STUDENT(state, index) {
  fetch(baseServerUrl + '/admin/getStudents/' + index, {
    body: JSON.stringify({name: state.studentName, courseid: state.studentCourse}),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT'
  }).then(() => {
              console.log('UPDATED ===>>>> ' + index);
              console.log(JSON.stringify(index));
              Vue.set(state, 'students', index);
          })
},
ADMIN_USERNAME(state, payload) {
  state.adminUsername = payload
},
ADMIN_PASSWORD(state, payload) {
  state.adminPassword = payload
}
  },
  getters:{
    getSingleStudent: state => payload => Object.assign({}, state.students.find(item => item.id === payload.id)),
    getStudents: state => {
    return state.students;
  },
  getTokens: state => {
  return state.tokens;
},
  loadAll: state => {
    fetch(baseServerUrl + '/admin/getStudents')
      .then(response => response.json())
      .then(result => {
        state.students = result
      })
  return state.students;
},
getAdmins: state => {
    fetch(baseServerUrl + '/admin/getLogins')
      .then(response => response.json())
      .then(result => {
         state.admins = result
        // state.admins.push(result)
      })
      return state.admins;
},
  studentId: state => {
    return state.studentId;
  },
  studentName: state => {
    return state.studentName;
  },
  studentCourse: state => {
    return state.studentCourse;
  },
  adminUsername: state => {
    return state.adminUsername;
  },
  adminPassword: state => {
    return state.adminPassword;
  }
  }
};
