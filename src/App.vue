<script>
  import preloader from './components/preloader.vue';
  import mainHeader from './components/mainHeader.vue';
  import mainFooter from './components/mainFooter.vue';

  import { useGlobalStore } from './store';

  export default {
    setup() {
      const { preloaderHidden } = useGlobalStore();
      return {
        preloaderHidden,
      }
    },
    mounted() {
      this.preloaderHidden();
    },
    components: {
      preloader,
      mainHeader,
      mainFooter,
    },
  }
</script>

<template>
  <preloader></preloader>
  <mainHeader></mainHeader>
  <router-view v-slot="{ Component, route }">
    <transition mode="out-in">
      <component :is="Component" :key="route.path"/>
    </transition>
  </router-view>
  <mainFooter></mainFooter>
</template>