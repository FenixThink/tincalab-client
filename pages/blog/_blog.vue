<template>
  <div>
    {{ $route.path }}
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  nuxtI18n: {
    paths: {
      en: '/en/blog/:blog', // -> accessible at /en/blog/:blog
      es: '/blog/:blog'     // -> accessible at /blog/:blog (no prefix since it's the default locale)
    }
  }
}
</script>

<style scoped></style>
