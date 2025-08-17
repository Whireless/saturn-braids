<script>
  import preloader from './components/preloader.vue';
  import mainHeader from './components/mainHeader.vue';
  import intro from './components/intro.vue';
  import hairstyles from './components/hairstyles.vue';
  import studio from './components/studio.vue';
  import masters from './components/masters.vue';
  import faq from './components/faq.vue';
  import maps from './components/maps.vue';
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

      // Анимации
    },
    components: {
      preloader,
      mainHeader,
      mainFooter,

      intro,
      hairstyles,
      studio,
      masters,
      faq,
      maps,
    },
  }
</script>

<template>
  <!-- <preloader></preloader> -->
  <mainHeader></mainHeader>
  <intro></intro>
  <hairstyles></hairstyles>
  <studio></studio>
  <masters></masters>
  <faq></faq>
  <maps></maps>
  <mainFooter></mainFooter>
</template>