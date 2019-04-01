import Vue from 'vue'
var baseServerUrl = 'http://localhost:3000';
export default {
  state: {
     students: [],
     studentId: '',
     studentName: '',
     studentCourse: '',
     admins: [{
       username:'jon',
       password: '12345'
   },{
     username:'admin',
     password: 'admin'
   }],
   tokens: null
  },
  actions:{
    login (state,admin) {
    state.commit('LOGIN',admin)
    }
},
  mutations: {
    // function is to check if username and password is squal with the resquested input
    LOGIN(state,res){
      state.admins.forEach(function(one) {
       if(one.username === res.username){
           if(one.password === res.password){
               state.tokens = 'asjdka7342jukadasdu32474jads'
           }
       }
});

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
              // self.filterUsers();
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
              // self.filterUsers();
              // state.students.splice(index, 1)
              Vue.set(state, 'students', index);
          })
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
},  getAdmins: state => {
    fetch(baseServerUrl + '/admin/getAdmins')
      .then(response => response.json())
      .then(result => {
        state.admins = result
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
  }
  }
};
