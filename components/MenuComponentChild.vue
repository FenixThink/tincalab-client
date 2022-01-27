<template>
  <ul class="flex items-center">
    <li class="mx-2 py-1">
      <nuxt-link
        class="route-link px-2 text-2xl"
        :exact="true"
        active-class="active"
        :to="localePath('/')"
        @click.native="changeState"
      >
        {{ $t('home') }}
      </nuxt-link>
      <nuxt-link
        class="route-link px-2 text-2xl"
        active-class="active"
        :to="localePath('/servicios')"
        @click.native="changeState"
      >
        {{ $t('services') }}
      </nuxt-link>
      <nuxt-link
        class="route-link px-2 text-2xl"
        active-class="active"
        :to="localePath('/proyectos')"
        @click.native="changeState"
      >
        {{ $t('projects') }}
      </nuxt-link>
      <nuxt-link
        class="route-link px-2 text-2xl"
        active-class="active"
        :to="localePath('/blog')"
        @click.native="changeState"
      >
        {{ $t('blog') }}
      </nuxt-link>
      <nuxt-link
        class="route-link px-2 text-2xl"
        active-class="active"
        :to="localePath('/contacto')"
        @click.native="changeState"
      >
        {{ $t('contact') }}
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
  font-size: 1.5rem;
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
