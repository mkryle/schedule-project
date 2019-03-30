import Vue from 'vue'
var baseServerUrl = 'http://localhost:7000';
export default {
  state: {
     students: [],
     studentId: '',
     studentName: '',
     studentCourse: ''
  },
  actions:{

},
  mutations: {
LOAD_USERS(state){
  fetch('http://localhost:7000/admin/getStudents')
    .then(response => response.json())
    .then(result => {
      state.students = result
    })
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
              // self.filterUsers();
              state.students.splice(index, 1)
          })
}
  },
  getters:{
    getStudents: state => {
    return state.students;
  },
  loadAll: state => {
    fetch(baseServerUrl + '/admin/getStudents')
      .then(response => response.json())
      .then(result => {
        state.students = result
      })
  return state.students;
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
