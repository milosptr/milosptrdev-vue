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
            v-for="nav in navigation"
            :key="nav.id"
            v-tooltip.right="nav.name"
            class="p-3 cursor-pointer nav-link"
            :class="{ 'mb-3': nav.id !== navigation.length - 1 }"
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
          v-tooltip.right="getNightMode ? 'Light' : 'Night'"
          class="w-full flex justify-between items-center h-24 px-3"
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
    <div class="lg:hidden fixed top-0 left-0 w-full bg-white shadow-lg z-10">
      <div
        class="flex justify-around items-center w-full py-4"
      >
        <div
          v-for="nav in navigation"
          :key="nav.id"
          v-tooltip.right="nav.name"
          class="nav-link"
          :class="{ '': nav.id !== navigation.length - 1 }"
          @click="scrollToSection(nav.name)"
        >
          <img
            :src="`/assets/icons/${nav.name}.svg`"
            width="24"
            height="24"
            :alt="nav.name"
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

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
    }),
    computed: {
      ...mapGetters(['getNightMode'])
    },
    mounted() {
      this.setNightModeBasedOnTime()
    },
    methods: {
      ...mapActions(['setNightMode']),
      scrollToSection(name) {
        const id = name.toLowerCase()
        if(document.getElementById(id)) {
          const sectionOffset = document.getElementById(id).offsetTop
          window.scrollTo(0, sectionOffset)
        }
      },
      setNightModeBasedOnTime() {
        const currentHour = new Date().getHours()
        if(currentHour >= 19 || currentHour <= 6 && !this.getNightMode) {
          this.setNightMode()
        }
      },
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
  [data-theme="dark"] .light-mode-icon {
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


</style>
