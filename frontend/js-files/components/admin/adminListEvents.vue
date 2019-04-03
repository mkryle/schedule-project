<template lang="html">
  <div class="">
    <addSchema></addSchema>
    <Schema></Schema>
  </div>
</template>

<script>

import addSchema from './addNewEvent.vue'
import Schema from '../calander.vue'
export default {
  components:{
    addSchema,
    Schema
  }
}
</script>

<style lang="css" scoped>
</style>
