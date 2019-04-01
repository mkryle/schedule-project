<template>
  <div class="">


  <section class="hero is-fullheight is-dark is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="card is-rounded">
            <div class="card-content">
              <h1 class="title">
                <img src="../../assets/logo.png" alt="logo" width="220">
              </h1>
              <p class="control has-icon">
                <input
                  class="input"
                  id="name"
                  type="text"
                  placeholder="Username"
                  v-model="admin.username"
                >
                <i class="fa fa-user"></i>
              </p>
              <p class="control has-icon">
                <input
                  class="input"
                  id="password"
                  type="password"
                  placeholder="Password"
                  v-model="admin.password"
                >
                <i class="fa fa-lock"></i>
              </p>
              <p class="control">
                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
              </p>
              <p class="control">
                <button
                  class="button is-small is-outlined is-fullwidth"
                  v-on:click="submitLogin()"
                >Login</button>
              </p>
              <p class="control">
                <button
                  class="button is-small is-outlined is-fullwidth"
                  href="skapa konto sida"
                >Register</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
</template>

<script>
  // import frontend from "../frontend";
  export default {
    data(){
      return {
        admin :{
            username:'',
            password:''
        }
      }
    },
    methods:{
      submitLogin(){
     const the = this;
     let id = this.$route.params.userId
     this.$store.dispatch('login',this.admin).then(function(){
         if(the.$store.state.seccLogin){
             console.log('Welcome admin')
             the.$router.push('/admin/'+ the.admin.username)
             the.$store.state.seccLogin = 0
         }else{
             console.log('You are hacker')
                        the.$router.push('/admin/'+ the.admin.username)
         }
     })
 }
 }


  };

</script>

<style>


</style>
