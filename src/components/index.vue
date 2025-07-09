<script>
  import intro from './index/intro.vue';
  import hairstyles from './index/hairstyles.vue';
  import promotions from './index/promotions.vue';
  import goBraid from './buttons/goBraid.vue';

  import { gsap, ScrollTrigger } from 'gsap/all';
  gsap.registerPlugin(ScrollTrigger);

  export default {
    mounted() {
      const afterLoad = gsap.timeline({delay: 0.3}),
            scroll = gsap.timeline();

      const hairsList = gsap.utils.toArray('.hairstyles__item');

      if (window.matchMedia('(min-width: 370px) and (max-width: 1279px)').matches) {
      
      // Для мобилки

        afterLoad
        .from('.intro__info', {scale: 0.5, opacity: 0,})

        // scroll
        // .from(hairsList[0], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: hairsList[0],
        //     start: 'top center',
        //     end: '120px center',
        //     scrub: true,
        //     // markers: true,
        //   },
        // }).from(hairsList[1], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: hairsList[0],
        //     start: '400px center',
        //     end: '550px center',
        //     scrub: true,
        //   },
        // }).from(hairsList[2], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: hairsList[1],
        //     start: '400px center',
        //     end: '550px center',
        //     scrub: true,
        //   },
        // }).from(hairsList[3], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: hairsList[2],
        //     start: '400px center',
        //     end: '550px center',
        //     scrub: true,
        //   },
        // }).from(hairsList[4], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: hairsList[3],
        //     start: '400px center',
        //     end: '550px center',
        //     scrub: true,
        //   },
        // }).from(hairsList[5], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: hairsList[4],
        //     start: '400px center',
        //     end: '550px center',
        //     scrub: true,
        //   },
        // }).from('.promotions__actions', {
        //   y: '-15%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: '.promotions',
        //     start: 'top center',
        //     end: 'center center',
        //     scrub: true,
        //   },
        // })
      } else if (window.matchMedia('(min-width: 1280px)').matches) {
        afterLoad
        .from('.intro__info', {scale: 0.5, opacity: 0, delay: 0.2,})

        // scroll
        // .from(hairsList[0], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: hairsList[0],
        //     start: 'top center',
        //     end: '120px center',
        //     scrub: true,
        //   },
        // }).from(hairsList[1], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: hairsList[0],
        //     start: '500px center',
        //     end: '650px center',
        //     scrub: true,
        //   },
        // }).from(hairsList[2], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: hairsList[1],
        //     start: '500px center',
        //     end: '650px center',
        //     scrub: true,
        //   },
        // }).from(hairsList[3], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: hairsList[2],
        //     start: '500px center',
        //     end: '650px center',
        //     scrub: true,
        //   },
        // }).from(hairsList[4], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: hairsList[3],
        //     start: '500px center',
        //     end: '650px center',
        //     scrub: true,
        //   },
        // }).from(hairsList[5], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: hairsList[4],
        //     start: '500px center',
        //     end: '650px center',
        //     scrub: true,
        //   },
        // }).from('.promotions__actions', {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: '.promotions',
        //     start: 'top center',
        //     end: 'center center',
        //     scrub: true,
        //   },
        // })
      }
    },
    components: {
      intro,
      hairstyles,
      promotions,
      goBraid,
    }
  }
</script>

<template>
  <main>
    <intro></intro>
    <hairstyles></hairstyles>
    <promotions></promotions>
    <!-- <div class="index__go-braid">
      <go-braid></go-braid>
    </div> -->
  </main>
</template>

<style lang="scss">
// .index__go-braid {
//   margin: 10px 0 20px 0;

//   @media (min-width: $tablet) {
//     margin: 15px 0 30px 0;
//   }

//   @media (min-width: $desktop) {
//     margin: 20px 0 40px 0;
//   }

//   @media (min-width: $laptop) {
//     margin: 25px 0 50px 0;
//   }
// }
</style>