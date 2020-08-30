<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import Navigation from './components/Navigation'

  export default {
    components: {
      Navigation
    },
    mounted() {
      this.axios.get('https://ipapi.co/json/')
        .then((res) => {
          if(res.data) {
            const country = res.data.country_code || res.data.country
            this.setTranslation(country)
          }
        })
    },
    methods: {
      ...mapMutations(['setTranslation'])
    }
  }
</script>

<style>

</style>
