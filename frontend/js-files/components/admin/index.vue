<template>
    <div>
      <div v-if="tokens != null">
      <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <h2>{{ msg }} {{ $route.params.id }}</h2>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <p class="navbar-item"><router-link :to="{ name: 'admin-home', params: { id: admin.username }}">Home</router-link></p>
        <p class="navbar-item">  <router-link :to="{ name : 'admin-events', params : { id : admin.username } }">Events</router-link></p>
        <p class="navbar-item"><router-link :to="{ name: 'admin-profile', params: { id: admin.username }}">Profile</router-link></p>
        <p class="navbar-item"><router-link :to="{ name: 'admin-students', params: { id: admin.username }}">Stundets</router-link></p>

      </div>

    </div>
  </nav>
      <router-view></router-view>
    </div>
    <div v-else="" class="notification is-danger">
        {{notAdmin}}
              <button class="button" @click="$router.push('/login')">Go Back to Login Page</button>
    </div>
</div>
</template>

<script>
    export default{
        data(){
          return{
            msg: 'Im logged as: ',
            notAdmin: 'This Page is only for Admins',
            admin: {
              username: null,
              password: null
            },
            newTokens: 'asjdka7342jukadasdu32474jads',
            tokens: null
          }
        },
        created(){
           return this.tokens = this.$store.getters.getTokens
           console.log('tokens'+this.tokens);
        },
        mounted() {
               let usernames = this.$route.params.id
               console.log('oldTokens'+this.tokens);
               console.log('NEWtokens'+this.newTokens);
               // this.tokens = this.$store.getters.getTokens
               return this.admin = this.$store.getters.getAdmins.find((p) => p.username === usernames) || {}
               // this.user = this.$store.getters.getItem
              // return this.tokens = this.$store.getters.getTokens
           }
    }
</script>


<style lang="css" scoped>
</style>
