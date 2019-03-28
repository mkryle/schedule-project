<template>
    <div>
<calendarnew />
        <div class="notification is-danger ">
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="title is-white">Vecka 11:</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="select">
                <select>
                  <option>vecka 11: 11 - 17 Mars 2019</option>
                  <option>vecka 12: 18 - 24 Mars 2019</option>
                  <option>vecka 13: 25 - 31 Mars 2019</option>
                  <option>vecka 14: 1 - 6 Mars 2019</option>
                </select>
              </div>
            </div>
          </div>
        </div>
  </div>


  <div class="tile is-child notification is-light" v-for="(day, index) in weekday" :key="day.day">
    <div class="has-text-centered">
      <p class="title">{{ day }}</p>
      <p class="subtitle">{{ date }}</p>
    </div>

<div class="column is-12" v-for="schedule in events"
:key="schedule.day">
<article class="message">
<div class="message-header">
  <p>{{ schedule.startTime }} - {{ schedule.endTime }} </p>
  <button class="delete" aria-label="delete"></button>
</div>
<div class="message-body is-dark" style="background-color: white; border: 1px solid #363636;">
  <table class="table is-bordered is-fullwidth">
    <thead>
  <tr>
    <th>Teacher</th>
    <th>Rom</th>
    <th>Subject</th>
    <th>Course Group</th>
    <th>Update</th>

  </tr>
</thead>
    <tbody>
      <tr>
        <td>{{ schedule.teacher }}</td>
        <td>{{ schedule.rom }}</td>
        <td>{{ schedule.subject }}</td>
        <td> <a href="#"> {{ schedule.courseGroup }}</a> </td>
        <td>
        <div class="tags are-large is-centered">
        <a href="#"><span class="tag is-success">Status</span></a>
        <a href="#"><span class="tag">Edit</span></a>
        </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<a class="button is-small is-primary" href="#/admin/adminName/addNewEvent">Add Event</a>
</article>
</div>

</div>
</div>

</template>
<script>
import Calendarnew from '../calander.vue'

var moment = require('moment');

moment.locale('sv');
console.log(moment.weekdays(24));
    export default{
        data(){
          return{
            msg: 'this is admin home pagesssssssssssss',
            days: moment.weekdays(),
            weekDaysList: [],

          }
        },  components: {
    Calendarnew
  },
        computed: {
            events() {
              return this.$store.getters['getItems'];
            },
            weekday(){
              for (var i = 0; i < this.events.length; i++) {

                if (this.events[i].day = this.days[i]) {

                  this.weekDaysList.push({date:this.days[i],items:[this.events[i].day]})
                }

              }
              console.log(this.weekDaysList);
              return this.days
            }
          },
    }
</script>
