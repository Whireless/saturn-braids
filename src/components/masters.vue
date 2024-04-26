<script>
  import { useGlobalStore } from '../store';

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
        afterLoad
        .from(masters[0], {
          y: '-25%',
          opacity: 0,
        })

        scroll
        .from(masters[1], {
          y: '-25%',
          opacity: 0,
          scrollTrigger: {
            trigger: masters[0],
            start: '520px center',
            end: '670px center',
            scrub: true,
          },
        }).from(masters[2], {
          y: '-25%',
          opacity: 0,
          scrollTrigger: {
            trigger: masters[1],
            start: '520px center',
            end: '670px center',
            scrub: true,
          },
        }).from(masters[3], {
          y: '-25%',
          opacity: 0,
          scrollTrigger: {
            trigger: masters[2],
            start: '520px center',
            end: '670px center',
            scrub: true,
          },
        })
      } else if (window.matchMedia('(min-width: 1280px)').matches) {
        afterLoad
        .from(masters[0], {
          y: '-25%',
          opacity: 0,
        }).from(masters[1], {
          y: '25%',
          opacity: 0,
        })

        scroll
        .from(masters[2], {
          y: '-25%',
          opacity: 0,
          scrollTrigger: {
            trigger: '.masters__list',
            start: 'center center',
            end: '850px center',
            scrub: true,
          },
        }).from(masters[3], {
          y: '25%',
          opacity: 0,
          scrollTrigger: {
            trigger: '.masters__list',
            start: '600px center',
            end: '850px center',
            scrub: true,
          },
        })
      }
    },
  }
</script>

<template>
  <section class="masters">
    <div class="container">
      <h2 class="masters__title">Мастера</h2>
      <p class="masters__description">Замечательные мастера нашей студии</p>
      <ul class="masters__list">
        <li v-for="li in mastersList" 
            :key="li"
            class="masters__item">
          <img :src="li.img"
               :alt="li.alt"
               class="masters__master-img"
               width="275" height="350">
          <h3 class="masters__master-title">{{ li.name }}</h3>
          <p class="masters__master-status">{{ li.status }}</p>
          <p class="masters__master-description">{{ li.descr }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

.<style lang="scss">
.masters {
  margin: 90px auto 0 auto;
  padding: 30px 0;

  @media (min-width: $tablet) {
    margin: 100px auto 0 auto;
    padding: 50px 0;
  }

  @media (min-width: $desktop) {
    margin: 105px auto 0 auto;
    padding: 70px 0;
  }

  @media (min-width: $laptop) {
    margin: 115px auto 0 auto;
  }
}

.masters__title {
  font-family: $decorTitle;
  font-size: 30px;
  line-height: 33px;
  letter-spacing: 2px;
  text-align: center;
  width: max-content;
  margin: 0 auto;
  padding: 5px 30px;
  border: 1px solid $lightBlack;
  border-radius: 20px;

  @media (min-width: $tablet) {
    font-size: 34px;
    line-height: 37px;
  }

  @media (min-width: $desktop) {
    font-size: 40px;
    line-height: 43px;
  }
}

.masters__description {
  font-size: 18px;
  line-height: 21px;
  width: max-content;
  margin: 25px auto 0 auto;

  @media (min-width: $tablet) {
    font-size: 21px;
    line-height: 24px;
    margin: 35px auto 0 auto;
  }

  @media (min-width: $desktop) {
    font-size: 25px;
    line-height: 28px;
    margin: 45px auto 0 auto;
  }
}

.masters__list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  list-style: none;
  margin-top: 35px;

  @media (min-width: $tablet) {
    row-gap: 30px;
    margin-top: 50px;
  }

  @media (min-width: $desktop) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 50px;
    margin-top: 70px;
  }
}

.masters__item {
  text-align: center;
  color: $whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 15px;

  >.masters__master-title {
    color: $lightBlack;
  }

  &:nth-child(1) {
    background-color: $red;
  }

  &:nth-child(2) {
    background-color: $blueviolet;
  }

  &:nth-child(3) {
    background-color: $grey3;
  }

  &:nth-child(4) {
    background-color: $pink;
  }

  @media (min-width: $tablet) {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: repeat(3, auto);
    align-items: center;
    justify-items: center;

    &:nth-child(even) {
      grid-template-columns: 1fr 300px;

      .masters__master-img {
        grid-column: 2;
      }
    }
  }

  @media (min-width: $desktop) {
    display: flex;
    width: 450px;
    padding: 30px;
  }
}

.masters__master-img {
  border-radius: 15px;

  @media (min-width: $tablet) {
    grid-row: 1/-1; 
  }

  @media (min-width: $desktop) {
    width: 350px;
    height: 450px;
  }
}

.masters__master-title {
  font-family: $decorTitle;
  font-size: 26px;
  line-height: 29px;
  letter-spacing: 2px;
  margin-top: 5px;

  @media (min-width: $tablet) {
    font-size: 30px;
    line-height: 33px;
  }

  @media (min-width: $desktop) {
    font-size: 35px;
    line-height: 38px;
  }
}

.masters__master-status {
  margin-top: 10px;
  padding: 4px 10px;
  border: 1px solid $lightBlack;
  border-radius: 20px;
}

.masters__master-description {
  text-align: justify;
  margin-top: 15px;

  @media (min-width: $tablet) {
    margin: 0;
  }

  @media (min-width: $desktop) {
    margin-top: 40px;
  }
}
</style>