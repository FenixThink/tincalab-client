<template>
  <div class="default">
    <div class="flex flex-col h-screen wrap relative">
      <header class="z-50">
        <NavbarComponent />
      </header>
      <main class="flex-grow bg-white lg:pt-20 relative">
        <Nuxt class="relative" />
      </main>
      <FooterComponent class="z-50" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style scoped lang="css">
main {
  background-image: url('~/static/bg-elemtents.png') !important;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
</style>
