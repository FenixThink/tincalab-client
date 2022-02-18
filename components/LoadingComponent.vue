<template>
  <client-only>
    <ClipLoader :size="100" />
  </client-only>
</template>
nu

<script>
import { ClipLoader } from '@saeris/vue-spinners'

export default {
  name: 'LoadingComponent',
  components: {
    ClipLoader,
  },
}
</script>
