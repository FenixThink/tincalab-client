<template>
  <div class="default">
    <div class="flex flex-col h-screen wrap relative">
      <header>
        <Navbar />
      </header>
      <main class="flex-grow bg-white lg:pt-20">
        <Nuxt class="relative" />
      </main>
      <Footer class="z-50" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="css">
main {
  background-image: url('~/static/bg-elemtents.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
</style>
