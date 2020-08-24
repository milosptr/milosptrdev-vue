<template>
  <section id="about" class="container m-auto py-10 lg:py-20 lg:text-center">
    <h2 class="font-bold uppercase text-center text-3xl text-primary">
      About me
    </h2>
    <p class="text-center">
      If you’re <strong>wondering</strong> who <strong>I am</strong>…
    </p>

    <div class="px-4 sm:px-8 xl:px-20">
      <p class="mt-10">
        I’m <strong>Miloš</strong>, a 23 years old self-taught <strong>Full Stack developer</strong>, from Serbia.
      </p>
      <p class="mt-5">
        After my high school, I got a job as a web developer, where I stayed 1 year. Within this year I've created over
        100 simple HTML & CSS websites following given designs, developed up to 15 WordPress websites
        (few with custom theme and others were purchased). After 1 year working here I have realized that I’m
        <strong>stuck</strong>, <strong>sinking</strong> and <strong>not learning anything</strong> new.
      </p>

      <p class="mt-5">
        In March 2018, my ex-colleague found me a new job at his firm where I could start going forward and
        learn some new technologies. I also stayed here 1 year and start exploring JavaScript and PHP world. I have
        learned many things building a mobile web app in PHP and a website with custom backend. Long story short,
        after that, there were no new projects and I was stuck again.
      </p>

      <p class="mt-5">
        I decided it was <strong>time for a change</strong>, so I started studying ReactJS in my free time.
        I fell <strong>in love with JavaScript and React</strong>. Colleague and I got an idea to build a
        <strong>flight booking engine</strong>, so I started progressively learning Angular 1 and built the whole
        <strong>booking system with online payment</strong> in Angular 1. As I got better in JavaScript I figure that
        Angular 1 was a <strong>bad idea</strong>, so I switched again back to ReactJS and start rebuilding the
        whole system again.
      </p>

      <p class="mt-5">
        I got a <strong>job offer</strong> where I could finally start <strong>working on myself</strong> and
        I took a chance in April 2019. Currently I am working here and I can’t express
        <strong>how much I learned so far</strong>. During this little time, I changed my mindset to become a
        <strong>Full Stack Developer</strong>. I started actively working in Laravel, VueJS
        and NativeScript ( app development ).
      </p>

      <p class="font-bold text-xl mt-10 text-center">
        My current stack of languages/technologies is:
      </p>
      <p class="font-extrabold text-primary text-sm mt-6 lg:leading-none text-center">
        HTML5 - CSS3 - JAVASCRIPT - VUEJS - REACTJS - NATIVESCRIPT
      </p>
      <p class="font-extrabold text-primary text-sm mt-5 lg:leading-none text-center">
        LARAVEL - PHP - WORDPRESS - OCTOBERCMS - SQL
      </p>

      <div class="mt-10">
        <a
          v-tooltip="'Download my resume'"
          href="/assets/PetrovicMilosCV-23-8-2020.pdf"
          class="btn px-8 py-2 bg-primary rounded-full
          shadow-lg hover:shadow-none flex items-center justify-center w-32 m-auto"
          rel="noreferrer"
          download
        >
          <div class="btn text-xs uppercase font-extrabold tracking-wider">
            Resume
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
  export default {
    name: 'AboutMe'
  }
</script>

<style scoped>
  .btn {
    color: #fff;
    transition: all .3s ease-in-out;
  }
</style>
