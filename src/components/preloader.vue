<script>
  import { useGlobalStore } from '../store';
  import { storeToRefs } from 'pinia';

  export default {
    setup() {
      const { preloader } = storeToRefs(useGlobalStore());
      return {
        preloader,
      }
    },
  }
</script>

<template>
  <div :class="['preloader', {'preloader--hidden' : preloader}]">
    <span class="preloader__logo"></span>
  </div>
</template>
