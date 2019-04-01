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
              <p v-if="errors.length">
             <b>Please correct the following error(s):</b>
             <ul>
               <li v-for="error in errors">{{ error }}</li>
             </ul>
           </p>
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
  export default {
    data(){
      return {
        admin :{
            username:'',
            password:''
        },
        errors: []
      }
    },
    methods:{
      submitLogin(){
     const den = this;
     den.$store.dispatch('login',den.admin).then(function(){
         if(den.$store.state.admin.tokens){
             console.log('Welcome to admin panel')
             den.$router.push({
               name: 'admin-index',
               params: { id: den.admin.username }})
             den.$store.state.admin.tokens = 'asjdka7342jukadasdu32474jads'
         }else{
             den.errors.push('UserName or Password incorrect');
         }
     })
   }
   }
  };

</script>

<style scoped="">

</style>
