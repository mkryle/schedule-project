<template>
    <div class="container is-centered">
        <h1>  {{ msg }} </h1>
        <router-link :to="{name: 'user-profile'}">
  user
</router-link>
    </div>
</template>
<script>
    export default{
        data(){
          return{
            msg: 'this is user profile'
          }
        }
    }
</script>
