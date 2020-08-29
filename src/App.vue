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
      this.axios.get('https://ipapi.co/json/')
        .then((res) => {
          console.log(res, res.data, res.response)
        })
    }
  }
</script>

<style>

</style>
