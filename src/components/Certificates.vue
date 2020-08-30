<template>
  <section id="experience" class="container m-auto py-10 lg:py-20 lg:text-center">
    <h2 class="font-bold uppercase text-center text-3xl text-primary">
      {{ getTranslation.certificatesTitle }}
    </h2>
    <p
      class="text-center"
      v-html="getTranslation.certificatesSubtitle"
    />

    <div class="mt-10 flex flex-wrap items-center px-4 sm:px-8">
      <div
        v-for="certificate in certificates"
        :key="certificate.id"
        class="w-full sm:w-1/2 lg:w-1/3 px-3 mb-10"
      >
        <div class="mb-4">
          <img
            src="/assets/icons/certificates.svg"
            width="34"
            height="34"
            alt="certificate"
          >
        </div>
        <div class="text-left">
          <h4 class="font-medium m-0 mb-2">
            {{ certificate.name }}
          </h4>
          <p class="text-sm">
            Issued {{ certificate.issued }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Certificates',
    data: () => ({
      certificates: [
        { id: 0, name: 'HTML5, CSS3 & JavaScript Course: Complete Guide', issued: 'Aug 2020 - Udemy' },
        { id: 1, name: 'NPM Mastery: Learn how to work with NPM like a Professional', issued: 'Aug 2020 - Udemy' },
        { id: 2, name: 'SQL for Data Analysis: Weekender Crash Course', issued: 'Aug 2020 - Udemy' },
      ]
    }),
    computed: {
      ...mapGetters(['getTranslation'])
    }
  }
</script>

<style scoped>
  [data-theme="dark"] img {
    filter: invert(1);
  }

  h4 {
    min-height: 54px;
  }

</style>
