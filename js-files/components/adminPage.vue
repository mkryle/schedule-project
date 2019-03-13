<template>
    <div class="container is-centered">
        <h1>  {{ title }}</h1>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex' // inbuild vuex helpers


    export default{
        computed: {
        newItem: {
        get(){
        return this.$store.state.newItem
        },
        set(value){
        this.$store.commit('setNewItem', value)
        }
        },
        ...mapState(['title', 'items'])
        },
        methods: mapActions(['addItem','removeItem'])
    }
</script>
