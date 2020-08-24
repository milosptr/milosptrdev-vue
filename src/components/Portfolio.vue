<template>
  <section id="portfolio" class="container m-auto py-10 lg:py-20">
    <h2 class="font-bold uppercase text-center text-3xl text-primary text-center">
      Portfolio
    </h2>
    <p class="text-center">
      Check <strong>what</strong> I've been doing <strong>lately</strong>
    </p>

    <div class="px-4 sm:px-8 xl:px-20 mt-20 portfolio-container">
      <PortfolioItem>
        <template v-slot:title>
          Ultimate Movers Software
        </template>
        <template v-slot:image>
          <v-lazy-image
            src="/assets/portfolio/ultimatemovers.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="ultimatemovers"
          />
        </template>
        <template v-slot:description>
          <p>
            Software solution for an internal team of more than 100 sales-persons that manage leads, claims, move
            inventories, contracting, servicing, charging, team communicating, video surveying, and many more features.
            All that from a office in Belgrade, Serbia.
          </p>
          <p>
            Maintaining and managing current web progressive application written in Laravel & Vue.js to achieve
            desired business outcomes. Building android and iOS app in NativeScript for managers who are using our
            WPA on their mobile phones.
          </p>
          <p>
            <span class="text-xs font-extrabold tracking-wide">
              LARAVEL & VUEJS & SQL
            </span>
          </p>
        </template>
      </PortfolioItem>
      <PortfolioItem
        :reverse="true"
        visit="https://fmk.singidunum.ac.rs/"
      >
        <template v-slot:title>
          The Faculty of Media and Communications
        </template>
        <template v-slot:image>
          <v-lazy-image
            src="/assets/portfolio/fmk.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="fmk"
          />
        </template>
        <template v-slot:description>
          <p>
            FMK is website for Serbian Faculty that is a part of Singidunum University. It was build for people who
            wants to explore all the courses of this Faculty, get to know the subjects and professors. It was also
            build for students who already attend this Faculty.
          </p>
          <p>
            The website is built from scratch in WordPress, with custom theme and two custom search engines.
            There is a lot custom PHP and JS code written for their specific requirements.
          </p>
          <p>
            <span class="text-xs font-extrabold tracking-wide">
              CUSTOM WORDPRESS THEME & VANILA JAVASCRIPT & PHP
            </span>
          </p>
        </template>
      </PortfolioItem>
      <PortfolioItem visit="https://www.istocnevesti.com/">
        <template v-slot:title>
          East Serbian News (Istocne VESTI)
        </template>
        <template v-slot:image>
          <v-lazy-image
            src="/assets/portfolio/istocnevesti.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="istocnevesti"
          />
        </template>
        <template v-slot:description>
          <p>
            Istocne VESTI is an Serbian news-based portal based in East Serbia. Since I'm the owner of this
            website, I have decided to refresh the look of it and give our public a fast, easy to read and
            beautiful website.
          </p>
          <p>
            I have added new functionality for our readers to become reporters by submitting news that they
            witnessed. Also, there two looks of this website, it has light and dark mode.
          </p>
          <p>
            <span class="text-xs font-extrabold tracking-wide">
              WORDPRESS & THEME DESIGN
            </span>
          </p>
        </template>
      </PortfolioItem>
      <PortfolioItem
        visit="https://www.jungo.devlabagency.com/"
        source="https://github.com/milosptr/jungo_website"
        :reverse="true"
      >
        <template v-slot:title>
          Jungo Digital Solutions
        </template>
        <template v-slot:image>
          <v-lazy-image
            src="/assets/portfolio/jungo.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="jungo"
          />
        </template>
        <template v-slot:description>
          <p>
            This is re-uploaded website on my personal server. It was an agency website that I worked for 1 year.
          </p>
          <p>
            This is my first big work in PHP and it requires building the whole website with a custom backend CMS where
            agency can add/remove team members, add new projects to portfolio etc. Since this was my first PHP project,
            there was many challenges while I was building it, for example building email sending form or structuring
            php files that repeats on the every page, etc.
          </p>
          <p>
            <span class="text-xs font-extrabold tracking-wide">
              HTML & JS & PHP
            </span>
          </p>
        </template>
      </PortfolioItem>
      <PortfolioItem
        visit="https://www.marwear.ca/"
      >
        <template v-slot:title>
          MarWear Canada
        </template>
        <template v-slot:image>
          <v-lazy-image
            src="/assets/portfolio/marwearca.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="marwear"
          />
        </template>
        <template v-slot:description>
          <p>
            MarWear Canada is an Icelandic specialized in the development, design, and production of
            workwear that suits perfectly Icelandic conditions.
          </p>
          <p>
            It was built in WordPress CMS custom theme following a given design. It's an online store but instead of
            purchasing products online, you can locate it in the nearby store.
          </p>
          <p>
            <span class="text-xs font-extrabold tracking-wide">
              WORDPRESS
            </span>
          </p>
        </template>
      </PortfolioItem>
      <PortfolioItem
        visit="https://www.najletovi.com/"
        :reverse="true"
      >
        <template v-slot:title>
          Najletovi
        </template>
        <template v-slot:image>
          <v-lazy-image
            src="/assets/portfolio/najletovi.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="najletovi"
          />
        </template>
        <template v-slot:description>
          <p>
            Najletovi is Serbian flight booking engine. I've used Angular for front end and PHP for back end.
          </p>
          <p>
            This web app uses Kiwi REST API for fetching flights and offers. Booking engine has few date options
            that you can search for (anytime, exact date, dates interval, days staying). I've added an option for
            tracking prices and there are 3 cron jobs a day that are checking price change. If there is change,
            you'll got email offer for your saved trip.
          </p>
          <p>
            It also has a payment system implemented via Zooz API. So customers can pay online by any credit card.
          </p>
          <p>
            <span class="text-xs font-extrabold tracking-wide">
              ANGULAR 1 & JAVASCRIPT & PHP & REACT
            </span>
          </p>
        </template>
      </PortfolioItem>
      <PortfolioItem
        source="https://github.com/milosptr/findMyBeerApp"
      >
        <template v-slot:title>
          Find My Beer App
        </template>
        <template v-slot:image>
          <v-lazy-image
            src="/assets/portfolio/findMyBeerApp.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="findMyBeerApp"
          />
        </template>
        <template v-slot:description>
          <p>
            I wanted to explore NativeScript, so I made little brand and start working on the app. The user can
            login or proceed as a guest. User will be redirected to home, where he can see listed bears fetched
            from Punk API. At the top there are bears with highest ABV and under are listed all bears.
          </p>
          <p>
            It has search page, where user can search for his fav beer. After choosing the beer, the user sees a
            single beer page, with beer info and like button.
          </p>
          <p>
            User can save beer in his profile by liking the chosen beer. It will be saved in App Storage and user
            can see all liked beers in the profile page subpage "Liked beers".
          </p>
          <p>
            <span class="text-xs font-extrabold tracking-wide">
              NATIVESCRIPT & VUEJS
            </span>
          </p>
        </template>
      </PortfolioItem>
      <PortfolioItem
        source="https://github.com/milosptr/octra"
        :reverse="true"
      >
        <template v-slot:title>
          One Click Travel
        </template>
        <template v-slot:image>
          <v-lazy-image
            src="/assets/portfolio/octra.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="octra"
          />
        </template>
        <template v-slot:description>
          <p>
            Octra is an online booking engine where you can easily book train, bus or flight ticket.
            It supports user login and registration.
          </p>
          <p>
            The idea is to save all user travels and data so he/she can easily see their booking summary or
            book next trip with just one click.
          </p>
          <p>
            Project is still on the go. The backend is managed by Laravel and the ReactJS is running on the front end.
          </p>
          <p>
            <span class="text-xs font-extrabold tracking-wide">
              LARAVEL & REACTJS
            </span>
          </p>
        </template>
      </PortfolioItem>
      <PortfolioItem source="https://github.com/milosptr/alphabet-reflex-game">
        <template v-slot:title>
          Alphabet Reflex Game
        </template>
        <template v-slot:image>
          <v-lazy-image
            src="/assets/portfolio/letter-game.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="letter-game"
          />
        </template>
        <template v-slot:description>
          <p>
            When user starts a game it should set off the counter that will randomly switch numbers between 1-26.
          </p>
          <p>
            Before starting user will have an option to switch between difficulties. User needs to input the
            letter that is mapped to the according number. If inputed letter matches the number that its mapped to,
            letter will change color to green. If inputed letter does not match or nothing is inputed, corresponding
            letter will turn red.
          </p>
          <p>
            Goal of the game is to match all the letters with corresponding numbers. Score in the top right
            corner should be updated automatically. 
          </p>
          <p>
            <span class="text-xs font-extrabold tracking-wide">
              HTML & CSS & JS
            </span>
          </p>
        </template>
      </PortfolioItem>
    </div>
  </section>
</template>

<script>
  import PortfolioItem from './PortfolioItem'

  export default {
    name: 'Portfolio',
    components: {
      PortfolioItem
    },
  }
</script>

<style scoped>

</style>
