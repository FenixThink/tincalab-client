<template>
  <div>
    <div v-if="loading" class="h-screen flex justify-center items-center">
      <LoadingComponent/>
    </div>
    <div v-if="!loading">
      <div class="container__">
        <section class="my-20">
          <h2 class="title__h2 text-center">Blogs</h2>
          <p class="t-regular text-center mt-5">Blogs are a great method to increase traffic and generate leads. Make a
            profit. Get
            compensated for your efforts. </p>
        </section>
        <div v-for="(blog,i) in featuredBlogs" :key="i" v-scroll-reveal.reset class="p-10">
          <div class="relative grid sm:grid-cols-2 lg:grid-cols-2">
            <div
              class="backdrop flex justify-center items-center">
              <div
                id="blog-image"
                :style="getStyles(blog)" class="w-100 rounded-3 px-1 wide-images"/>
            </div>
            <div>
              <section class="py-10 lg:py-20">
                <nuxt-link :to="'/blog/'+blog.hash">
                  <h2 id="blog-title" class="title__h2 lg:w-9/12">
                    {{ blog.title }}
                  </h2>
                </nuxt-link>
                <p class="t-regular text-justify lg:w-9/12 mt-8">
                  {{ blog.description }}
                </p>
                <div class="blog__button flex  items-center mt-10">
                  <nuxt-link
                    class="blog__button--text text-2xl text-center text-white font-bold py-3 px-4 my-3"
                    :to="/blog/+blog.hash">
                    <p class="m-0">Leer más</p>
                  </nuxt-link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexBlogPage',
  layout: 'slim',
  data: () => ({
    loading: true,
  }),
  computed: {
    featuredBlogs() {
      return this.$store.state.blogs.filter(blog => blog.featured)
    },
  },
  async mounted() {
    await this.$store.dispatch('getBlogs')
    this.loading = false
  },
  methods: {
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
        borderRadius: '40px'
      }
    },
  }
}
</script>

<style scoped>
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
  transition: all .2s ease;
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
  transition: all .2s ease-in-out;
}

@media screen and (max-width: 767px) {
  #blog-image {
    width: 20rem;
    height: 20rem;
  }

  .backdrop {
    width: 25rem;
    height: 25rem;
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
