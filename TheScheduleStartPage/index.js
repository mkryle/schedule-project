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
      this.week.tuDay = moment().subtract(2, "days").format('YYYY-MM-DD')
      this.week.moDay = moment().subtract(1, "days").format('YYYY-MM-DD')
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
    createdByWho: null,
    createdByClass: null,

    test: null,

    week: {
      Monday: 'Måndag',
      moDay: null,
      moPrint: [{}],
      Tuesday: 'Tisdag',
      tuDay: null,
      tuPrint: [{}],
      Wensday: 'Onsdag',
      weDay: null,
      wePrint: [{}],
      Thursday: 'Torsdag',
      thDday: null,
      thPrint: [{}],
      Friday: 'Fredag',
      frDay: null,
      frPrint: [{}],
      Saturday: 'Lördag',
      saDay: null,
      saPrint: [{}],
      Sunday: 'Söndag',
      suDay: null,
      suPrint: [{}],

    },

    nextWeek: {
      Monday: 'Måndag',
      moDay: null,
      moPrint: [{}],
      Tuesday: 'Tisdag',
      tuDay: null,
      tuPrint: [{}],
      Wensday: 'Onsdag',
      weDay: null,
      wePrint: [{}],
      Thursday: 'Torsdag',
      thDday: null,
      thPrint: [{}],
      Friday: 'Fredag',
      frDay: null,
      frPrint: [{}],
      Saturday: 'Lördag',
      saDay: null,
      saPrint: [{}],
      Sunday: 'Söndag',
      suDay: null,
      suPrint: [{}],
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
    },

    byWhoAndDate() {


      //thisweek
      fetch('http://localhost:3000/byWhoAndDate/' + this.week.moDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.moPrint = result
        })


      fetch('http://localhost:3000/byWhoAndDate/' + this.week.tuDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.tuPrint = result
        })

      fetch('http://localhost:3000/byWhoAndDate/' + this.week.weDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.wePrint = result
        })

      fetch('http://localhost:3000/byWhoAndDate/' + this.week.thDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.thPrint = result
        })
      fetch('http://localhost:3000/byWhoAndDate/' + this.week.frDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.frPrint = result
        })

      fetch('http://localhost:3000/byWhoAndDate/' + this.week.saDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.saPrint = result
        })
      fetch('http://localhost:3000/byWhoAndDate/' + this.week.suDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.week.suPrint = result
        })


      //nextweek
      fetch('http://localhost:3000/byWhoAndDate/' + this.nextWeek.moDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.moPrint = result
        })

      fetch('http://localhost:3000/byWhoAndDate/' + this.nextWeek.tuDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.tuPrint = result
        })

      fetch('http://localhost:3000/byWhoAndDate/' + this.nextWeek.weDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.wePrint = result
        })

      fetch('http://localhost:3000/byWhoAndDate/' + this.nextWeek.thDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.thPrint = result
        })
      fetch('http://localhost:3000/byWhoAndDate/' + this.nextWeek.frDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.frPrint = result
        })

      fetch('http://localhost:3000/byWhoAndDate/' + this.nextWeek.saDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.saPrint = result
        })
      fetch('http://localhost:3000/byWhoAndDate/' + this.nextWeek.suDay + '/' + this.createdByWho)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.suPrint = result
        })


    },

    byClassAndDate() {


      //thisweek
      fetch('http://localhost:3000/byClassAndDate/' + this.week.moDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.moPrint = result
        })


      fetch('http://localhost:3000/byClassAndDate/' + this.week.tuDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.tuPrint = result
        })

      fetch('http://localhost:3000/byClassAndDate/' + this.week.weDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.wePrint = result
        })

      fetch('http://localhost:3000/byClassAndDate/' + this.week.thDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.thPrint = result
        })
      fetch('http://localhost:3000/byClassAndDate/' + this.week.frDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.frPrint = result
        })

      fetch('http://localhost:3000/byClassAndDate/' + this.week.saDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.saPrint = result
        })
      fetch('http://localhost:3000/byClassAndDate/' + this.week.suDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.week.suPrint = result
        })


      //nextweek
      fetch('http://localhost:3000/byClassAndDate/' + this.nextWeek.moDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.moPrint = result
        })

      fetch('http://localhost:3000/byClassAndDate/' + this.nextWeek.tuDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.tuPrint = result
        })

      fetch('http://localhost:3000/byClassAndDate/' + this.nextWeek.weDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.wePrint = result
        })

      fetch('http://localhost:3000/byClassAndDate/' + this.nextWeek.thDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.thPrint = result
        })
      fetch('http://localhost:3000/byClassAndDate/' + this.nextWeek.frDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.frPrint = result
        })

      fetch('http://localhost:3000/byClassAndDate/' + this.nextWeek.saDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.saPrint = result
        })
      fetch('http://localhost:3000/byClassAndDate/' + this.nextWeek.suDay + '/' + this.createdByClass)
        .then(response => response.json())
        .then(result => {
          this.nextWeek.suPrint = result
        })


    },

  },


  el: '#app',


})