<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 text-left px-3 mb-10">
    <div class="mb-4">
      <img
        :src="serviceIcon"
        width="34"
        height="34"
        :alt="service.title"
      >
    </div>
    <h3 class="font-medium mb-2">
      {{ service.title }}
    </h3>
    <p class="text-sm">
      {{ service.description }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'ServicesItem',
    props: {
      service: {
        required: true,
        type: Object,
        default: () =>({ title: '', description: '' })
      }
    },
    computed: {
      serviceIcon() {
        const url = '/assets/icons/'
        if(this.service.id === 0)
          return url + 'front-end.svg'
        if(this.service.id === 1)
          return url + 'back-end.svg'
        if(this.service.id === 2)
          return url + 'ui-ux.svg'
        if(this.service.id === 3)
          return url + 'api.svg'
        if(this.service.id === 4)
          return url + 'wordpress-outline.svg'
        if(this.service.id === 5)
          return url + 'deployment.svg'
        return 'front-end.svg'
      }
    }
  }
</script>

<style scoped>
  [data-theme="dark"] img {
    filter: invert(1);
  }

</style>
