<template>
  <div class="site-content lg:ml-24 xl:ml-0 flex flex-col items-center justify-center h-screen">
    <img src="/assets/icons/404.svg" alt="404">
    <div class="text-3xl font-bold mt-5">
      Whoops! Page not found!
      <span
        class="text-3xl font-bold text-primary cursor-pointer"
        @click="goBack()"
      >
        Go back
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NotFound',
    methods: {
      goBack() {
        this.$router.push({ name: 'Home' })
      }
    }
  }
</script>

<style scoped>
    img {
      width: 40%;
    }
</style>
