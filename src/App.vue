<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
  import Navigation from './components/Navigation'

  export default {
    components: {
      Navigation
    },
    mounted() {
      this.axios.get('https://extreme-ip-lookup.com/json/')
        .then((res) => {
          console.log(res.country)
        })
    }
  }
</script>

<style>

</style>
