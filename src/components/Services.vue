<template>
  <section id="services" class="container m-auto py-10 lg:py-20">
    <h2 class="font-bold uppercase text-center text-3xl text-primary text-center">
      My services
    </h2>
    <p class="text-center">
      If you’re <strong>wondering</strong> what <strong>I do</strong>…
    </p>
    <div class="px-1 sm:px-8 mt-10 flex flex-wrap">
      <ServicesItem
        v-for="service in services"
        :key="service.id"
        :service="service"
      />
    </div>
  </section>
</template>

<script>
  import ServicesItem from './ServicesItem'

  export default {
    name: 'Services',
    components: { ServicesItem },
    data: () => ({
      services: [
        { id: 0, title: 'Front End', description: 'Helping start-ups, small businesses and agencies achieve high ' +
          'quality websites and exeptional user experience. Technologies I am most experienced with are HTML, CSS' +
          ', JavaScript, VueJS, React and NativeScript (for mobile applications).' },
        { id: 1, title: 'Back End', description: 'It\'s not just about making a server, application, and database ' +
          'communicate with each other. It\'s about building a product that works seamlessly, meet market needs ' +
          'and creating an enjoyable user experience that earns your clients loyalty.' },
        { id: 2, title: 'UI/UX', description: 'You want the website to look exactly how designers initially ' +
          'designed it? I am responsible for applying interactive and visual design principles on your' +
          ' websites and web applications for a positive and cohesive user experience. ' },
        { id: 3, title: 'API development', description: 'Creating interfaces between different systems to share ' +
          'data is a modern requirement that the development of application programming interfaces ' +
          '(APIs) and web services fulfils.' },
        { id: 4, title: 'WordPress or Custom CMS', description: 'You need a website that you can easily ' +
          'edit and manage such as blog website, portfolio or even a big online shop? I will build you a ' +
          'WordPress or Custom CMS unique website that suits your needs.' },
        { id: 5, title: 'Deployment', description: 'Deploying— or pushing new code to a server— is an integral ' +
          'part of a developer’s daily workflow. After deployment, it needs to be connected with Google search ' +
          'and pass all page speed tests.' },
      ]
    })
  }
</script>

<style scoped>

</style>
