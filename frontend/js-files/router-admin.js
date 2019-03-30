

import AdminHome from './components/admin/adminHome.vue';
import Profile from './components/admin/adminProfilePage.vue';
import Students from './components/admin/adminStudentsPage.vue';
import AdminListEvents from './components/admin/adminListEvents.vue';
import addNewEvent from './components/admin/addNewEvent.vue';
import addNewStudent from './components/admin/addNewStudent.vue';
import editStudent from './components/admin/editStudent.vue';




export default [
       {
              path: '/admin/:id',
              component: AdminHome,
              children: [{
                      path: '/admin/:id/events',
                      name: 'admin-events',
                      component: AdminListEvents,
                    },{
                      path: '/admin/:id/profile',
                      name: 'admin-profile',
                      component: Profile,
                    },{
                      path: '/admin/:id/students',
                      name: 'admin-students',
                      component: Students,
                    },{
                      path: '/admin/:id/addNewEvent',
                      name: 'admin-add',
                      component: addNewEvent,
                    },{
                      path: '/admin/:id/addNewStudent',
                      name: 'admin-add-student',
                      component: addNewStudent,
                    },{
                      path: '/admin/:id/editStudent/:userId',
                      name: 'admin-edit-student',
                      component: editStudent,
                    }]
      }
    ]
