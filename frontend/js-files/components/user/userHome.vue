<template>
  <div>

      <div v-if="user.name != $route.params.id" class="notification is-danger">
        this Student  not found
        <button class="button" @click="$router.push('/login')">Go Back to Login Page</button>
      </div>


<div v-else="">
    <nav class="navbar" role="navigation" aria-label="main navigation" >
  <div class="navbar-brand">
    <div class="navbar-item">
      <h2>{{ msg }} {{ $route.params.id}}</h2>
    </div>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
      <p class="navbar-item">  <router-link :to="{ name : 'user-events', params : { id : $route.params.id } }">Events</router-link></p>
      <p class="navbar-item"><router-link :to="{ name: 'user-profile', params: { id: $route.params.id }}">Profile</router-link></p>
    </div>
  </div>
</nav>

  <router-view></router-view>
  </div>
</div>
</template>
<script>
    export default{
        data(){
          return{
            msg: 'Welcome As Student: ',
            students: {
              name: null
            }
          }
        },
        computed:{
          user(){
             let name = this.$route.params.id
            return this.$store.getters.loadAll.find((p) => p.name == name) || {}
          }
        }
        , mounted() {
                // let name = this.$route.params.id
                // console.log(name);
                // return this.students = this.$store.getters.loadAll.find((p) => p.name == name) || {}
                // this.user = this.$store.getters.getItem
            }

    }
</script>
