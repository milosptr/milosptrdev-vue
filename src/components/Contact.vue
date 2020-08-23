<template>
  <section id="contact" class="container m-auto py-10 lg:py-20 text-center">
    <h2 class="font-bold uppercase text-center text-3xl text-primary">
      Contact
    </h2>
    <p>
      If you want to <strong>talk</strong>, you can <strong>find me</strong> at
    </p>
    <div class="mt-16">
      <a href="mailto:milosptr@hotmail.com" class="font-bold text-xl tracking-wide">
        milosptr@hotmail.com
      </a>
    </div>
    <div class="flex justify-center mt-5">
      <div class="w-full sm:w-1/3 lg:w-1/4 flex justify-around items-center">
        <a
          href="https://www.linkedin.com/in/petrovic-milos/"
          class="flex justify-center items-center w-12 h-12 border-none border-solid border-black rounded-full"
          target="_blank"
        >
          <img
            src="/assets/icons/linkedin.svg"
            alt="linkedin"
            width="32"
            height="32"
          >
        </a>
        <a
          href="https://github.com/milosptr"
          class="flex justify-center items-center w-12 h-12 border-none border-solid border-black rounded-full"
          target="_blank"
        >
          <img
            src="/assets/icons/github.svg"
            alt="github"
            width="32"
            height="32"
          >
        </a>
        <a
          href="https://www.instagram.com/somizmatika/"
          class="flex justify-center items-center w-12 h-12 border-none border-solid border-black rounded-full"
          target="_blank"
        >
          <img
            src="/assets/icons/instagram.svg"
            alt="instagram"
            width="32"
            height="32"
          >
        </a>
        <a
          href="https://www.facebook.com/shomyp"
          class="flex justify-center items-center w-12 h-12 border-none border-solid border-black rounded-full"
          target="_blank"
        >
          <img
            src="/assets/icons/facebook.svg"
            alt="facebook"
            width="32"
            height="32"
          >
        </a>
      </div>
    </div>
    <div class="text-xs font-bold mt-20">
      COPYRIGHT © {{ getYear }}, MILOŠ
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Contact',
    computed: {
      getYear() {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style scoped>
  [data-theme="dark"] img {
    filter: invert(1);
  }

  img {
    transition: all .3s ease-in-out;
  }

  img:hover {
    transform: scale(1.1)
  }
</style>
