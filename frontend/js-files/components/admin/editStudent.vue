<template>
  <div class="hero">

    <div v-if="user.id != $route.params.userId" class="notification is-danger">
      this user are not found
    </div>
<div class="" v-else="" >
    <p>Current Student Id : {{ $route.params.userId }}</p>
    <p class="control">
      <label class="label" for="username">Student Name</label>
      <input v-model="user.name" class="input" type="text" id="username" placeholder="student Name">
  </p>
    <p class="control">
      <label class="label" for="fullName">Course ID</label>
      <input v-model="user.courseid" class="input" type="text" id="fullName" placeholder="student Course">
      </p>
      <button class="button" @click="editUser()">Save</button>
      <p class="tag is-success" v-if="msg == true">The Student Successfully updated</p>
    </div>

</div>





<!-- <div class="field is-grouped">
  <p class="control">
    <label class="label" for="username">Student Name</label>
    <input v-model="person.name" class="input" type="text" id="username" placeholder="student Name">
</p>
  <p class="control">
    <label class="label" for="fullName">Course ID</label>
    <input v-model="person.courseid" class="input" type="text" id="fullName" placeholder="student Course">
    </p>
    <button class="button" @click="patchPerson()">Save</button>
    <p class="tag is-success" v-if="msg == true">The Student Successfully updated</p>
  </div>
-->
  </div>
</template>
<script>
export default {
  name: 'AddNewStudent',
  data(){
    return{
      msg: false
    }
  },
  computed: {
    user() {
      // getItem
      let id = this.$route.params.userId
      return this.$store.getters.loadAll.find((p) => p.id === id) || {}
      // return this.$store.getters.loadAll
    },
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
    editUser() {
      this.$store.dispatch('editUser', this.user);
 },
  }
}
// </script>
<style lang="css" scoped>
button{
  margin-top: 25px;
}
</style>
