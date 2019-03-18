// main app file

<template>
<div id="app">
  <div class="level-item ">
    <p class="subtitle">
      <strong>Schedule Project</strong>
    </p>
  </div>
<router-view></router-view>
</div>
</template>

<script>


export default{
    data(){
      return{
        admin: 'admin menu',
        user: 'user Menu'
      }
    },
    components: {

    }
}
</script>
