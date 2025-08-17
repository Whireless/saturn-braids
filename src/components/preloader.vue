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
    <span class="preloader__logo">
      <svg class="main-nav__logo-icon" width="100%" height="100%">
        <use href="#logo"></use>
      </svg>
    </span>
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
  // animation: gradient 3s infinite linear;
  // transition: opacity 1.2s, visibility 0s 0s;

  animation: gradient 1s infinite linear;
  transition: opacity 1s, visibility 0s 0s;

  &--hidden {
    visibility: hidden;
    opacity: 0;
    // transition: opacity 1.2s, visibility 0s 1.2s;

    transition: opacity 1s, visibility 0s 1s;
  }
}

.preloader__logo {
  width: 175px;
  height: 80px;
  position: relative;
  margin: 100px auto;
  border-radius: 45px;

  @media (min-width: $tablet) {
    width: 225px;
    height: 100px;
  }

  @media (min-width: $desktop) {
    width: 290px;
    height: 130px;
  }
}
</style>