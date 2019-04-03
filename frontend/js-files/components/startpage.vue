<template>
  <div class="">

    <div class="tabs is-centered">
      <ul>
        <li v-bind:class="{ 'is-active': tabsel == 'login' }" @click="tabsel = 'login'"><a>Login</a></li>
        <li v-bind:class="{ 'is-active': tabsel == 'register' }" @click="tabsel = 'register'"><a>Register</a></li>
      </ul>
    </div>
  <section class="hero is-fullheight is-dark is-bold">

    <div class="hero-body">

      <div class="container">

      <div class="content">
        <div v-show="tabsel == 'login'">
          <div class="columns is-centered">
            <div class="card is-rounded">
              <div class="card-content">
                <h1 class="title">
                  <img src="../../assets/logo.png" alt="logo" width="220">
                </h1>
                <p v-if="errors.length">
               <b>Please correct the following error(s):</b>

                 <p id="hideNoti" v-for="error in errors" class="notification is-warning">
                   {{ error }}
                 </p>

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
              </div>
            </div>
          </div>
        </div>

        <div v-show="tabsel == 'register'">
          <div class="columns is-centered">
            <div class="card is-rounded">
          <div class="card-content">
            <h1 class="title">
              <img src="../../assets/logo.png" alt="logo" width="220">
            </h1>
            <p v-if="errors.length">
           <b>Please correct the following error(s):</b>
             <p class="notification is-warning" v-for="error in errors">{{ error }}</p>
         </p>
            <p class="control has-icon">
              <div class="notification is-success" v-if="msg.length > 0">
              {{msg}}
              </div>
              <input
                class="input"
                id="name"
                type="text"
                placeholder="Username"
                v-model="adminUsername"
              >
              <i class="fa fa-user"></i>
            </p>
            <p class="control has-icon">
              <input
                class="input"
                id="password"
                type="password"
                placeholder="Password"
                v-model="adminPassword"
              >
            </p>
            <p class="control has-icon">
              <input
                class="input"
                id="password"
                type="password"
                placeholder="Password"
                v-model="passwordRepeat"
              >
              <p class="tag is-warning is-small" v-if="passwordRepeat != adminPassword">Passwords Don't Match</p>
            </p>
            <p class="control">
              <label class="checkbox">
                <input type="checkbox">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </p>
            <p class="control">
              <button
                class="button is-small is-outlined is-fullwidth"
                v-on:click="submitRegister()"
              >Register</button>
            </p>
          </div>
          </div>
          </div>


        </div>
      </div>


      </div>
    </div>
  </section>
  <section>
<div class="" v-for="item in admins">
  {{item}}
</div>
  </section>
    </div>
</template>

<script>
var baseServerUrl = 'http://localhost:3000';

  export default {
    data(){
      return {
        tabsel: 'login',
        found: false,
        msg: '',
        check: '',
        admin :{
            username:'',
            password:''
        },
        errors: [],
        allAdmins: [],
        passwordRepeat: ''
      }
    },
    computed: {
        admins() { // hämtar allt from store
                    // this.allAdmins.push(this.$store.getters.getAdmins)
                    this.allAdmins = this.$store.getters.getAdmins

                    // var found = false
                    for (var i = 0; i < this.allAdmins.length; i++) {
                      if (this.allAdmins[i].username == this.adminUsername) {
                        return this.found = true
                      }
                  }
                   return this.allAdmins
               },
        adminUsername: {
                 get() {
                   return this.$store.getters.adminUsername
                 },
                 set(value) {
                   this.$store.commit("ADMIN_USERNAME", value)
                 }
               },
          adminPassword: {
                 get() {
                   return this.$store.getters.adminPassword
                 },
                 set(value) {
                     this.$store.commit("ADMIN_PASSWORD", value)
                 }
               }
          },
    methods:{
      submitLogin(){
     const den = this;
     den.$store.dispatch('login',den.admin).then(function(){
       console.log(den.$store.state.admin.tokens);
       console.log(den.admin);
         if(den.$store.state.admin.tokens){
             console.log('Welcome to admin panel')
             den.$router.push({
               name: 'admin-home',
               params: { id: den.admin.username }})
             den.$store.state.admin.tokens = 'asjdka7342jukadasdu32474jads'
         }else{
             den.errors.push('UserName or Password incorrect');
         }
     })
     setTimeout(function(){
       console.log('Clear error notifications');
       return den.errors = []
    }, 3000)
   },
   submitRegister(){
     const vm = this
     if (vm.adminUsername.length > 0 && vm.adminPassword.length > 6) {
         if (vm.found == false) {
           if(vm.adminPassword === vm.passwordRepeat) {
             vm.$store.commit('registerAdmin')
             vm.msg = 'Account successfully created! you will be redirected to LOGIN page in 5 sec'
             vm.passwordRepeat = ""
             vm.adminPassword = ""
             vm.adminUsername = ""
             setTimeout(function(){
               location.reload(true)
            }, 5000)
           }else {
             this.errors.push('Passwords Do not Match');
             // break
           }
           // return true;
         }else {
           this.errors.push('This username already taken');
           setTimeout(function(){
             location.reload(true)
          }, 3000)
           // break
         }
       // }
     }else {
       this.errors.push('PASSWORD: > 6 charecters Username is require');
     }
     setTimeout(function(){
      console.log('Clear error notifications');
       return vm.errors = []
    }, 5000)
}
},
mounted(){

}
  };

</script>

<style scoped="">
[v-cloak] { display:none; }
</style>
