<template>
  <section id="portfolio" class="container m-auto py-10 lg:py-20">
    <h2 class="font-bold uppercase text-center text-3xl text-primary text-center">
      {{ getTranslation.portfolioTitle }}
    </h2>
    <p
      class="text-center"
      v-html="getTranslation.portfolioSubtitle"
    />

    <div class="px-4 sm:px-8 xl:px-20 mt-20 portfolio-container">
      <PortfolioItem>
        <template #title>
          Ultimate Movers Software
        </template>
        <template #image>
          <v-lazy-image
            src="/assets/portfolio/ultimatemovers.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="ultimatemovers"
          />
        </template>
        <template #description>
          <div v-html="getTranslation.ultimateMoversPortfolioDescription" />
        </template>
      </PortfolioItem>
      <PortfolioItem
        :reverse="true"
        visit="https://fmk.singidunum.ac.rs/"
      >
        <template #title>
          {{ getTranslation.fmkPortfolioTitle }}
        </template>
        <template #image>
          <v-lazy-image
            src="/assets/portfolio/fmk.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="fmk"
          />
        </template>
        <template #description>
          <div v-html="getTranslation.fmkPortfolioDescription" />
        </template>
      </PortfolioItem>
      <PortfolioItem visit="https://www.istocnevesti.com/">
        <template #title>
          <div v-html="getTranslation.istocnePortfolioTitle" />
        </template>
        <template #image>
          <v-lazy-image
            src="/assets/portfolio/istocnevesti.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="istocnevesti"
          />
        </template>
        <template #description>
          <div v-html="getTranslation.istocnePortfolioDescription" />
        </template>
      </PortfolioItem>
      <PortfolioItem
        visit="https://www.jungo.devlabagency.com/"
        source="https://github.com/milosptr/jungo_website"
        :reverse="true"
      >
        <template #title>
          {{ getTranslation.jungoPortfolioTitle }}
        </template>
        <template #image>
          <v-lazy-image
            src="/assets/portfolio/jungo.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="jungo"
          />
        </template>
        <template #description>
          <div v-html="getTranslation.jungoPortfolioDescription" />
        </template>
      </PortfolioItem>
      <PortfolioItem
        visit="https://www.marwear.ca/"
      >
        <template #title>
          {{ getTranslation.marwearPortfolioTitle }}
        </template>
        <template #image>
          <v-lazy-image
            src="/assets/portfolio/marwearca.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="marwear"
          />
        </template>
        <template #description>
          <div v-html="getTranslation.marwearPortfolioDescription" />
        </template>
      </PortfolioItem>
      <PortfolioItem
        visit="https://www.najletovi.com/"
        :reverse="true"
      >
        <template #title>
          {{ getTranslation.najletoviPortfolioTitle }}
        </template>
        <template #image>
          <v-lazy-image
            src="/assets/portfolio/najletovi.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="najletovi"
          />
        </template>
        <template #description>
          <div v-html="getTranslation.najletoviPortfolioDescription" />
        </template>
      </PortfolioItem>
      <PortfolioItem
        source="https://github.com/milosptr/findMyBeerApp"
      >
        <template #title>
          {{ getTranslation.beerPortfolioTitle }}
        </template>
        <template #image>
          <v-lazy-image
            src="/assets/portfolio/findMyBeerApp.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="findMyBeerApp"
          />
        </template>
        <template #description>
          <div v-html="getTranslation.beerPortfolioDescription" />
        </template>
      </PortfolioItem>
      <PortfolioItem
        source="https://github.com/milosptr/octra"
        :reverse="true"
      >
        <template #title>
          {{ getTranslation.travelPortfolioTitle }}
        </template>
        <template #image>
          <v-lazy-image
            src="/assets/portfolio/octra.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="octra"
          />
        </template>
        <template #description>
          <div v-html="getTranslation.travelPortfolioDescription" />
        </template>
      </PortfolioItem>
      <PortfolioItem source="https://github.com/milosptr/alphabet-reflex-game">
        <template #title>
          {{ getTranslation.alphabetPortfolioTitle }}
        </template>
        <template #image>
          <v-lazy-image
            src="/assets/portfolio/letter-game.png"
            src-placeholder="/assets/img/placeholder.jpg"
            alt="letter-game"
          />
        </template>
        <template #description>
          <div v-html="getTranslation.alphabetPortfolioDescription" />
        </template>
      </PortfolioItem>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PortfolioItem from './PortfolioItem'

  export default {
    name: 'Portfolio',
    components: {
      PortfolioItem
    },
    computed: {
      ...mapGetters(['getTranslation']),
    }
  }
</script>

<style scoped>

</style>
