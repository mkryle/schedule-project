

import AdminHome from './components/admin/adminHome.vue';
import Profile from './components/admin/adminProfilePage.vue';
import Students from './components/admin/adminStudentsPage.vue';
import AdminListEvents from './components/admin/adminListEvents.vue';




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
                    }]
      }
    ]
