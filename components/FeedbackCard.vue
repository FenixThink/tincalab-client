<template>
  <div class="flex grid sm:grid-cols-1 lg:grid-cols-2">
    <div class="h-full flex justify-center">
      <img class="border-purple-500 absolute w-1/4" :src="'https://api.tincalab.com'+customer.image.url"
           :alt="customer.name">
    </div>
    <div>
      <div class="quotes"/>
      <section class="w-full">
        <h2 class="text-5xl font-semibold title__h1">
          {{ customer.name }}
        </h2>
        <article class="text-3xl font-light my-3 text-gray-500">
          <p>
            {{ customer.description }}
          </p>
        </article>
        <p class="uppercase text-gray-500">{{ formatDate(customer.date) }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import 'moment/locale/es';

export default {
  name: "FeedbackCard",
  props: {
    customer: {
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
