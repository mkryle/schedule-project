<template>
    <div class="container is-centered">
        <h1 class="title">  {{ msg }} </h1>
        <p>




        </p>
        <div class="container">


        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
              <span>NAME:</span>  <p class="title is-4"> {{ user.name }}</p>
            <span> COURSE:</span>   <p class="subtitle is-3">{{ user.courseid }}</p>
              <span>ID:</span>  <p class="subtitle is-3"> {{ user.id }} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default{
        data(){
          return{
            msg: 'Profile'
          }
        },
        computed:{
          user(){
             let name = this.$route.params.id
            return this.$store.getters.loadAll.find((p) => p.name == name) || {}
          }
        }
    }
</script>
