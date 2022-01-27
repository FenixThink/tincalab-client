<template>
  <div class="bg-white rounded-3xl flex flex-col items-start card p-5 m-2">
    <section class="card__header">
        <p class="title__h1 my-4" style="font-size: 1.55rem">
        Article
      </p>
    </section>
    <section class="card__body">
      <hr class="text-gray-300 bg-gray-300">
      <h2 class="title__h2" style="font-size: 2rem;line-height: 25px">
        How do you use social media for growing traffic and sales?
      </h2>
      <div class="flex my-5">
        <img src="/avatar.png" alt="Creator">
        <div class="mx-2">
          <p class="flex-col ">
            Jessica Parker
          </p>
          <p>
            May, 2020
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "BlogCardComponent"
}
</script>

<style scoped>

</style>
