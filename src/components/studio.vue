<script>
  import { useGlobalStore } from '/src/store';
  import goBraid from './buttons/goBraid.vue';

  import { animate, onScroll, utils } from 'animejs';

  export default {
    setup() {
      const { advantages, favorite } = useGlobalStore();
      return {
        advantages,
        favorite,
      }
    },
    components: {
      goBraid,
    },
    mounted() {

      // Анимация заголовка

      animate('.studio__title', {
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

      // Анимация блоков преимуществ

      const blocks = utils.$('.studio__block');

      blocks.forEach(block => {
        animate(block, {
          opacity: [0, 1],
          y: [70, 0],
          autoplay: onScroll({
            enter: 'center -190px',
            leave: 'center center',
            alternate: true,
            sync: true,
            // debug: true,
          }),
        });
      });

      if (window.matchMedia('(min-width: 767px)').matches) {
        const icons = utils.$('.studio__icon');

        icons.forEach((icon) => {
          animate(icon, {
            opacity: [0, 1],
            // y: [-50, 0],
            autoplay: onScroll({
              enter: 'center -150px',
              leave: 'center center',
              alternate: true,
              sync: true,
              // debug: true,
            }),
          });
        });
      }
    },
  }
</script>
<template>
	<section class="studio" id="studio">
		<div class="container">
			<h2 class="studio__title">О студии</h2>
      <article class="studio-info studio-info--advantages">
        <div class="studio__block">
          <h3 class="studio__suptitle studio__suptitle--advantages">Наши преимущества</h3>
          <ul class="studio__list studio__list--advantages">
            <li class="studio__item studio__item--advantages" v-for="item in advantages" :key="item">
              <b>{{ item.suptitle }}</b>: {{ item.description }}
            </li>
          </ul>
        </div>
        <svg class="studio__icon studio__icon--advantages" width="320" height="320">
          <use href="#advantage"></use>
        </svg>
      </article>
      <article class="studio-info studio-info--favorite">
        <svg class="studio__icon studio__icon--favorite" width="285" height="285">
          <use href="#favorite"></use>
        </svg>
        <div class="studio__block">
          <h3 class="studio__suptitle studio__suptitle--favorite">Почему выбирают нас</h3>
          <ul class="studio__list studio__list--favorite">
            <li class="studio__item studio__item--favorite" v-for="item in favorite" :key="item">
              <b>{{ item.suptitle }}</b>: {{ item.description }}
            </li>
          </ul>
        </div>
      </article>
      <!-- <go-braid></go-braid> -->
		</div>
	</section>
</template>
<style lang="scss">
  .studio {
    scroll-margin-top: 3em;
  }

.studio-info {
  margin-top: 35px;

  &--favorite {
    margin-top: 25px;
    margin-bottom: 15px;
  }

  @media (min-width: $tablet) {
    display: flex;
    justify-content: space-between;
    width: 688px;
    margin: 45px auto 0 auto;

    &--favorite {
      margin-top: 40px;
      margin-bottom: 35px;
    }
  }

  @media (min-width: $desktop) {
    width: 1160px;
    margin: 65px auto 0 auto;

    &--favorite {
      margin-top: 55px;
    }
  }

  @media (min-width: $laptop) {
    width: 1620px;
    margin-top: 85px;

    &--favorite {
      margin-top: 90px;
      margin-bottom: 65px;
    }
  }
}

.studio__icon {
  display: none;

  @media (min-width: $tablet) {
    display: block;

    align-self: center;
  }

  @media (min-width: $desktop) {
    &--advantages {
      width: 470px;
      height: 470px;
    }

    &--favorite {
      width: 480px;
      height: 400px;
    }
  }

  @media (min-width: $laptop) {
    &--advantages {
      width: 580px;
      height: 580px;
    }

    &--favorite {
      width: 630px;
      height: 530px;
    }
  }
}

.studio__description {
	margin-top: 20px;
}

.studio__suptitle {
  text-align: center;

  @media (min-width: $tablet) {
    width: 390px;

    &--advantages {
      text-align: center;
    }

    &--favorite {
      margin-left: auto;
    }
  }

  @media (min-width: $desktop) {
    width: 600px;
  }

  @media (min-width: $laptop) {
    width: 900px;
  }
}

.studio__list {
  text-align: justify;
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 15px;

  @media (min-width: $tablet) {
    width: 390px;
    row-gap: 15px;
    margin-top: 25px;
  }

  @media (min-width: $desktop) {
    width: 600px;
    row-gap: 25px;
    margin-top: 35px;
  }

  @media (min-width: $laptop) {
    row-gap: 40px;
    width: 900px;
  }
}

.studio__item {
  font-weight: 300;
}
</style>