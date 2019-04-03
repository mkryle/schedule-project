
<template>
 <div class="">



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

export default {



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

  }
}

</script>

<style lang="css" scoped>


html {
    background-color: silver;
    text-align: center;
}

#week {
    display: inline-block;
}

.day {
    background-color: white;
    width: 150px;
    height: 400px;
    border: solid 1px #000000;
    float: left;
}

.rubrik {
    width: 100%;
    height: 20px;
    background-color: darkturquoise;
}

.datum {
    width: 100%;
    height: 20px;
    background-color: darkturquoise;
    margin-bottom: 10px;
}

.event {
    background-color: chartreuse;
    margin-bottom: 10px;
}

.tidinput {
    width: 60px;
}
</style>
