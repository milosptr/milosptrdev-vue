<template>
  <section id="home" class="container m-auto h-screen py-20 overflow-hidden">
    <div class="flex flex-wrap justify-center items-start lg:items-center h-screen px-4 sm:px-8 ">
      <div class="w-full lg:w-1/2 text-center sm:text-left">
        <p class="text-6xl">
          Hello ✌,
        </p>
        <p class="text-6xl">
          I'm
          <span class="text-6xl font-semibold text-primary">
            Miloš
          </span>
        </p>
        <div class="mt-2 flex justify-center sm:justify-start">
          A
          <div
            class="font-semibold mx-1"
            v-text="activeText"
          />
          Full Stack Web Developer
        </div>
      </div>
      <div class="hidden sm:block sm:w-full lg:w-1/2">
        <img
          :src="heroPersonImage"
          alt="milos-petrovic"
          class="hero-person"
        >
      </div>
    </div>
    <div
      class="w-full absolute bottom-0 left-0 cursor-pointer"
      @click="scrollDown()"
    >
      <div class="mouse-wrap w-full">
        <div class="mouse" />
        <p>Scroll Down</p>
      </div>
    </div>
    <!--  eslint-disable  -->
    <div class="hidden lg:block hero-shapes" id="scene" >
      <img class="shape1" data-depth="0.5" src="/assets/icons/jquery.svg" alt="jQuery" width="48" >
      <img class="shape2" data-depth="0.1" src="/assets/icons/wordpress.svg" alt="WordPress" width="32">
      <img class="shape3" data-depth="0.1" src="/assets/icons/php.svg" alt="PHP" width="32">
      <img class="shape4" data-depth="0.5" src="/assets/icons/nativescript.svg" alt="NativeScript" width="32">
      <img class="shape5" data-depth="0.2" src="/assets/icons/react.svg" alt="React" width="32">
      <img class="shape6" data-depth="0.1" src="/assets/icons/laravel.svg" alt="Laravel" width="48">
      <img class="shape7" data-depth="0.5" src="/assets/icons/sql.svg" alt="SQL" width="48">
      <img class="shape8" data-depth="0.2" src="/assets/icons/javascript.svg" alt="JavaScript" width="32">
      <img class="shape9" data-depth="0.1" src="/assets/icons/vuejs.svg" alt="VueJS" width="48">
    </div>
    <!--  eslint-enable  -->
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Hero',
    data: () => ({
      aboutText: [
        'committed',
        'self-taught',
        'passionate',
      ],
      activeText: 'committed',
      activeTextClass: 'transition-0'
    }),
    computed: {
      ...mapGetters(['getNightMode']),
      heroPersonImage() {
        if(this.getNightMode)
          return '/assets/img/milos-petrovic-dark.png'
        return '/assets/img/milos-petrovic.png'
      }
    },
    mounted() {
      this.rollingText()
      if(document.getElementById('scene')) {
        const scene = document.getElementById('scene')
        const parallaxInstance = new Parallax(scene)
      }
    },
    methods: {
      rollingText() {
        window.setInterval(() => {
          const index = this.aboutText.indexOf(this.activeText)
          this.activeText = index + 1 >= this.aboutText.length ? this.aboutText[0] : this.aboutText[index + 1]
        }, 2400)
      },
      scrollDown() {
        const section = document.getElementById('about')
        if(section) {
          window.scrollTo(0, section.offsetTop)
        }
      }
    }
  }
</script>

<style scoped>
  .hero-person {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
  }

</style>
