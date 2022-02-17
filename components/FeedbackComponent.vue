<template>
  <div class="flex grid sm:grid-cols-2 lg:grid-cols-2">
    <div class="flex md:justify-center lg:justify-center">
      <img :alt="feedback.name" :src="'https://api.tincalab.com'+feedback.image.url"
           class="border-purple-500 w-96">
    </div>
    <div class="flex flex-col md:items-center lg:items-start">
      <div class="quotes"/>
      <section class="w-full">
        <h2 class="text-5xl font-semibold title__h1">
          {{ feedback.name }}
        </h2>
        <article class="text-2xl font-light my-3 text-gray-500">
          <p class="break-words w-4/5">
            {{ feedback.description }}
          </p>
        </article>
        <p class="uppercase text-gray-500">{{ formatDate(feedback.date) }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import 'moment/locale/es';

export default {
  name: "FeedbackComponent",
  props: {
    feedback: {
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
.quotes {
  background: url("~/static/quotes.png") no-repeat center;
  background-size: contain;
  width: 10rem;
  height: 10rem;
}

img {
  border-radius: 30%;
  background: linear-gradient(93.35deg, #bcaaf6 -2.66%, #57b2f3 105.06%);
  padding: 10px;
}
</style>
