<template>
  <div class="hero">
<div class="field is-grouped">
  <p class="control">
    <label class="label" for="username">Student Name</label>
    <input v-model="STUDENT_NAME" class="input" type="text" id="username" placeholder="student Name">
</p>
  <p class="control">
    <label class="label" for="fullName">Course ID</label>
    <input v-model="STUDENT_COURSE" class="input" type="text" id="fullName" placeholder="student Course">
    </p>
    <button class="button" @click="addStudent()">Add</button>
  </div>
  </div>
</template>
<script>
export default {
  name: 'AddNewStudent',
  data(){
    return{
      msg: ''
    }
  },
  computed: {
    STUDENT_NAME: {
      get() {
        return this.$store.getters.studentName
      },
      set(value) {
        this.$store.commit("STUDENT_NAME", value)
      }
    },
    STUDENT_COURSE: {
      get() {
        return this.$store.getters.studentCourse
      },
      set(value) {
        this.$store.commit("STUDENT_COURSE", value)
      }
    }
  },
  methods: {
    addStudent() {
      this.$store.commit('addStudent')
    }
  }
}
// </script>
<style lang="css" scoped>
button{
  margin-top: 25px;
}
</style>
