<template>
  <div class="hero">


    <p v-if="errors.length">
   <b>Please correct the following error(s):</b>
   <ul>
     <li v-for="error in errors">{{ error }}</li>
   </ul>
 </p>
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
      errors: []
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
      if (this.STUDENT_NAME.length > 0 && this.STUDENT_COURSE.length > 0) {
        this.$store.commit('addStudent')
        return true;
      }else {
        this.errors.push('Name & Course field are required');
      }
    }
  }
}
// </script>
<style lang="css" scoped>
button{
  margin-top: 25px;
}
</style>
