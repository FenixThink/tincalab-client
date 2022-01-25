<template>
  <div>
    {{ $route.path }}
  </div>
</template>

<script>
export default {
  name: 'IndexBlogPage',
  nuxtI18n: {
    paths: {
      en: '/en/blog', // -> accessible at /en/blog/:blog
      es: '/blog'     // -> accessible at /blog/:blog (no prefix since it's the default locale)
    }
  }
}
</script>

<style scoped></style>
