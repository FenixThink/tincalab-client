<template>
  <div>
    <div v-if="loading" class="h-screen flex justify-center items-center">
      <LoadingComponent />
    </div>
    <div v-if="!loading" class="container__ flex flex-col items-center mt-20">
      <section class="flex flex-col items-center">
        <h1 class="title__h2 text-center">¿Que hacemos?</h1>
        <p class="text-2xl w-full container__ text-center mt-5">
          Creemos en las empresas y tenemos el objetivo de potenciarlas
          llevandolas a la cima, hemos diseñado servicios y procesos para llevar
          tu marca, a su mejor versión.
        </p>
      </section>
      <section class="my-20">
        <div class="grid md:grid-cols-3 lg:grid-cols-3">
          <div v-for="(service, i) in services" :key="i" class="my-2">
            <ServiceCardComponent :service="service" />
          </div>
        </div>
      </section>
      <section class="flex flex-col items-center">
        <h1 class="title__h2 text-center">¿Como podemos ayudarte?</h1>
        <p class="text-2xl w-full container__ text-center mt-5">
          Nuestra mision es ayudar a las empresas a explorar y explotar su
          potencial por ello hemos diseñado servicios que nos permitan explorar
          y explotar las cualidades de tu empresa.
        </p>
      </section>
      <section class="my-20">
        <div class="grid lg:grid-cols-3">
          <div
            v-for="(microservice, i) in microservices"
            :key="i"
            class="flex flex-col items-center p-10"
          >
            <img
              width="100"
              :src="'https://api.tincalab.com' + microservice.image.url"
              :alt="microservice.name"
            />
            <h2 class="t-regular text-center font-bold mt-5">
              {{ microservice.name }}
            </h2>
            <p class="t-regular text-center mt-5">
              {{ microservice.description }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  layout: 'slim',
  data: () => ({
    loading: true,
  }),
  computed: {
    services() {
      return this.$store.state.services
    },
    microservices() {
      return this.$store.state.microservices
    },
  },
  async mounted() {
    await this.$store.dispatch('getServices')
    await this.$store.dispatch('getMicroservices')
    this.loading = false
  },
}
</script>

<style scoped></style>
