
executable file 79 lines (76 sloc) 1.63 KB
<template>
  <div id="app">
    <section class="hero is-fullheight is-dark">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="field">
              <p>
                <label for="date">Datum:</label>
                <input class="input" type="date" value="date" v-model="date">
              </p>
              <p>
                <label for="startTime">Start tid:</label>
                <input class="input" type="time" name="startTime" v-model="startTime">
              </p>
              <p>
                <label for="endTime">Slut tid:</label>
                <input class="input" type="time" name="endTime" v-model="endTime">
              </p>
              <p>
                <label for="topName">Skola / Arbete:</label>
                <input class="input" type="text" name="topName" v-model="topName">
              </p>
              <p>
                <label for="subName">Linje / Avdelning:</label>
                <input class="input" type="text" name="subName" v-model="subName">
              </p>
              <p>
                <label for="altSubName">Klass / Team:</label>
                <input class="input" type="text" name="altSubName" v-model="altSubName">
              </p>
              <p>
                <label for="eventName">Lektiontyp / Event:</label>
                <input class="input" type="text" name="eventName" v-model="eventName">
              </p>
              <p>
                <label for="createdBy">Skapad av: (namn)</label>
                <input class="input" type="text" name="createdBy" v-model="createdBy">
              </p>
              <p>
                <input
                  class="button is-success is-small is-centered"
                  type="button"
                  id="add-to-schedule"
                  value="send"
                  v-on:click="addToSchedule()"
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

// import src="js-files/project-main.js"

<script>
const uuidv4 = require("uuid/v4");

export default {
  data() {
    return {
      schedule: {
        id: uuidv4(),
        date: "",
        day: "",
        startTime: "",
        endTime: "",
        teacher: "",
        subject: "",
        rom: "",
        courseGroup: ""
      }
    };
  },
  mounted() {},
  methods: {
    addSchedule() {
      this.$store.dispatch("addSchedule", this.schedule);
      this.schedule = {
        id: uuidv4(),
        date: "",
        day: "",
        startTime: "",
        endTime: "",
        teacher: "",
        subject: "",
        rom: "",
        courseGroup: ""
      };
    }
  }
};
</script>

<style lang="css" scoped>
</style>
