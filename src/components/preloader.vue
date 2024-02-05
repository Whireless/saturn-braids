<script>
  export default {
    computed: {
      preloader() {
        window.onload = () => {
          document.querySelector('.preloader').classList.add('preloader--hidden');
        }
      },
    },
  }
</script>

<template>
  <div v-bind:class="['preloader', preloader]">
    <span class="preloader__logo"></span>
  </div>
</template>
