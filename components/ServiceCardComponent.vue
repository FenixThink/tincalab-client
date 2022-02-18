<template>
  <div
    class="card min-h-full shadow-md rounded-3xl px-5 md:px-10 lg:px-24 lg:py-10 flex flex-col items-center justify-between lg:mx-5 m-2"
  >
    <img
      class="w-1/3"
      :src="'https://api.tincalab.com' + service.image.url"
      :alt="service.name"
    />
    <div class="service pt-14">
      <h4 class="font-bold t-regular my-5 text-center">{{ service.name }}</h4>
      <p class="t-regular">{{ service.description }}</p>
    </div>
    <nuxt-link
      class="mt-5 mb-20 self-start text-blue-500 font-bold text-2xl"
      :to="'/blog/' + service.blog.hash"
      ><span class="flex items-center"
        >Leer mas<svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-arrow-right mx-2"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          /></svg></span
    ></nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ServiceCardComponent',
  props: {
    service: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped>
.card {
  background: linear-gradient(
    137.73deg,
    rgba(255, 255, 255, 0) 4.16%,
    rgba(255, 255, 255, 0.5) 102.02%
  );
  backdrop-filter: blur(60px);
}
</style>
