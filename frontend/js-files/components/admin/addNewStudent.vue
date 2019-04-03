<template>
  <div class="hero">
    <p class="control">
    <p v-if="errors.length">
   <b>Please correct the following error(s):</b>
     <p class="notification is-warning" v-for="error in errors">{{ error }}</p>
 </p>
   <p class="notification is-success" v-if="studentAdedde.length > 0">
     {{ studentAdedde }}
   </p>
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
      errors: [],
      studentAdedde: ''
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
      var den = this
      if (den.STUDENT_NAME.length > 0 && den.STUDENT_COURSE.length > 0) {
        den.$store.commit('addStudent')
        den.studentAdedde = 'New Student Successfully added'
        setTimeout(function(){
          console.log('sho after 3 sec');
          console.log(den.studentAdedde);
          den.studentAdedde = ''
       }, 2000)
        return true;
      }else {
        den.errors.push('Name & Course field are required');
      }
      setTimeout(function(){
        console.log('Clear error notifications');
        den.studentAdedde = ''
        return den.errors = []
     }, 2000)
    }
  }
}
// </script>
<style lang="css" scoped>
button{
  margin-top: 25px;
}
</style>
