<template>
  <div>
    <navbar></navbar>
    <nuxt/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueMaterial from 'vue-material'

  import 'vue-material/dist/vue-material.css'
  import 'assets/scss/styles.scss'

  import Navbar from '../components/Navbar'

  Vue.use(VueMaterial)
  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
    html {
    font-family: 'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
</style>

