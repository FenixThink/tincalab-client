<template>
  <ul class="flex items-center py-10">
    <li class="mx-2 py-1 my-1 md:my-0">
      <nuxt-link
        class="route-link px-2 text-3xl"
        :exact="true"
        active-class="active"
        to="/"
        @click.native="changeState"
      >
        Inicio
      </nuxt-link>
    </li>
    <li class="mx-2 py-1 my-1 md:my-0">
      <nuxt-link
        class="route-link px-2 text-3xl"
        active-class="active"
        to="/servicios"
        @click.native="changeState"
      >
        Servicios
      </nuxt-link>
    </li>
    <li class="mx-2 py-1 my-1 md:my-0">
      <nuxt-link
        class="route-link px-2 text-3xl"
        active-class="active"
        to="/blog"
        @click.native="changeState"
      >
        Blog
      </nuxt-link>
    </li>
    <li class="mx-2 py-1 my-1 md:my-0">
      <nuxt-link
        class="route-link px-2 text-3xl"
        active-class="active"
        to="/contacto"
        @click.native="changeState"
      >
        Contacto
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MenuComponentChild',
  data: () => ({}),
  methods: {
    changeState() {
      this.$emit('change-state')
    },
  },
}
</script>

<style scoped>
.active {
  font-weight: 800;
  background: -webkit-linear-gradient(
    93.35deg,
    #b983de -2.66%,
    #5991f7 105.06%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: tomato;
}

.route-link:hover {
  transform: scale(1.05) !important;
  transition: all 0.2s ease-in-out;
}
</style>
