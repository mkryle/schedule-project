
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
    <form @submit.prevent="addSchedule()">
      <div class="form-group">
        <label for="person-name">Name</label>
        <input
          id="person-name"
          v-model="schedule.name"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="person-phone">Phone</label>
        <input
          id="person-phone"
          v-model="schedule.day"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="person-function">Function</label>
        <input
          id="person-function"
          v-model="schedule.date"
          type="text"
          class="form-control">
      </div>
      <button
        type="submit"
        class="btn btn-primary">
        Add person
      </button>
    </form>
  </div>
</template>


<script>
const uuidv4 = require('uuid/v4');

export default {
  data() {
    return {

      schedule: {
        id: uuidv4(),
        date: '',
        day: '',
        startTime: '',
        endTime: '',
        teacher: '',
        subject: '',
        rom: '',
        courseGroup: ''
      },
    };
  },
  mounted() {
  },
  methods: {
    addSchedule() {
      this.$store.dispatch('addSchedule', this.schedule);
      this.schedule = {
        id: uuidv4(),
        date: '',
        day: '',
        startTime: '',
        endTime: '',
        teacher: '',
        subject: '',
        rom: '',
        courseGroup: ''
      };
    },
  },
};
</script>

<style lang="css" scoped>
</style>
