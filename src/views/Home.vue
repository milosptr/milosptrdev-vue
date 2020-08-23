<template>
  <div class="site-content lg:ml-24 xl:ml-0">
    <Hero />
    <AboutMe />
    <Services />
    <Certificates />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
  import Hero from '../components/Hero.vue'
  import AboutMe from '../components/AboutMe'
  import Services from '../components/Services'
  import Portfolio from '../components/Portfolio'
  import Contact from '../components/Contact'
  import Certificates from '../components/Certificates'

  export default {
    name: 'Home',
    components: {
      Certificates,
      Contact,
      Portfolio,
      Services,
      AboutMe,
      Hero,
    },
  }
</script>
