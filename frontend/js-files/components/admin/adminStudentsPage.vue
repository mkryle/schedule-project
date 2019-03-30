<template>
    <div class="hero is-large is-light" >
  <!-- List records -->
  <div class="container is-centered">
      <addForm></addForm>

  <table class="table is-bordered is-striped">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Course</th>
      <th>Edit</th>
    </tr>

    <tr v-for='(student, index) in students'>
      <td>{{ student.id }}</td>
      <td>{{ student.name }}</td>
      <td>{{ student.courseid }}</td>
      <td>
        <div class="buttons are-small">
          <button class="button"><router-link :to="{ name: 'admin-edit-student', params: { userId: student.id }}">Edit</router-link></button>

          <button class="button"  @click="deleteStudent(student.id)">Delete</button>
        </div>
      </td>
    </tr>
    <p v-if="students.length === 0" class='text-center alert alert-warning'>No data found! Please add some data ...</p>
  </table>

  <router-view class="view"></router-view>
  </div>

    </div>
</template>
<script>
import addForm from './addNewStudent.vue'

    export default{
      data(){
        return{

        }
      },
      computed: {
        students() { // hämtar allt from store
               return this.$store.getters.loadAll;
           }
      },
      methods: {
      deleteStudent(index) { // tabort en record från store
          this.$store.commit('DELETE_USER', index)
      }
      },
      components:{
        addForm
      }
    }
</script>
