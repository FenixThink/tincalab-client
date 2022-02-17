<template>
  <div>
    <div v-if="loading" class="h-screen flex justify-center items-center">
      <LoadingComponent/>
    </div>
    <div v-if="!loading">
      <div class="container__ blog mx-auto p-10">
        <div class="blog__header px-20 flex flex-col items-start justify-center">
          <h1 class="title__h2 font-bold">{{ blog.title }}</h1>
          <p class="text-2xl my-3">{{ formatDate(blog.date).toUpperCase() }}</p>
          <figure class="blog__banner self-center">
            <img
              class="w-auto h-1/3 rounded-3xl p-3" :src="'https://api.tincalab.com'+blog.banner.url"
              alt="Portada del blog"/>
          </figure>
          <div class="flex items-center">
            <img
              width="50" class="rounded-full" :src="'https://api.tincalab.com'+blog.author_image.url"
              :alt="blog.author_name">
            <p class="t-regular mx-3">{{ blog.author_name }}</p>
          </div>
        </div>
        <!-- eslint-disable vue/no-v-html -->
        <div
          style="color: #323232" class="blog__content break-word w-auto my-10 px-20 mx-auto t-regular"
          v-html="content">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import 'moment/locale/es';
import {marked} from 'marked';

export default {
  name: 'BlogPage',
  data: () => ({
    blog: {},
    loading: true,
    error: null,
  }),
  computed: {
    content() {
      return marked(this.blog.content);
    }
  },
  async mounted() {
    await this.$store.dispatch('getBlogs')
    const blog = this.$store.state.blogs.filter(
      (e) => `/blog/${e.hash}` === this.$route.path
    )
    if (!blog) {
      alert('Blog not found. Please try again')
      this.$router.go(-1)
    }
    this.blog = blog[0]
    this.loading = false
  },
  methods: {
    formatDate(date) {
      return moment(String(date)).format('MMMM DD YYYY')
    },
  }
}
</script>

<style scoped>

.break-word {
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}

.title__h2 {
  font-size: 4.5rem !important;
  font-weight: 600;
  color: #323232 !important;
  line-height: 50px;
}
</style>
