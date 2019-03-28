

import UserHome from './components/user/userHome.vue';
import userProfile from './components/user/userProfilePage.vue';
import userEventsList from './components/user/userListEvents.vue';

export default  [
     {
            name: 'user',
            path: '/user/:id',
            component: UserHome,
            children: [{
                    path: '/user/:id/profile',
                    name: 'user-profile',
                    component: userProfile,
                  },
                  {
                          path: '/user/:id/events',
                          name: 'user-events',
                          component: userEventsList,
                }]
    }
  ]
