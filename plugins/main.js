import Vue from 'vue'
import VueSpinners from 'vue-spinners'
import VueCarousel from 'vue-carousel'
import VueScrollReveal from 'vue-scroll-reveal'
// OR specifying custom default options for all uses of the directive
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 500,
  scale: 1,
  mobile: false,
})
Vue.use(VueCarousel)
Vue.use(VueSpinners)
