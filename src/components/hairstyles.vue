<script>
  import { useGlobalStore } from '/src/store';

  import { animate, onScroll, stagger, utils } from 'animejs';

  export default {
    setup() {
      const { hairstyles } = useGlobalStore();
      return {
        hairstyles,
      }
    },
    mounted() {

      // Анимация заголовка

      animate('.hairstyles__title', {
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

      // Анимация причёсок

      const items = utils.$('.hairstyles__item');

      if (window.matchMedia('(min-width: 370px)').matches) {
        items.forEach((item, i) => {
          if (i % 2 == 0) {
            animate(item, {
              x: [-70, 0],
              opacity: [0, 1],
              autoplay: onScroll({
                enter: 'center -80px',
                leave: 'center center',
                alternate: true,
                sync: true,
                // debug: true,
              }),
            });
          } else {
            animate(item, {
              x: [70, 0],
              opacity: [0, 1],
              autoplay: onScroll({
                enter: 'center -80px',
                leave: 'center center',
                alternate: true,
                sync: true,
                // debug: true,
              }),
            });
          }
        });
      }

      if (window.matchMedia('(min-width: 1279px)').matches) {
        items.forEach((item, i) => {
          if (i <= 2) {
            animate(item, {
              opacity: [0, 1],
              x: [-100, 0],
              autoplay: onScroll({
                enter: 'center -150px',
                leave: 'center center',
                alternate: true,
                sync: true,
                // debug: true,
              }),
            });
          } else {
            animate(item, {
              opacity: [0, 1],
              x: [100, 0],
              autoplay: onScroll({
                enter: 'center -150px',
                leave: 'center center',
                alternate: true,
                sync: true,
                // debug: true,
              }),
            });
          }
        });
      }
    },
  }
</script>

<template>
  <article class="hairstyles" id="hairstyles">
    <div class="container">
      <h2 class="hairstyles__title">Виды причёсок</h2>
      <ul class="hairstyles__list">
        <li class="hairstyles__item"
            v-for="li in hairstyles"
            :key="li">
          <img :src="li.img"
              :alt="li.alt"
              class="hairstyles__img"
              width="345" height="325">
          <div class="hairstyles__intro">
            <!-- <svg class="hairstyles__icon" width="40" height="40">
              <use href="#braids"></use>
            </svg> -->
            <h3 class="hairstyles__subtitle">{{ li.title }}</h3>
            <span class="hairstyles__price">{{ li.price }}</span>
          </div>
          <p class="hairstyles__info">{{ li.desc }}</p>
          <!-- <span class="hairstyles__price">{{ li.price }}</span> -->
        </li>
      </ul>
    </div>
  </article>
</template>

<style lang="scss">
  .hairstyles {
    scroll-margin-top: 3em;
  }

.hairstyles__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  margin: 35px 0 0 0;

  overflow: hidden;

  @media (min-width: $tablet) {
    row-gap: 50px;
    column-gap: 25px;
    // row-gap: 0;
    margin: 45px 0 0 0;

    align-items: start;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media (min-width: $desktop) {
    margin: 65px 0 0 0;
  }

  @media (min-width: $laptop) {
    gap: 50px;
    margin: 85px 0 0 0;
  }
}

.hairstyles__item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 345px;
  border-radius: 30px;

  @media (min-width: $tablet) {
    height: max-content;
    width: 330px;
  }

  @media (min-width: $desktop) {
    width: 355px;
  }

  @media (min-width: $laptop) {
    width: 520px;
  }
}

.hairstyles__img {
  @media (min-width: $tablet) {
    object-fit: cover;
    width: inherit;
    height: 365px;
  }

  @media (min-width: $laptop) {
    height: 485px;
  }
}

.hairstyles__intro {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;

  @media (min-width: $tablet) {
    column-gap: 16px;
  }

  @media (min-width: $laptop) {
    column-gap: 35px;
  }
}

.hairstyles__icon {
  @media (min-width: $tablet) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: $desktop) {
    width: 65px;
    height: 65px;
  }

  @media (min-width: $laptop) {
    width: 80px;
    height: 80px;
  }
}

.hairstyles__subtitle {
  @media (min-width: $tablet) {
    width: max-content;
  }
}

.hairstyles__info {
  font-weight: 300;
  text-align: justify;
}

.hairstyles__price {
  display: block;
  width: max-content;
  margin: 0 auto;
  padding: 3px 7px;
  border: 1px solid $lightBlack;
  // border-radius: 30px;
  border-radius: 7px;

  @media (min-width: $tablet) {
    padding: 2px 9px;
  }

  @media (min-width: $desktop) {
    padding: 3px 10px;
  }

  @media (min-width: $laptop) {
    padding: 5px 15px;
  }
}
</style>