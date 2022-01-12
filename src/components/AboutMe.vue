<template>
  <section id="about" class="container m-auto py-10 lg:py-20 lg:text-center">
    <h2
      class="font-bold uppercase text-center text-3xl text-primary"
      v-html="getTranslation.aboutMeTitle"
    />
    <p
      class="text-center"
      v-html="getTranslation.aboutMeSubtitle"
    />

    <div class="px-4 sm:px-8 xl:px-20">
      <p
        class="mt-10"
        v-html="getTranslation.aboutMeFirstParagraph"
      />
      <p
        class="mt-5"
        v-html="getTranslation.aboutMeSecondParagraph"
      />

      <p
        class="mt-5"
        v-html="getTranslation.aboutMeThirdParagraph"
      />

      <p
        class="mt-5"
        v-html="getTranslation.aboutMeFourthParagraph"
      />

      <p
        class="mt-5"
        v-html="getTranslation.aboutMeFifthParagraph"
      />

      <p
        class="font-bold text-xl mt-10 text-center"
        v-html="getTranslation.aboutMeTechnologiesParagraph"
      />
      <p class="font-extrabold text-primary text-sm mt-6 lg:leading-none text-center">
        HTML5 - CSS3 - JAVASCRIPT - VUEJS - REACTJS - NATIVESCRIPT
      </p>
      <p class="font-extrabold text-primary text-sm mt-5 lg:leading-none text-center">
        LARAVEL - PHP - WORDPRESS - OCTOBERCMS - SQL
      </p>

      <div class="mt-10">
        <a
          v-tooltip="getTranslation.aboutMeResumeTooltip"
          href="/assets/PetrovicMilosCV-12-01-2022.pdf"
          class="btn px-8 py-2 bg-primary rounded-full
          shadow-lg hover:shadow-none flex items-center justify-center w-32 m-auto"
          rel="noreferrer"
          download
        >
          <div class="btn text-xs uppercase font-extrabold tracking-wider">
            {{ getTranslation.aboutMeResumeText }}
          </div>
          <img
            src="/assets/icons/download.svg"
            alt="download"
            class="ml-2"
            width="16"
          >
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'AboutMe',
    computed: {
      ...mapGetters(['getTranslation']),
    }
  }
</script>

<style scoped>
  .btn {
    color: #fff;
    transition: all .3s ease-in-out;
  }
</style>
