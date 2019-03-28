export default {
  state: {
    events: [
      {
        title     : 'event2',
        start     : '2019-03-25',
        end       : '2019-03-26',
        cssClass  : ['family', 'career'],
        YOUR_DATA : {
          id: '8d77b83a-c28e-430f-9177-8b443975d210',
          start: '2019-03-19',
          day: 'måndag',
          startTime: '07:00',
          endTime: '16:00',
          teacher: 'Jon',
          subject: 'Javascript',
          rom: 'Firewall',
          courseGroup: 'Webb18'
        }
      },
      {
        id: '8d77b83a-c28e-430f-9177-8b443975d210',
        start: '2019-03-20',
        day: 'tisdag',
        startTime: '15:00',
        endTime: '18:00',
        teacher: 'Jon',
        subject: 'Javascript',
        rom: 'Firewall',
        courseGroup: 'Webb18'
      },
      {
        id: '8d77b83a-c28e-430f-9177-8b443975d210',
        start: '2019-03-21',
        title: 'event1',
        day: 'onsdag',
        startTime: '07:00',
        endTime: '16:00',
        teacher: 'Jon',
        subject: 'Javascript',
        rom: 'Firewall',
        courseGroup: 'Webb18'
      },
    ],
  },
  actions:{
    addSchedule(state, schedule) {
      state.commit('scheduleIsAdded', { schedule });
    },
    patchPerson(state, schedule) {
      state.commit('scheduleIsPatched', { schedule });
    },
    removePerson(state, scheduleId) {
      state.commit('scheduleIsRemoved', { scheduleId });
    },
  },
  mutations:{
    scheduleIsAdded(state, payload) {
      state.events.push(payload.schedule);
    },
    scheduleIsPatched(state, payload) {
      const { schedule } = payload;
      const items = state.events.map(item => (item.id === schedule.id ? schedule : item));
      Vue.set(state, 'items', items);
    },
    scheduleIsRemoved(state, payload) {
      const items = state.events.filter(item => item.id !== payload.scheduleId);
      Vue.set(state, 'items', items);
    },
  },
  getters:{
    getItems: state => state.events,
    getItem: state => payload => Object.assign({}, state.events.find(item => item.id === payload.id)),
  }
};
