<template>
    <div>
      <div>
          <label for="date">Datum:</label>
          <input type="date" value="date" v-model="date">
          <label for="startTime">Start tid:</label>
          <input type="time" name="startTime" v-model="startTime">
          <label for="endTime">Slut tid:</label>
          <input type="time" name="endTime" v-model="endTime">
          <label for="topName">Skola / Arbete:</label>
          <input type="text" name="topName" v-model="topName">
          <label for="subName">Linje / Avdelning:</label>
          <input type="text" name="subName" v-model="subName">
          <label for="altSubName">Klass / Team:</label>
          <input type="text" name="altSubName" v-model="altSubName">
          <label for="eventName">Lektiontyp / Event:</label>
          <input type="text" name="eventName" v-model="eventName">
          <label for="createdBy">Skapad av: (namn)</label>
          <input type="text" name="createdBy" v-model="createdBy">

          <input type="button" id="add-to-schedule" value="send" v-on:click="addToSchedule()">
      </div>
      <div id="week">
   <div class="day">
     <div class="rubrik">{{week.Monday}}</div>
     <div class="datum">{{week.moDay}}</div>
   </div>
   <div class="day">
     <div class="rubrik">{{week.Tuesday}}</div>
     <div class="datum">{{week.tuDay}}</div>
   </div>
   <div class="day">
     <div class="rubrik">{{week.Wensday}}</div>
     <div class="datum">{{week.weDay}}</div>
   </div>
   <div class="day">
     <div class="rubrik">{{week.Thursday}}</div>
     <div class="datum">{{week.thDay}}</div>
   </div>
   <div class="day">
     <div class="rubrik">{{week.Friday}}</div>
     <div class="datum">{{week.frDay}}</div>
   </div>
   <div class="day">
     <div class="rubrik">{{week.Saturday}}</div>
     <div class="datum">{{week.saDay}}</div>
   </div>
   <div class="day">
     <div class="rubrik">{{week.Sunday}}</div>
     <div class="datum">{{week.suDay}}</div>
   </div>
 </div>

 <div id="nextWeek">
   <div class="day">
     <div class="rubrik">{{nextWeek.Monday}}</div>
     <div class="datum">{{nextWeek.moDay}}</div>
   </div>
   <div class="day">
     <div class="rubrik">{{nextWeek.Tuesday}}</div>
     <div class="datum">{{nextWeek.tuDay}}</div>
   </div>
   <div class="day">
     <div class="rubrik">{{nextWeek.Wensday}}</div>
     <div class="datum">{{nextWeek.weDay}}</div>
   </div>
   <div class="day">
     <div class="rubrik">{{nextWeek.Thursday}}</div>
     <div class="datum">{{nextWeek.thDay}}</div>
   </div>
   <div class="day">
     <div class="rubrik">{{nextWeek.Friday}}</div>
     <div class="datum">{{nextWeek.frDay}}</div>
   </div>
   <div class="day">
     <div class="rubrik">{{nextWeek.Saturday}}</div>
     <div class="datum">{{nextWeek.saDay}}</div>
   </div>
   <div class="day">
     <div class="rubrik">{{nextWeek.Sunday}}</div>
     <div class="datum">{{nextWeek.suDay}}</div>
   </div>
 </div>


</div>
</template>
<script>

// import Calendarnew from '../calander.vue'

var moment = require('moment');
var baseServerUrl = 'http://localhost:7000';
// moment.locale('sv');
import addFormEvent from './addNewEvent.vue'
// console.log(moment.weekdays(24));

    export default{
      created(){
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
      data(){
        return{
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
        }
      },
      methods: {
        addToSchedule() {
          fetch(baseServerUrl+'/admin/getSchema', {
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
            }
          }
</script>
