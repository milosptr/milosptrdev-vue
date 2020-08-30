<template>
  <nav id="nav">
    <div class="hidden lg:block fixed left-0 top-0 w-24 h-screen">
      <div class="flex flex-col justify-between items-center h-screen bg-nav">
        <div class="logo w-full flex items-center justify-center h-24">
          M
        </div>
        <div
          class="flex flex-col justfy-center items-center"
        >
          <div
            v-for="nav in getTranslation.navigation"
            :key="nav.id"
            v-tooltip.right="nav.tooltip"
            class="p-3 cursor-pointer nav-link"
            :class="{ 'mb-3': nav.id !== getTranslation.navigation.length - 1 }"
            @click="scrollToSection(nav.name)"
          >
            <img
              :src="`/assets/icons/${nav.name.toLowerCase()}.svg`"
              width="24"
              height="24"
              :alt="nav.name"
            >
          </div>
        </div>
        <div
          class="w-full flex flex-col justify-around items-center h-24 px-3"
        >
          <div
            v-tooltip.right="currentLanguageText"
            class="w-full flex justify-between items-center"
            @click="setLanguage()"
          >
            <img
              src="assets/icons/english.svg"
              alt="english"
              width="24"
              :class="{'opacity-1': getLanguage === 'EN'}"
            >
            <img
              src="/assets/icons/arrow-right.svg"
              alt="arrow-right"
              width="18"
              class="language-arrow"
              :class="{'rotate-180': getLanguage === 'DE'}"
            >
            <img
              src="assets/icons/german.svg"
              alt="english"
              width="24"
              :class="{'opacity-1': getLanguage === 'DE'}"
            >
          </div>
          <div
            v-tooltip.right="getNightMode ? 'Light' : 'Night'"
            class="w-full flex justify-between items-center"
            @click="setNightMode()"
          >
            <img
              :src="`/assets/icons/${getNightMode ? 'day' : 'day-active'}.svg`"
              alt="day"
              width="24"
              class="light-mode-icon"
            >
            <img
              src="/assets/icons/arrow-right.svg"
              alt="arrow-right"
              width="18"
              class="night-mode-arrow"
            >
            <img
              :src="`/assets/icons/${getNightMode ? 'night-active' : 'night'}.svg`"
              alt="night"
              width="20"
              :class="{ 'invert-dark': getNightMode }"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="lg:hidden fixed top-0 left-0 w-full bg-white shadow-lg z-10">
      <div
        class="flex justify-between items-center w-full py-4"
      >
        <div
          class="ml-5 font-extrabold text-xl"
        >
          M
        </div>
        <div class="flex">
          <div
            class="mr-5"
            @click="setLanguage"
          >
            <img
              :src="`/assets/icons/${ getLanguage == 'DE' ? 'english' : 'german' }.svg`"
              alt="language"
              width="24"
              class="opacity-1"
            >
          </div>
          <div
            class="mr-5"
            @click="setNightMode()"
          >
            <img
              :src="`/assets/icons/${ getNightMode ? 'day' : 'night' }.svg`"
              alt="theme"
              width="20"
              class="light-mode-icon"
            >
          </div>
          <div
            class="mr-5 select-none"
            @click="showNavigation = true"
          >
            <img
              src="/assets/icons/menu.svg"
              alt="menu"
              width="24"
              class="light-mode-icon"
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed w-full h-screen bg-white z-10 flex flex-col justify-around items-center py-24 select-none"
      :class="[ showNavigation ? 'open-navigation' : 'hidden']"
    >
      <div
        class="absolute top-0 right-0 mr-6 mt-6 select-none"
        @click="showNavigation = false"
      >
        <img
          src="/assets/icons/close.svg"
          alt="close"
          class="light-mode-icon"
          width="24"
        >
      </div>
      <div
        v-for="nav in getTranslation.navigation"
        :key="nav.id"
        v-tooltip.right="nav.tooltip"
        class="nav-link flex"
        :class="{ '': nav.id !== getTranslation.navigation.length - 1 }"
        @click="scrollToSection(nav.name)"
      >
        <div class="text-xl">
          {{ nav.tooltip }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'Navigation',
    data: () => ({
      navigation: [
        { id: 0, active: false, name: 'Home' },
        { id: 1, active: false, name: 'About' },
        { id: 2, active: false, name: 'Services' },
        { id: 3, active: false, name: 'Portfolio' },
        { id: 4, active: false, name: 'Contact' },
      ],
      showNavigation: false,
    }),
    computed: {
      ...mapGetters(['getNightMode', 'getTranslation', 'getLanguage']),
      currentLanguageText() {
        return this.getLanguage === 'DE' ? 'Switch to English' : 'Switch to German'
      },
    },
    mounted() {
      this.setNightModeBasedOnTime()
    },
    methods: {
      ...mapActions(['setNightMode']),
      ...mapMutations(['setTranslation']),
      scrollToSection(name) {
        const id = name.toLowerCase()
        if(document.getElementById(id)) {
          const sectionOffset = document.getElementById(id).offsetTop
          window.scrollTo(0, sectionOffset)
        }
        this.showNavigation = false
      },
      setNightModeBasedOnTime() {
        const currentHour = new Date().getHours()
        if(currentHour >= 19 || currentHour <= 6 && !this.getNightMode) {
          this.setNightMode()
        }
      },
      setLanguage() {
        if(this.getLanguage === 'DE') {
          this.setTranslation('EN')
          return
        }
        this.setTranslation('DE')
      }
    }
  }
</script>

<style scoped>
  [data-theme="light"] .bg-nav {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  [data-theme="dark"] .bg-nav {
    background: #25272A;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  [data-theme="dark"] .bg-white {
    background: #25272A;
  }

  [data-theme="dark"] .nav-link img,
  [data-theme="dark"] .night-mode-arrow,
  [data-theme="dark"] .light-mode-icon,
  [data-theme="dark"] .language-arrow {
    filter: invert(1);
  }

  .logo {
    background: #eee;
    font-family: "Montserrat", sans-serif;
    font-size: 52px;
    font-weight: 900;
  }

  [data-theme="dark"] .logo {
    background: #1e1f21;
  }

  img {
    transition: all .3s ease-in-out;
    opacity: .6;
    cursor: pointer;
  }

  .nav-link:hover img {
    transform: scale(1.2)
  }

  .night-mode-arrow {
    transition: all .3s ease-in-out;
  }

  [data-theme="dark"] .night-mode-arrow {
    transform: rotate(-180deg);
  }

  body .opacity-1 {
    opacity: 1;
  }

  .rotate-180 {
    transform: rotate(-180deg);
  }

</style>
