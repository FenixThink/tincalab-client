<template>
  <footer class="footer relative py-20">
    <div class="container mx-auto px-6">
      <div class="flex justify-center sm:mt-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 flex items-center w-full">
          <div class="footer__links">
            <nuxt-link class="text-2xl text-indigo-100 mx-3 font-semibold" to="/">
              Inicio
            </nuxt-link>
            <nuxt-link class="text-2xl text-indigo-100 mx-3 font-semibold" to="/servicios">
              Servicios
            </nuxt-link>
            <nuxt-link class="text-2xl text-indigo-100 mx-3 font-semibold" to="/contacto">
              Contacto
            </nuxt-link>
            <nuxt-link class="text-2xl text-indigo-100 mx-3 font-semibold" to="/blog">
              Blog
            </nuxt-link>
          </div>
          <div class="footer__follow-us flex lg:justify-end items-center">
            <a class="mx-2" target="_blank" href="https://facebook.com/tinca-lab">
              <img src="/facebook.svg" alt="Facebook">
            </a>
            <a class="mx-2" target="_blank" href="https://facebook.com/tinca-lab">
              <img src="/instagram.svg" alt="Instagram">
            </a>
            <a class="mx-2" target="_blank" href="https://facebook.com/tinca-lab">
              <img src="/in.svg" alt="LinkedIN">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6">
      <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
        <div class="sm:w-2/3 text-center py-6 flex justify-center items-center">
          <p class="font-light mr-1">Todos los derechos reservados</p>
          <p class="text-sm ml-1 text-blue-400 font-bold">
            © Tinca lab, 2022
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>
.footer {
  background: rgba(237, 237, 237, 0.4);
  backdrop-filter: blur(114px);
}

span {
  color: rgba(55, 65, 81, var(--tw-text-opacity)) !important;
}

a {
  color: rgba(55, 65, 81, var(--tw-text-opacity)) !important;
}

p {
  color: rgba(55, 65, 81, var(--tw-text-opacity)) !important;
}
</style>
