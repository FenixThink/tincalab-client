<template>
  <div>
    <div v-if="loading" class="h-screen flex justify-center items-center">
      <Loading/>
    </div>
    <div v-if="!loading" class="relative">
      <div class="bg-white rounded-2xl inline-block p-5 fixed m-5">
        <nuxt-link :to="localePath('/', 'es')">
          <div class="latam__locale"/>
        </nuxt-link>
        <hr class="my-1">
        <nuxt-link :to="localePath('/', 'en')">
          <div class="english__locale"/>
        </nuxt-link>
      </div>
      <section>
        <div class="grid grid-cols-1">
          <figure
            class="relative lg:hidden flex flex-col items-center justify-center"
          >
            <picture class="media absolute w-full"/>
            <picture class="media__background"/>
          </figure>
          <section
            class="container__ flex items-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2"
          >
            <article>
              <h1 class="title__h1">Lleva tu empresa</h1>
              <h2 class="title__h2 block">Al siguiente nivel.</h2>
              <p class="text-3xl my-6 xl:pr-40">
                Escríbenos o llámanos para hablar de las necesidades y
                debilidades de tu empresa y como podemos convertirlas en
                fortalezas.
              </p>
              <ButtonComponent route="contactanos" title="Contactanos"/>
            </article>
            <figure
              class="hidden sm:hidden md:hidden lg:flex relative flex-col items-center justify-center"
            >
              <picture class="media absolute w-full"/>
              <picture class="media__background"/>
            </figure>
          </section>
        </div>
      </section>
      <section class="flex flex-col justify-center items-start container__">
        <h1 class="title__h3 my-10 self-center lg:self-start lg:mt-0 lg:mb-24">
          Nuestros clientes
        </h1>
        <div class="flex flex-col w-full">
          <div class="line__element w-full"/>
          <div class="flex flex-row justify-center items-center my-5">
            <div v-for="(customer, i) in customers" :key="i">
              <CustomersComponent :customer="customer" class="px-2 lg:mx-20 w-full"/>
            </div>
          </div>
          <div class="line__element w-full"/>
        </div>
      </section>
      <section
        class="flex flex-col justify-center items-center mt-20 container__"
      >
        <h2 class="title__h2 text-black">Nuestros proyectos</h2>
        <p class="text-2xl lg:w-7/12 mt-3">
          Te presentamos las empresas que han confiado en nosotros y con quienes
          hemos establecido una relacion de valor nutriendonos de forma mutua y
          creciendo juntos.
        </p>
        <div class="lg:max-h-screen w-full masonry__background p-9 shadow-md">
          <div
            class="box-border max-w-full mx-auto md:masonry before:box-inherit after:box-inherit"
          >
            <div
              v-for="(project, i) in projects"
              :key="i"
              class="my-6 break-inside"
            >
              <img
                :src="'https://api.tincalab.com' + project.image.url"
                :alt="project.title"
                class="rounded-lg w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        class="flex flex-col justify-center items-center my-20 container__"
      >
        <h2 class="title__h2">Lo que nuestros clientes piensan</h2>
        <p class="text-2xl mt-3">
          Esto es lo que nuestro clientes y quienes conocen nuestro trabajo
          piensan de nosotros
        </p>
        <div class="relative w-full h-full">
          <no-ssr>
            <carousel :scrollPerPage="true" :perPageCustom="[[480, 1], [768, 1]]" :autoplay="true">
              <slide v-for="(feedback, i) in feedbacks" :key="i">
                <FeedbackComponent :feedback="feedback" :style="{'height': '25rem'}" class="mt-5"/>
              </slide>
            </carousel>
          </no-ssr>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    loading: true,
  }),
  computed: {
    customers() {
      return this.$store.state.customers
    },
    projects() {
      return this.$store.state.projects
    },
    feedbacks() {
      return this.$store.state.feedbacks
    },
  },
  async mounted() {
    await this.$store.dispatch('getCustomers')
    await this.$store.dispatch('getFeedbacks')
    await this.$store.dispatch('getProjects')
    this.loading = !this.loading
  },
}
</script>

<style>
.latam__locale {
  background: url("~/static/latam-flag.svg") no-repeat center;
  background-size: cover;
  width: 30px;
  height: 20px;
}

.english__locale {
  background: url("~/static/english-flag.svg") no-repeat center;
  background-size: cover;
  width: 30px;
  height: 20px;
}

.masonry__background {
  background: linear-gradient(
    137.73deg,
    rgba(255, 255, 255, 0) 4.16%,
    rgba(255, 255, 255, 0.5) 102.02%
  );
  border-radius: 25px;
}

@media screen and (max-width: 640px) {
  .media__background {
    background-image: url('/media-background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 600px;
  }

  .media {
    background-image: url('/media.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 300px;
    height: 300px;
  }
}

@media (min-width: 641px) and (max-width: 767px) {
  .media__background {
    background-image: url('/media-background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 700px;
  }

  .media {
    background-image: url('/media.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 300px;
    height: 300px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .media__background {
    background-image: url('/media-background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 650px;
  }

  .media {
    background-image: url('/media.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 300px;
    height: 300px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .media__background {
    background-image: url('/media-background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 370px;
  }

  .media {
    background-image: url('/media.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 200px;
    height: 200px;
  }
}

@media (min-width: 1200px) {
  .media__background {
    background-image: url('/media-background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 600px;
    height: 600px;
  }

  .media {
    background-image: url('/media.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 300px;
    height: 300px;
  }
}
</style>
