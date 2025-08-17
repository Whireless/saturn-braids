<script>
  import { useGlobalStore } from '/src/store';

  import { animate, onScroll, utils } from 'animejs';

  export default {
    setup() {
      const { mastersList } = useGlobalStore();
      return {
        mastersList,
      }
    },
    mounted() {

      // Анимация заголовка

      animate('.masters__title', {
        opacity: [0, 1],
        scale: [0, 1.2, 1],
        autoplay: onScroll({
          enter: 'center -200px',
          leave: 'center center',
          alternate: true,
          sync: true,
          // debug: true,
        }),
      });

      // Анимация появления мастеров

      const masters = utils.$('.masters__item');

      masters.forEach(master => {
        animate(master, {
          opacity: [0, 1],
          // y: [50, 0],
          autoplay: onScroll({
            enter: 'center -100px',
            leave: 'center center',
            alternate: true,
            sync: true,
            // debug: true,
          }),
        });
      });
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
               width="130" height="130"
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
  margin: 0 auto;
}

.masters__list {
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  width: 100%;
  list-style: none;
  margin-top: 35px;

  @media (min-width: $tablet) {
    margin-top: 45px;
  }

  @media (min-width: $desktop) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1160px;
    margin-top: 65px;
  }

  @media (min-width: $laptop) {
    margin-top: 85px;
    width: 1680px;
  }
}

.masters__item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  // border-radius: 50%;

  >.masters__master-title {
    color: $lightBlack;
  }

  @media (min-width: $tablet) {
    flex-direction: row;
    column-gap: 58px;
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
  }

  @media (min-width: $desktop) {
    width: 220px;
    height: 220px;
  }

  @media (min-width: $laptop) {
    width: 320px;
    height: 320px;
  }
}

.masters__master-info {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media (min-width: $tablet) {
    row-gap: 20px;
    width: 400px;
  }

  @media (min-width: $desktop) {
    width: 360px;
  }

  @media (min-width: $laptop) {
    width: 500px;
  }
}

.masters__master-status {
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 15px;
  border: 1px solid $lightBlack;
  border-radius: 7px;

  @media (min-width: $desktop) {
    height: 65px;
    padding: 8px 15px;
  }

  @media (min-width: $laptop) {
    height: 90px;
    padding: 11px 15px;
  }
}
</style>