<template>
  <div class="flex flex-wrap justify-between mb-20">
    <div class="w-full text-center mb-10 text-xl font-bold">
      <slot name="title" />
    </div>
    <div
      class="w-full lg:w-1/2 px-4"
      :class="{ 'lg:order-2': reverse }"
    >
      <slot name="image" />
    </div>
    <div class="w-full lg:w-1/2 px-4">
      <slot name="description" />
      <div class="flex mt-5">
        <a
          v-if="visit.length"
          :href="visit"
          target="_blank"
          class="mr-3 w-24 flex justify-center items-center bg-primary py-2 rounded-full"
        >
          <img
            src="/assets/icons/link.svg"
            alt="link"
            width="16"
          >
          <div class="text-xs font-bold uppercase text-white tracking-wide ml-2">
            Visit
          </div>
        </a>
        <a
          v-if="source.length"
          :href="source"
          target="_blank"
          class="flex justify-center items-center w-32 justify-center py-2
          border border-solid border-black rounded-full"
        >
          <img
            src="/assets/icons/github.svg"
            alt="github"
            width="16"
          >
          <div class="text-xs font-bold uppercase tracking-wide ml-2 ">
            Source
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PortfolioItem',
    props: {
      reverse: {
        type: Boolean,
        default: () => false
      },
      visit: {
        type: String,
        default: () => ''
      },
      source: {
        type: String,
        default: () => ''
      },
    }
  }
</script>

<style scoped>
  p {
    margin-bottom: 16px;
    font-size: 16px;
  }

  .text-white {
    color: #fff;
  }

  a {
    transition: all .3s ease-in-out;
  }

  a:hover {
    transform: scale(1.1);
  }

  a.bg-primary img {
    filter: invert(1);
  }

  [data-theme="dark"] a img {
    filter: invert(1);
  }
</style>
