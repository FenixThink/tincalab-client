<template>
  <div class="bg-white rounded-3xl shadow-md flex flex-col items-start card p-10 m-2">
    <section class="card__header">
        <p class="card__header--type my-4" style="font-size: 1.55rem">
        Article
      </p>
    </section>
    <section class="card__body">
      <hr class="text-gray-300 bg-gray-300">
      <h2 class="title__h2 cursor-pointer" style="font-size: 2rem;line-height: 25px">
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
.card {
  transition: all .2s ease-in-out;
}
.card:hover {
  transition: all .2s ease-in-out;
  transform: scale(1.03);
}
.card__header--type {
  font-size: 1.2rem;
  font-weight: bold;
  background: -webkit-linear-gradient(
    93.35deg,
    #b983de -2.66%,
    #5991f7 105.06%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: tomato;
}
</style>
