<template>
  <div>
    <section class="w-full flex items-center grid grid-cols-1 md:grid-cols-2">
      <article>
        <h1 class="title__h1">
          Lleva tu empresa
        </h1>
        <h2 class="title__h2 block">
          Al siguiente nivel.
        </h2>
        <p class="text-3xl my-6">
          Escríbenos o llámanos para hablar de las necesidades y debilidades de tu empresa y como podemos convertirlas
          en fortalezas.
        </p>
        <ButtonCustom route="contactanos" title="Contactanos"/>
      </article>
      <figure class="relative flex flex-col items-center justify-center ">
        <picture class="media absolute w-full"/>
        <picture class="media__background"/>
      </figure>
    </section>
    <section class="flex flex-col justify-center items-center">
      <h1 class="animate-pulse text-center font-semibold text-5xl title__h2">
        En desarrollo
      </h1>
      <BarLoader class="animate-pulse" width=250 />
    </section>
  </div>
</template>

<script>
import { BarLoader } from '@saeris/vue-spinners'

export default {
  name: 'IndexPage',
  components: {
    BarLoader
  }
}
</script>

<style>
@media screen and (min-width: 1200px) {
  .media__background {
    background-image: url("/media-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 600px;
    height: 600px;
  }

  .media {
    background-image: url("/media.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 300px;
    height: 300px;
  }
}
</style>
