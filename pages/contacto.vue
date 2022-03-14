<template>
  <div class="contact">
    <div class="container__ flex flex-col lg:px-28 py-32">
      <section>
        <h2 class="title__h2 mb-20">Contáctanos</h2>
      </section>
      <div
        class="grid flex items-center justify-center lg:grid-cols-2 min-w-full p-10 lg:p-20 bg-contact rounded-2xl t-regular">
        <div class="contact__info">
          <div class="contact__info-item flex items-center my-10">
            <div class="contact__info-icon shadow-sm border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#1A4641"
                class="bi bi-envelope-fill m-5"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                />
              </svg>
            </div>
            <div class="flex flex-col mx-2">
              <h3 class="contact__info-item-title font-bold">Email</h3>
              <a
                href="mailto:tincaagency@gmail.com"
                target="_blank"
                class="contact__info-item-text"
              >
                tincaagency@gmail.com
              </a>
            </div>
          </div>
          <div class="contact__info-item flex items-center my-10">
            <div class="contact__info-icon shadow-sm border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#1A4641"
                class="bi bi-telephone-fill m-5"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </div>
            <div class="flex flex-col mx-2">
              <h3 class="contact__info-item-title font-bold">Teléfono</h3>
              <a href="tel:+57 302 7142819" class="contact__info-item-text">
                +57 302 7142819
              </a>
            </div>
          </div>
          <div class="contact__info-item flex items-center my-10">
            <div class="contact__info-icon shadow-sm border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#1A4641"
                class="bi bi-geo-alt-fill m-5"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                />
              </svg>
            </div>
            <div class="flex flex-col mx-2">
              <h3 class="contact__info-item-title font-bold">
                Bucaramanga, Colombia
              </h3>
            </div>
          </div>
        </div>
        <div class="contact__form">
          <form @submit.prevent="submit">
            <div class="contact__form-item mt-10 mb-5">
              <input
                v-model="user.name"
                type="text"
                class="contact__form-item-input rounded-2xl p-4 shadow-sm w-9/12 md:w-full"
                placeholder="Escribe tu nombre"
                required
              />
            </div>
            <div class="contact__form-item w-full my-5">
              <input
                v-model="user.email"
                type="email"
                class="contact__form-item-input rounded-2xl p-4 shadow-sm w-9/12 md:w-full"
                placeholder="Escribe tu correo"
                required
              />
            </div>
            <div class="contact__form-item w-full my-5">
              <textarea
                v-model="user.message"
                class="contact__form-item-input rounded-2xl p-4 shadow-sm w-9/12 md:w-full"
                placeholder="Escribe tu mensaje"
                required
              ></textarea>
            </div>
            <div class="contact__form-item">
              <button
                type="submit"
                class="contact__form-item-button px-10 lg:px-20 py-3 text-white font-semibold"
                @click="submit"
              >
                Enviar
              </button>
            </div>
            <p
              v-if="error !== null"
              class="text-red-500 font-semibold text-2xl my-3"
            >
              Su mensaje no ha sido envidado. Intente rellenando el formulario o
              recargando la pagina.
            </p>
            <p
              v-if="send === true"
              class="text-green-500 font-semibold text-2xl my-3"
            >
              Su mensaje se envio correctamente. Pronto nos comunicaremos con
              usted.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data: () => ({
    send: null,
    error: null,
    user: {
      name: '',
      email: '',
      message: '',
    },
    endpoint: 'https://formspree.io/f/xdobeebk',
  }),
  methods: {
    async submit() {
      const data = {
        email: this.user.email,
        message: this.user.message,
      }
      await this.$axios
        .post(this.endpoint, data)
        .then((response) => {
          if (response.status === 200) {
            this.send = true
            setTimeout(
              function () {
                this.$router.push('/')
              }.bind(this),
              2000
            )
          }
        })
        .catch((error) => {
          this.error = error
        })
    },
  },
}
</script>

<style scoped>
.contact {
  background: url('~/static/bg-contact.png') no-repeat center;
  background-size: cover;
  height: 100%;
}

.bg-contact {
  background: linear-gradient(
    137.73deg,
    rgba(255, 255, 255, 0) 4.16%,
    rgba(255, 255, 255, 0.5) 102.02%
  );
  backdrop-filter: blur(84px);
  /* Note: backdrop-filter has minimal browser support */
}

.contact__form-item-input {
  background: linear-gradient(
    130.17deg,
    rgba(255, 255, 255, 0.136) 2.38%,
    rgba(255, 255, 255, 0.85) 98.89%
  );
  backdrop-filter: blur(60px);
}

::placeholder {
  color: #3b706a;
}

.contact__form-item-button {
  background: linear-gradient(113.45deg, #ffd479 2.54%, #e78932 98.31%);
  border-radius: 18px;
  transition: all 0.2s ease-in-out;
}

.contact__form-item-button:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
}

.contact__info-icon {
  background: linear-gradient(
    137.73deg,
    rgba(255, 255, 255, 0) 4.16%,
    rgba(255, 255, 255, 0.5) 102.02%
  );
  border-radius: 15px;
}
</style>
