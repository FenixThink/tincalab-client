<template>
  <button @click="to(route)" class="btn py-3 text-white font-bold text-2xl cursor-pointer">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "ButtonCustom",
  props: {
    title: {
      type: String,
      default: ''
    },
    route: {
      type: String,
    }
  },
  methods: {
    to(route) {
      this.$router.push('/' + route)
    }
  }
}
</script>

<style scoped>
.btn {
  background: linear-gradient(112.77deg, #C381DB 0%, #4E92F9 100%);
  border-radius: 8px;
  width: 150px;
}

.btn p {
  line-height: 20px;
}
</style>
