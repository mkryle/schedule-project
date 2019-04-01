import Vue from 'vue'
var baseServerUrl = 'http://localhost:3000';
export default {
  state: {
     students: [],
     studentId: '',
     studentName: '',
     studentCourse: '',
     admins: [{username:'jon'}]
  },
  actions:{
//     editItem(context, payload) {
//     return fetch(baseServerUrl + '/admin/getStudents/'+ payload, {
//             body: JSON.stringify({name: payload.name, courseid: payload.courseid}),
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             method: 'PUT'
//           }).then((response) => {
//                       console.log('UPDATED ===>>>> ' + JSON.stringify(payload));
//
//                       context.commit('REFRESH_ITEM_LIST', response.data);
//                   })
// },
    // refreshItemList(context) {
		// 	// axios.get(`${API_BASE_URL}/items`).then((response) => {
		// 	// 	context.commit('REFRESH_ITEM_LIST', response.data);
		// 	// })
    //   fetch(baseServerUrl + '/admin/getStudents/' + index, {
    //     body: JSON.stringify({name: state.studentName, courseid: state.studentCourse}),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'PUT'
    //   }).then((response) => {
    //               console.log('UPDATED ===>>>> ' + index);
    //               context.commit('REFRESH_ITEM_LIST', response.data);
    //           })
    // },
//     patchPerson(state, person) {
//   state.commit('personIsPatched', { person })
// }
},
  mutations: {
//     personIsPatched(state, payload) {
//   const { person } = payload;
//   const items = state.students.map(item => (item.id === person.id ? person : item));
//   Vue.set(state, 'students', items);
// },
  //   updateContentBlock(state, contentBlock) {
  //   const index = state.students.findIndex(block => block.id === contentBlock.id)
  //   Vue.set(state.students, index, contentBlock)
  // },
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
      console.log(state.admins);
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
