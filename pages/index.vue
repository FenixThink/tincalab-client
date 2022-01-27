<i18n>
{
  "en": {
    "grow_business": "Grow your business",
    "next_level": "To next level",
    "our_clients": "Our clients",
    "main_description": "Write us or call us to talk about the needs and weaknesses of your company and how we can turn them into strengths.",
    "contact_us": "Contact Us",
    "our_projects": "Our projects",
    "loyalty": "We present the companies that have trusted us and with whom we have established a value relationship, nurturing each other and growing together.",
    "feedback_title": "Feedbacks",
    "feedback_description": "This is what our clients and those who know our work think of us.",
    "blogs_description": "Blogs are a great method to increase traffic and generate leads. Make a profit. Get compensated for your efforts.",
    "blogs_button": "View all"
  },
  "es": {
    "grow_business": "Lleva tu empresa",
    "next_level": "Al siguiente nivel",
    "our_clients": "Nuestros clientes",
    "main_description": "Escríbenos o llámanos para hablar de las necesidades y debilidades de tu empresa y como podemos convertirlas en fortalezas.",
    "contact_us": "Contáctanos",
    "our_projects": "Nuestros proyectos",
    "loyalty": "Te presentamos las empresas que han confiado en nosotros y con quienes hemos establecido una relacion de valor nutriendonos de forma mutua y creciendo juntos.",
    "feedback_title": "Lo que nuestros clientes piensan",
    "feedback_description": "Esto es lo que nuestro clientes y quienes conocen nuestro trabajo piensan de nosotros",
    "blogs_description": "Los blogs son un gran método para aumentar el tráfico y generar clientes potenciales. Obtenga una ganancia. Reciba una compensación por sus esfuerzos.",
    "blogs_button": "Ver todos"
  }
}
</i18n>

<template>
  <div>
    <div v-if="loading" class="h-screen flex justify-center items-center">
      <LoadingComponent/>
    </div>
    <div v-if="!loading" class="relative">
      <div class="bg-white shadow-xl rounded-2xl inline-block p-5 fixed mt-50 z-50" style="top: 70px; right: 20px">
        <nuxt-link :to="switchLocalePath('es')">
          <div class="locale latam__locale"/>
        </nuxt-link>
        <hr class="my-1">
        <nuxt-link :to="switchLocalePath('en')">
          <div class="locale english__locale"/>
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
              <h1 class="title__h1">{{ $t('grow_business') }}</h1>
              <h2 class="title__h2 block">{{ $t('next_level') }}</h2>
              <p class="text-3xl my-6 xl:pr-40">{{ $t('main_description') }}</p>
              <ButtonComponent route="/contacto">
                {{ $t('contact_us') }}
              </ButtonComponent>
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
          {{ $t('our_clients') }}
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
        <h2 class="title__h2 text-black">{{ $t('our_projects') }}</h2>
        <p class="text-2xl lg:w-7/12 mt-3">
          {{ $t('loyalty') }}
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
        <h2 class="title__h2">{{ $t('feedback_title') }}</h2>
        <p class="text-2xl mt-3">
          {{ $t('feedback_description') }}
        </p>
        <div class="relative w-full h-full">
          <client-only>
            <carousel :scrollPerPage="true" :perPageCustom="[[480, 1], [768, 1]]" :autoplay="true">
              <slide v-for="(feedback, i) in feedbacks" :key="i">
                <FeedbackComponent :feedback="feedback" class="mt-5"/>
              </slide>
            </carousel>
          </client-only>
        </div>
      </section>
      <section class="flex flex-col items-center container__ mb-10">
        <h2 class="title__h2">
          Blogs
        </h2>
        <p class="text-2xl mt-3">{{ $t('blogs_description') }}</p>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-3">
          <BlogCardComponent/>
          <BlogCardComponent/>
          <BlogCardComponent/>
        </div>
        <nuxt-link class="blog__button text-2xl text-center text-white font-bold p-3 mt-3" :to="localePath('/blog')">
          {{ $t('blogs_button') }}
        </nuxt-link>
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
.blog__button {
  background: linear-gradient(112.77deg, #c381db 0%, #4e92f9 100%);
  border-radius: 8px;
}

.locale {
  transition: all .2s ease-in-out;
}

.locale:hover {
  transition: all .2s ease-in-out;
  transform: scale(1.1);
}

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
