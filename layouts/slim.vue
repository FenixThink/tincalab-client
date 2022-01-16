<template>
  <div>
    <div class="flex flex-col h-screen wrap relative">
      <header>
        <Navigation class="fixed w-full"/>
      </header>
      <main class="flex-grow relative">
        <Nuxt class="relative mt-24"/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlimLayout"
}
</script>
