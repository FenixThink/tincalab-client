<template>
  <div class="default">
    <div class="flex flex-col h-screen wrap relative">
      <header>
        <Navbar/>
      </header>
      <main class="flex-grow bg-white py-24">
        <Nuxt class="relative container__"/>
      </main>
      <Footer class="z-50"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>

