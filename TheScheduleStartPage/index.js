// db format moment().format('YYYY-MM-DD')






new Vue({
  created() {


    let whatDay = moment().format('dddd')
    let whatDate = moment().format('YYYY-MM-DD')

    if (whatDay === 'Monday') {
      this.week.moDay = whatDate
      this.week.tuDay = moment().add(1, "days").format('YYYY-MM-DD')
      this.week.weDay = moment().add(2, "days").format('YYYY-MM-DD')
      this.week.thDay = moment().add(3, "days").format('YYYY-MM-DD')
      this.week.frDay = moment().add(4, "days").format('YYYY-MM-DD')
      this.week.saDay = moment().add(5, "days").format('YYYY-MM-DD')
      this.week.suDay = moment().add(6, "days").format('YYYY-MM-DD')

      this.nextWeek.moDay = moment().add(7, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(8, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(9, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(10, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(11, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(12, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(13, "days").format('YYYY-MM-DD')

    } else
    if (whatDay === 'Tuesday') {
      this.week.moDay = moment().subtract(1, "days").format('YYYY-MM-DD')
      this.week.tuDay = whatDate
      this.week.weDay = moment().add(1, "days").format('YYYY-MM-DD')
      this.week.thDay = moment().add(2, "days").format('YYYY-MM-DD')
      this.week.frDay = moment().add(3, "days").format('YYYY-MM-DD')
      this.week.saDay = moment().add(4, "days").format('YYYY-MM-DD')
      this.week.suDay = moment().add(5, "days").format('YYYY-MM-DD')

      this.nextWeek.moDay = moment().add(6, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(7, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(8, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(9, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(10, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(11, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(12, "days").format('YYYY-MM-DD')

    } else if (whatDay === 'Wednesday') {
      this.week.tuDay = moment().subtract(1, "days").format('YYYY-MM-DD')
      this.week.moDay = moment().subtract(2, "days").format('YYYY-MM-DD')
      this.week.weDay = whatDate
      this.week.thDay = moment().add(1, "days").format('YYYY-MM-DD')
      this.week.frDay = moment().add(2, "days").format('YYYY-MM-DD')
      this.week.saDay = moment().add(3, "days").format('YYYY-MM-DD')
      this.week.suDay = moment().add(4, "days").format('YYYY-MM-DD')

      this.nextWeek.moDay = moment().add(5, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(6, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(7, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(8, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(9, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(10, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(11, "days").format('YYYY-MM-DD')


    } else if (whatDay === 'Thursday') {
      this.week.moDay = moment().subtract(3, "days").format('YYYY-MM-DD')
      this.week.tuDay = moment().subtract(2, "days").format('YYYY-MM-DD')
      this.week.weDay = moment().subtract(1, "days").format('YYYY-MM-DD')
      this.week.thDay = whatDate
      this.week.frDay = moment().add(1, "days").format('YYYY-MM-DD')
      this.week.saDay = moment().add(2, "days").format('YYYY-MM-DD')
      this.week.suDay = moment().add(3, "days").format('YYYY-MM-DD')

      this.nextWeek.moDay = moment().add(4, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(5, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(6, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(7, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(8, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(9, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(10, "days").format('YYYY-MM-DD')


    } else if (whatDay === 'Friday') {
      this.week.moDay = moment().subtract(4, "days").format('YYYY-MM-DD')
      this.week.tuDay = moment().subtract(3, "days").format('YYYY-MM-DD')
      this.week.weDay = moment().subtract(2, "days").format('YYYY-MM-DD')
      this.week.thDay = moment().subtract(1, "days").format('YYYY-MM-DD')
      this.week.frDay = whatDate
      this.week.saDay = moment().add(1, "days").format('YYYY-MM-DD')
      this.week.suDay = moment().add(2, "days").format('YYYY-MM-DD')

      this.nextWeek.moDay = moment().add(3, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(4, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(5, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(6, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(7, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(8, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(9, "days").format('YYYY-MM-DD')


    } else if (whatDay === 'Saturday') {
      this.week.moDay = moment().subtract(5, "days").format('YYYY-MM-DD')
      this.week.tuDay = moment().subtract(4, "days").format('YYYY-MM-DD')
      this.week.weDay = moment().subtract(3, "days").format('YYYY-MM-DD')
      this.week.thDay = moment().subtract(2, "days").format('YYYY-MM-DD')
      this.week.frDay = moment().subtract(1, "days").format('YYYY-MM-DD')
      this.week.saDay = whatDate
      this.week.suDay = moment().add(1, "days").format('YYYY-MM-DD')

      this.nextWeek.moDay = moment().add(2, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(3, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(4, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(5, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(6, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(7, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(8, "days").format('YYYY-MM-DD')


    } else if (whatDay === 'Sunday') {
      this.week.moDay = moment().subtract(6, "days").format('YYYY-MM-DD')
      this.week.tuDay = moment().subtract(5, "days").format('YYYY-MM-DD')
      this.week.weDay = moment().subtract(4, "days").format('YYYY-MM-DD')
      this.week.thDay = moment().subtract(3, "days").format('YYYY-MM-DD')
      this.week.frDay = moment().subtract(2, "days").format('YYYY-MM-DD')
      this.week.saDay = moment().subtract(1, "days").format('YYYY-MM-DD')
      this.week.suDay = whatDate

      this.nextWeek.moDay = moment().add(1, "days").format('YYYY-MM-DD')
      this.nextWeek.tuDay = moment().add(2, "days").format('YYYY-MM-DD')
      this.nextWeek.weDay = moment().add(3, "days").format('YYYY-MM-DD')
      this.nextWeek.thDay = moment().add(4, "days").format('YYYY-MM-DD')
      this.nextWeek.frDay = moment().add(5, "days").format('YYYY-MM-DD')
      this.nextWeek.saDay = moment().add(6, "days").format('YYYY-MM-DD')
      this.nextWeek.suDay = moment().add(7, "days").format('YYYY-MM-DD')


    }










  },
  data: {
    date: null,
    startTime: null,
    endTime: null,
    topName: null,
    subName: null,
    altSubName: null,
    eventName: null,
    createdBy: null,



    week: {
      Monday: 'Måndag',
      moDay: null,
      Tuesday: 'Tisdag',
      tuDay: null,
      Wensday: 'Onsdag',
      weDay: null,
      Thursday: 'Torsdag',
      thDday: null,
      Friday: 'Fredag',
      frDay: null,
      Saturday: 'Lördag',
      saDay: null,
      Sunday: 'Söndag',
      suDay: null
    },

    nextWeek: {
      Monday: 'Måndag',
      moDay: null,
      Tuesday: 'Tisdag',
      tuDay: null,
      Wensday: 'Onsdag',
      weDay: null,
      Thursday: 'Torsdag',
      thDday: null,
      Friday: 'Fredag',
      frDay: null,
      Saturday: 'Lördag',
      saDay: null,
      Sunday: 'Söndag',
      suDay: null
    }

  },
  methods: {
    addToSchedule() {

      fetch('http://localhost:3000/', {

        body: '{  "date": "' + this.date + '", "startTime": "' + this.startTime + '", "endTime": "' + this.endTime + '", "topName": "' + this.topName + '", "subName": "' + this.subName + '", "altSubName": "' + this.altSubName + '", "eventName": "' + this.eventName + '", "createdBy": "' + this.createdBy + '" }',
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(function (response) {
        return response.json()


      }).then(function (reasult) {
        console.log('added to schedule')
      })
    }


  },



  el: '#app',


})