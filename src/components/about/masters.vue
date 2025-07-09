<script>
  import { useGlobalStore } from '/src/store';

  import { gsap, ScrollTrigger } from 'gsap/all';
  gsap.registerPlugin(ScrollTrigger);

  export default {
    setup() {
      const { mastersList } = useGlobalStore();
      return {
        mastersList,
      }
    },
    mounted() {
      const afterLoad = gsap.timeline({delay: 0.8}),
            scroll = gsap.timeline();

      const masters = gsap.utils.toArray('.masters__item');

      if (window.matchMedia('(max-width: 1279px)').matches) {
        // afterLoad
        // .from(masters[0], {
        //   y: '-25%',
        //   opacity: 0,
        // })

        // scroll
        // .from(masters[1], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: masters[0],
        //     start: '520px center',
        //     end: '670px center',
        //     scrub: true,
        //   },
        // }).from(masters[2], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: masters[1],
        //     start: '520px center',
        //     end: '670px center',
        //     scrub: true,
        //   },
        // }).from(masters[3], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: masters[2],
        //     start: '520px center',
        //     end: '670px center',
        //     scrub: true,
        //   },
        // })
      } else if (window.matchMedia('(min-width: 1280px)').matches) {
        // afterLoad
        // .from(masters[0], {
        //   y: '-25%',
        //   opacity: 0,
        // }).from(masters[1], {
        //   y: '25%',
        //   opacity: 0,
        // })

        // scroll
        // .from(masters[2], {
        //   y: '-25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: '.masters__list',
        //     start: 'center center',
        //     end: '850px center',
        //     scrub: true,
        //   },
        // }).from(masters[3], {
        //   y: '25%',
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: '.masters__list',
        //     start: '600px center',
        //     end: '850px center',
        //     scrub: true,
        //   },
        // })
      }
    },
  }
</script>

<template>
  <section class="masters">
    <div class="container">
      <h2 class="masters__title">Наши мастера</h2>
      <ul class="masters__list">
        <li v-for="li in mastersList" 
            :key="li"
            class="masters__item">
          <img :src="li.img"
               :alt="li.alt"
               class="masters__master-img"
               width="120" height="120"
               >
          <div class="masters__master-info">
            <h3 class="masters__suptitle">{{ li.name }}</h3>
            <p class="masters__master-status">{{ li.status }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

.<style lang="scss">
.masters {
  margin: 70px auto 0 auto;

  @media (min-width: $tablet) {
    margin: 80px auto 0 auto;
  }

  @media (min-width: $desktop) {
    margin: 95px auto 0 auto;
  }

  @media (min-width: $laptop) {
    margin: 150px auto 0 auto;
  }
}

.masters__title {
  font-family: $decorTitle;
  font-size: 37px;
  line-height: 40px;
  letter-spacing: 2px;
  text-align: center;
  width: max-content;
  margin: 0 auto;
  border-radius: 20px;

  @media (min-width: $tablet) {
    font-size: 45px;
    line-height: 48px;
  }

  @media (min-width: $desktop) {
    font-size: 55px;
    line-height: 60px;
  }

  @media (min-width: $laptop) {
    font-size: 65px;
    line-height: 70px;
  }
}

.masters__list {
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  list-style: none;
  margin-top: 35px;

  @media (min-width: $tablet) {
    margin-top: 50px;
  }

  @media (min-width: $desktop) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 70px;
  }

  @media (min-width: $laptop) {
    margin-top: 90px;
  }
}

.masters__item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;

  >.masters__master-title {
    color: $lightBlack;
  }

  // &:nth-child(1) {
  //   background-color: $red;
  // }

  // &:nth-child(2) {
  //   background-color: $blueviolet;
  // }

  // &:nth-child(3) {
  //   background-color: $grey3;
  // }

  // &:nth-child(4) {
  //   background-color: $pink;
  // }

  @media (min-width: $tablet) {
    flex-direction: row;
    // justify-content: space-between;
    justify-content: space-around;


    // display: grid;
    // // grid-template-columns: 300px 1fr;
    // grid-template-columns: 245px 360px;
    // // grid-template-rows: repeat(3, auto);
    // grid-template-rows: 50px 75px 0px;
    // row-gap: 15px;
    // align-items: center;
    // justify-items: center;


    // &:nth-child(even) {
    //   grid-template-columns: 1fr 300px;

    //   .masters__master-img {
    //     grid-column: 2;
    //   }
    // }
  }

  @media (min-width: $desktop) {
    flex-direction: column;
    justify-content: space-between;
    row-gap: 15px;
  }

  @media (min-width: $laptop) {
    row-gap: 20px;
  }
}

.masters__master-img {
  background-size: cover;
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: $tablet) {
    width: 230px;
    height: 230px;

    grid-row: 1/-1;
  }

  @media (min-width: $desktop) {
    width: 215px;
    height: 215px;
  }

  @media (min-width: $laptop) {
    width: 310px;
    height: 310px;
  }
}

.masters__master-info {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media (min-width: $tablet) {
    row-gap: 15px;
    width: 400px;
  }

  @media (min-width: $desktop) {
    width: 360px;
  }

  @media (min-width: $laptop) {
    width: 500px;
  }
}

.masters__suptitle {
  font-family: $decorTitle;
  font-size: 26px;
  line-height: 29px;
  letter-spacing: 2px;

  @media (min-width: $tablet) {
    font-size: 30px;
    line-height: 33px;
  }

  @media (min-width: $desktop) {
    font-size: 37px;
    line-height: 40px;
  }

  @media (min-width: $laptop) {
    font-size: 40px;
    line-height: 43px;
  }
}

.masters__master-status {
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  border: 1px solid $lightBlack;
  border-radius: 20px;

  @media (min-width: $desktop) {
    height: 65px;
    padding: 8px 15px;
  }

  @media (min-width: $laptop) {
    height: 90px;
    padding: 10px 15px;
  }
}
</style>