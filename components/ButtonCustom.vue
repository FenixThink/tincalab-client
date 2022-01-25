<template>
  <button
    class="btn py-3 text-white font-bold text-2xl cursor-pointer"
    @click="to(route)"
  >
    {{ title }}
  </button>
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
    },
  },
  methods: {
    to(route) {
      this.$router.push('/' + route)
    },
  },
}
</script>

<style scoped>
.btn {
  background: linear-gradient(112.77deg, #c381db 0%, #4e92f9 100%);
  border-radius: 8px;
  width: 150px;
}

.btn p {
  line-height: 20px;
}
</style>
