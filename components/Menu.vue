<template>
  <ul class="flex items-center">
    <li v-for="(item, i) in menu" :key="i" class="mx-2 py-1">
      <nuxt-link
        :href="item.path"
        class="route-link px-2 text-2xl"
        :exact="item.exact"
        active-class="active"
        :to="item.path"
        @click.native="changeState"
      >
        {{ item.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'MenuComponent',
  data: () => ({
    menu: [
      {
        path: '/',
        name: 'Inicio',
        exact: true,
      },
      {
        path: '#servicios',
        name: 'Servicios',
      },
      {
        path: '/#proyectos',
        name: 'Proyectos',
      },
      {
        path: '#blog',
        name: 'Blog'
      },
      {
        path: '/#contacto',
        name: 'Contácto',
      },
    ],
  }),
  methods: {
    changeState() {
      this.$emit('change-state')
    },
  },
}
</script>

<style scoped>
.active {
  font-size: 1.5rem;
  font-weight: 800;
  background: -webkit-linear-gradient(93.35deg, #B983DE -2.66%, #5991F7 105.06%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: tomato;
}

.route-link:hover {
  transform: scale(1.05) !important;
  transition: all .2s ease-in-out;
}
</style>
