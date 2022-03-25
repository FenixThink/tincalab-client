<template>
  <div>
    <div v-if="loading" class="h-screen flex justify-center items-center">
      <LoadingComponent/>
    </div>
    <div v-if="!loading">
      <div class="container__ blog mx-auto my-32">
        <div class="blog__header px-5 flex flex-col items-start justify-center">
          <h1 class="title__h2 font-bold">{{ blog.title }}</h1>
          <figure class="blog__banner self-center">
            <div :style="getStyles(blog)"/>
          </figure>
          <div class="flex items-center p-3">
            <img
              width="50"
              class="rounded-full"
              :src="'https://api.tincalab.com' + blog.author_image.url"
              :alt="blog.author_name"
            />
            <p class="t-regular mx-3">{{ blog.author_name }}</p>
            <p class="t-regular mx-3 text-right">{{ formatDate(blog.date) }}</p>
          </div>
        </div>
        <!-- eslint-disable vue/no-v-html -->
        <div
          style="color: #323232"
          class="blog__content break-word w-auto mt-10 px-5 mx-auto t-regular"
          v-html="content"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import 'moment/locale/es'
import {marked} from 'marked'

export default {
  name: 'BlogPage',
  layout: 'slim',
  data: () => ({
    blog: {},
    loading: true,
    error: null,
  }),
  computed: {
    content() {
      return marked(this.blog.content)
    },
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
    getImage(object) {
      return this.$axios.defaults.baseURL + object.banner?.url
    },
    getStyles(object) {
      return {
        backgroundColor: 'rgba(255,255,255,0.84)',
        backgroundImage: `url(${this.getImage(object)})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '5px',
        width: '100%',
        height: '400px'
      }
    },
  },
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

.blog__banner {
  width: 100%;
  margin: 10px 0;
}

@media (min-width: 1200px) {
  .blog__banner img {
    height: auto !important;
    width: 100% !important;
  }
}

.blog .blog__content {
  display: flex !important;
  flex-direction: column !important;
}

.blog__content p {
  display: flex !important;
  justify-content: center;
}

</style>
