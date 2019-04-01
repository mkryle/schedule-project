import Vue from 'vue'
var moment = require('moment');
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

    test: null,

    week: {
      Monday: 'Måndag',
      moDay: null,
      moPrint: null,
      Tuesday: 'Tisdag',
      tuDay: null,
      tuPrint: null,
      Wensday: 'Onsdag',
      weDay: null,
      wePrint: null,
      Thursday: 'Torsdag',
      thDday: null,
      thPrint: null,
      Friday: 'Fredag',
      frDay: null,
      frPrint: null,
      Saturday: 'Lördag',
      saDay: null,
      saPrint: null,
      Sunday: 'Söndag',
      suDay: null,
      suPrint: null
    },

    nextWeek: {
      Monday: 'Måndag',
      moDay: null,
      moPrint: null,
      Tuesday: 'Tisdag',
      tuDay: null,
      tuPrint: null,
      Wensday: 'Onsdag',
      weDay: null,
      wePrint: null,
      Thursday: 'Torsdag',
      thDday: null,
      thPrint: null,
      Friday: 'Fredag',
      frDay: null,
      frPrint: null,
      Saturday: 'Lördag',
      saDay: null,
      saPrint: null,
      Sunday: 'Söndag',
      suDay: null,
      suPrint: null
    }

  },
  methods: {
    addToSchedule() {

      fetch('http://localhost:3000/admin/getSchema/', {

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
    },

    loadSchedule() {


      //thisweek
      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.week.moDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.week.moPrint = result
          console.log(this.week.moPrint)
        })

      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.week.tuDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.week.tuPrint = result
          console.log(this.week.tuPrint)
        })

      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.week.weDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.week.wePrint = result
          console.log(this.week.wePrint)
        })

      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.week.thDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.week.thPrint = result
          console.log(this.week.thPrint)
        })
      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.week.frDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.week.frPrint = result
          console.log(this.week.frPrint)
        })

      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.week.saDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.week.saPrint = result
          console.log(this.week.saPrint)
        })
      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.week.suDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.week.suPrint = result
          console.log(this.week.suPrint)
        })


      //nextweek
      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.nextWeek.moDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.moPrint = result
          console.log(this.nextWeek.moPrint)
        })

      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.nextWeek.tuDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.tuPrint = result
          console.log(this.nextWeek.tuPrint)
        })

      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.nextWeek.weDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.wePrint = result
          console.log(this.nextWeek.wePrint)
        })

      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.nextWeek.thDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.thPrint = result
          console.log(this.nextWeek.thPrint)
        })
      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.nextWeek.frDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.frPrint = result
          console.log(this.nextWeek.frPrint)
        })

      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.nextWeek.saDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.saPrint = result
          console.log(this.nextWeek.saPrint)
        })
      fetch('http://localhost:3000/admin/getSchema/byWhoAndDate/' + this.nextWeek.suDay + '/' + this.createdBy)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.suPrint = result
          console.log(this.nextWeek.suPrint)
        })


    },

  },


  el: '#app',


})
