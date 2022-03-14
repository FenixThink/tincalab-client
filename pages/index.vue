<template>
  <div>
    <div v-if="loading" class="h-screen flex justify-center items-center">
      <LoadingComponent />
    </div>
    <div v-if="!loading" class="relative">
      <section>
        <div class="grid grid-cols-1 relative">
          <figure
            class=" top-0 relative z-auto lg:hidden flex flex-col items-center justify-center"
          >
            <picture class="media absolute w-full" />
            <picture class="media__background" />
          </figure>
          <section
            class="container__ flex items-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mt-0"
          >
            <article class="relative">
              <h1 class="title__h1">Lleva tu empresa</h1>
              <h2 class="title__h2 block my-1">Al siguiente nivel</h2>
              <p class="text-3xl my-6 xl:pr-40">
                Escríbenos o llámanos para hablar de las necesidades y
                debilidades de tu empresa y como podemos convertirlas en
                fortalezas.
              </p>
              <ButtonComponent route="/contacto"> Contáctanos </ButtonComponent>
            </article>
            <figure
              class="hidden sm:hidden md:hidden lg:flex relative flex-col items-center justify-center lg:pt-32"
            >
              <picture class="media bounce-1 absolute w-full" />
              <picture class="media__background" />
            </figure>
          </section>
        </div>
      </section>
      <section class="flex flex-col justify-center items-start container__">
        <h1
          class="title__h3 my-20 md:my-10 self-center lg:self-start lg:mt-0 lg:mb-24"
        >
          Nuestros clientes
        </h1>
        <div class="flex flex-col w-full">
          <div class="line__element w-full" />
          <div class="flex flex-row justify-center items-center my-5">
            <div v-for="(customer, i) in customers" :key="i">
              <CustomersComponent
                :customer="customer"
                class="px-2 lg:mx-20 w-full"
              />
            </div>
          </div>
          <div class="line__element w-full" />
        </div>
      </section>
      <section
        class="flex flex-col justify-center items-center mt-20 container__"
      >
        <h2 class="title__h2 text-black text-center">Nuestros proyectos</h2>
        <p class="text-2xl lg:w-7/12 my-5">
          Te presentamos las empresas que han confiado en nosotros y con quienes
          hemos establecido una relacion de valor nutriendonos de forma mutua y
          creciendo juntos.
        </p>
        <div>
          <div
            class="md:masonry-2-col lg:masonry-3-col box-border rounded-lg mx-auto before:box-inherit after:box-inherit shadow-md px-10 pb-5 md:pb-0 pt-10"
          >
            <div
              v-for="(project, i) in projects"
              :key="i"
              class="mb-10 break-inside"
            >
              <img
                :src="'https://api.tincalab.com' + project.image.url"
                :alt="project.title"
                class="rounded-3xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        class="flex flex-col justify-center items-center my-20 container__"
      >
        <h2 class="title__h2 text-center">Lo que nuestros clientes piensan</h2>
        <p class="text-2xl mt-3">
          Esto es lo que nuestro clientes y quienes conocen nuestro trabajo
          piensan de nosotros.
        </p>
        <div class="relative w-full h-full">
          <client-only>
            <carousel
              :scroll-per-page="true"
              :per-page-custom="[
                [480, 1],
                [768, 1],
              ]"
              :autoplay="true"
            >
              <slide v-for="(feedback, i) in feedbacks" :key="i">
                <FeedbackComponent :feedback="feedback" class="mt-5" />
              </slide>
            </carousel>
          </client-only>
        </div>
      </section>
      <section class="flex flex-col items-center container__ mb-32">
        <h2 class="title__h2">Blogs</h2>
        <p class="text-2xl mt-4 text-center">
          Los blogs son un gran método para aumentar el tráfico y generar
          clientes potenciales. Obtenga una ganancia. Reciba una compensación
          por sus esfuerzos.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-3">
          <div v-for="(blog, i) in blogs" :key="i" class="m-3">
            <BlogCardComponent :blog="blog"/>
          </div>
        </div>
        <div class="blog__button flex justify-center items-center mt-10">
          <nuxt-link
            class="blog__button--text text-2xl text-center text-white font-bold py-3 px-4 my-3"
            to="/blog"
          >
            <p class="m-0">Ver más</p>
          </nuxt-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
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
    blogs() {
      return this.$store.state.blogs.filter((blog) => blog.featured)
    },
  },
  async mounted() {
    await this.$store.dispatch('getCustomers')
    await this.$store.dispatch('getFeedbacks')
    await this.$store.dispatch('getProjects')
    await this.$store.dispatch('getBlogs')
    this.loading = !this.loading
  },
}
</script>

<style>
.blog__button {
  background: url('~/static/blog__button.png') no-repeat center;
  width: 200px;
  transition: all 0.2s ease;
}

.blog__button--text {
  background: -webkit-linear-gradient(
    93.35deg,
    #b983de -2.66%,
    #5991f7 105.06%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
}

.blog__button:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;
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
    background-image: url('/media.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 500px;
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
    height: 440px;
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

.bounce-1 {
  animation-name: bounce-1 !important;
  animation-timing-function: linear !important;
}

@keyframes bounce-1 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
