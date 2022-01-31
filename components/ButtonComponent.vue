<template>
  <nuxt-link
    :to="`${route}`"
    class="btn p-3 text-white font-bold text-2xl cursor-pointer">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ButtonCustom',
  props: {
    title: {
      type: String,
      default: '',
    },
    route: {
      type: String,
      default: '/'
    }
  },
}
</script>

<style scoped>
.btn {
  background: linear-gradient(112.77deg, #c381db 0%, #4e92f9 100%);
  border-radius: 5px;
  width: 150px;
}

.btn p {
  line-height: 20px;
}
</style>
