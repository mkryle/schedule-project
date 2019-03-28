<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="navbar-item">
      <h2>{{ msg }} {{ $route.params.id }}</h2>
    </div>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
      <p class="navbar-item"><router-link to="/user/UserName">Home</router-link></p>
      <p class="navbar-item"><router-link to="/user/UserName/events">Events</router-link></p>
      <p class="navbar-item"><router-link to="/user/UserName/profile">Profile</router-link></p>
    </div>
  </div>
</nav>

  <router-view></router-view>
</div>
</template>
<script>
    export default{
        data(){
          return{
            msg: 'Im logged in As: '
          }
        }
    }
</script>
