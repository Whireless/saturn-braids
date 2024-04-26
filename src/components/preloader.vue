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


.<style lang="scss">
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  visibility: visible;
  background: $gradient1;
  background-size: 400%;
  animation: gradient 3s infinite linear;
  transition: opacity 1.6s, visibility 0s 0s;

  &--hidden {
    visibility: hidden;
    opacity: 0;
    transition: opacity 1.6s, visibility 0s 1.6s;
  }
}

.preloader__logo {
  background-image: url("../icons/logo.svg");
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  position: relative;
  margin: 100px auto;
  padding: 10px 15px;
  border-radius: 45px;

  @media (min-width: $tablet) {
    padding: 15px 20px;
  }

  @media (min-width: $desktop) {
    padding: 20px 25px;
  }
}
</style>