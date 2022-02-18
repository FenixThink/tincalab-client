<template>
  <div>
    <v-style>
      .smooth-enter-to, .smooth-leave { height: {{ computedHeight }}; }
    </v-style>
    <div v-if="loading" class="h-screen flex justify-center items-center">
      <LoadingComponent />
    </div>
    <div v-if="!loading">
      <div class="container__">
        <section class="mt-20">
          <h2 class="title__h2 text-center">Blogs</h2>
          <p class="t-regular text-center mt-5">
            Blogs are a great method to increase traffic and generate leads.
            Make a profit. Get compensated for your efforts.
          </p>
        </section>
        <div
          v-for="(blog, i) in featuredBlogs"
          :key="i"
          v-scroll-reveal.reset
          class="p-10"
        >
          <div
            class="relative grid sm:grid-cols-2 lg:grid-cols-2 place-items-center"
          >
            <div class="backdrop flex justify-center items-center">
              <div
                id="blog-image"
                :style="getStyles(blog)"
                class="w-100 rounded-3 px-1 wide-images"
              />
            </div>
            <div>
              <section class="py-10 lg:py-20">
                <nuxt-link :to="'/blog/' + blog.hash">
                  <h2 id="blog-title" class="title__h2 lg:w-9/12">
                    {{ blog.title }}
                  </h2>
                </nuxt-link>
                <p class="t-regular text-justify lg:w-9/12 mt-8">
                  {{ blog.description }}
                </p>
                <div class="blog__button flex items-center mt-10">
                  <nuxt-link
                    class="blog__button--text text-2xl text-center text-white font-bold py-3 px-4 my-3"
                    :to="/blog/ + blog.hash"
                  >
                    <p class="m-0">Leer más</p>
                  </nuxt-link>
                </div>
              </section>
            </div>
          </div>
        </div>
        <section class="grid grid-cols-1 md:grid-cols-3 mt-20">
          <div v-for="(blog, i) in blogs.slice(0, 3)" :key="i" class="my-2">
            <BlogCardComponent :blog="blog" />
          </div>
        </section>
        <transition name="smooth">
          <section v-if="showMore" class="grid grid-cols-1 md:grid-cols-3">
            <div
              v-for="(blog, i) in blogs.slice(3, blogs.length)"
              :key="i"
              class="my-2"
            >
              <BlogCardComponent :blog="blog" />
            </div>
          </section>
        </transition>
        <button
          class="btn p-3 text-white font-bold text-2xl cursor-pointer block my-10 mx-auto"
          @click="show"
        >
          <template v-if="!showMore"> Ver más </template>
          <template v-else> Ver menos </template>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('VStyle', {
  render(createElement) {
    return createElement('style', this.$slots.default)
  },
})

export default {
  name: 'IndexBlogPage',
  layout: 'slim',
  data: () => ({
    loading: true,
    showMore: false,
    computedHeight: '214px',
  }),
  computed: {
    featuredBlogs() {
      return this.$store.state.blogs.filter((blog) => blog.featured)
    },
    blogs() {
      return this.$store.state.blogs.filter((blog) => !blog.featured)
    },
  },
  async mounted() {
    await this.$store.dispatch('getBlogs')
    this.loading = false
  },
  methods: {
    show() {
      this.showMore = !this.showMore
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
        backgroundPosition: 'center top',
        borderRadius: '40px',
      }
    },
  },
}
</script>

<style scoped>
.smooth-enter-active,
.smooth-leave-active {
  transition: height 0.5s;
}

.smooth-enter,
.smooth-leave-to {
  height: 0;
}

.btn {
  background: linear-gradient(112.77deg, #c381db 0%, #4e92f9 100%);
  border-radius: 5px;
  width: 150px;
}

.btn p {
  line-height: 20px;
}

.backdrop {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 50px;
}

#blog-title {
  font-size: 3.5rem !important;
  line-height: 35px !important;
}

.blog__button {
  background: url('~/static/blog__button.png') no-repeat left center;
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

@media screen and (max-width: 767px) {
  #blog-image {
    width: 26rem;
    height: 26rem;
  }

  .backdrop {
    width: 30rem;
    height: 30rem;
  }
}

@media (min-width: 1200px) {
  #blog-image {
    width: 35rem;
    height: 35rem;
  }

  .backdrop {
    width: 40rem;
    height: 40rem;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  #blog-image {
    width: 30rem;
    height: 30rem;
  }

  .backdrop {
    width: 35rem;
    height: 35rem;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  #blog-image {
    width: 30rem;
    height: 30rem;
  }

  .backdrop {
    width: 35rem;
    height: 35rem;
  }
}
</style>
