<template>
  <section id="services" class="container m-auto py-10 lg:py-20">
    <h2 class="font-bold uppercase text-center text-3xl text-primary text-center">
      {{ getTranslation.servicesTitle }}
    </h2>
    <p
      class="text-center"
      v-html="getTranslation.servicesSubtitle"
    />
    <div class="px-1 sm:px-8 mt-10 flex flex-wrap">
      <ServicesItem
        v-for="service in getTranslation.services"
        :key="service.id"
        :service="service"
      />
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ServicesItem from './ServicesItem'

  export default {
    name: 'Services',
    components: { ServicesItem },
    computed: {
      ...mapGetters(['getTranslation']),
    }
  }
</script>

<style scoped>

</style>
