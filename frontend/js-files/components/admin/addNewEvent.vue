
executable file 79 lines (76 sloc) 1.63 KB
<template>
  <div class="py-3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{name: 'people'}">
          People
        </router-link>
      </li>
      <li class="breadcrumb-item active">
        Add person
      </li>
    </ol>
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
  </div>
</template>


<script>
var moment = require('moment');
var baseServerUrl = 'http://localhost:7000';
export default {
  methods: {
    addToSchedule() {
      fetch(baseServerUrl + '/admin/getSchema', {
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
};
</script>

<style lang="css" scoped>
</style>
