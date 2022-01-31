<template>
  <div>
    <img
      :src="'https://api.tincalab.com' + customer.brand.url"
      :alt="customer.name"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomersComponent',
  props: {
    customer: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped></style>
