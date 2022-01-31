<template>
  <div class="bg-white h-full rounded-3xl shadow-md flex flex-col items-start card p-10 md:m-2 lg:m-2">
    <section class="card__header">
      <p class="card__header--type my-4" style="font-size: 1.55rem">
        {{ blog.type }}
      </p>
    </section>
    <section class="card__body">
      <hr class="text-gray-300 bg-gray-300 my-1">
      <nuxt-link
        :to="'/blog/' + blog.hash" class="title__h2 cursor-pointer"
                 style="font-size: 2rem !important;line-height: 15px">
        {{ blog.title }}
      </nuxt-link>
      <div class="flex my-5">
        <img :src="'https://api.tincalab.com'+blog.author_image.url" :alt="blog.author_name">
        <div class="mx-2">
          <p class="flex-col ">
            {{ blog.author_name }}
          </p>
          <p>
            {{ formatDate(blog.date).toUpperCase() }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from "moment";
import 'moment/locale/es';

export default {
  name: "BlogCardComponent",
  props: {
    blog: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    formatDate(date) {
      return moment(String(date)).format('MMMM DD YYYY')
    },
  }
}
</script>

<style scoped>
.card {
  transition: all .2s ease-in-out;
}

.card:hover {
  transition: all .2s ease-in-out;
  transform: scale(1.03);
}

.card__header--type {
  font-size: 1.2rem;
  font-weight: bold;
  background: -webkit-linear-gradient(
    93.35deg,
    #b983de -2.66%,
    #5991f7 105.06%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: tomato;
}
</style>
