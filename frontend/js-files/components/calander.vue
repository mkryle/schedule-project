<template>
  <div>
<p>test</p>
       <ejs-schedule height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings' :currentView='currentView'></ejs-schedule>
  </div>
</template>

<script>
// import FullCalendar from 'vue-fullcalendar';
// import FullCalendar from 'dayspan'
// import { Calendars } from 'quasar-calendar';
// import Vue from 'vue';
// import { Calendars } from 'quasar-calendar'
// import Schedule from 'vue-schedule'

import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';


Vue.use(SchedulePlugin);

export default {
     data () {
       return {
         selectedDate: new Date(2019, 3, 20),
         currentView: 'Week',
         eventSettings: {
           dataSource: [{
             Id: 1,
             Subject: 'Meeting',
             StartTime: new Date(2019, 3, 18, 10, 0),
             EndTime: new Date(2019, 3, 19, 12, 30),
             Description: 'webb18'
           }]
         }
       }
     },
     provide: {
       schedule: [Day, Week, WorkWeek, Month, Agenda]
     }
 }
</script>

<style lang="css" scoped>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>
