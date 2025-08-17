<script>
  import { useGlobalStore } from '/src/store';

  export default {
    setup() {
      const { promotions } = useGlobalStore();
      return {
        promotions
      }
    },
  }
</script>

<template>
  <section class="promotions">
    <div class="container">
      <h2 class="promotions__title">Акции</h2>
      <ul class="promotions__list">
        <li :class="['promotions__item',{'promotions__item--inactive': !item.active}]" v-for="item in promotions" :key="item">
          <img class="promotions__img" src="/img/promotions/clientCard.jpeg" width="100%" height="210" alt="Изображение акции">
          <h3 class="promotions__suptitle">{{ item.title }}</h3>
          <p class="promotions__description">{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.promotions__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  margin: 35px auto 0 auto;

  @media (min-width: $tablet) {
    row-gap: 20px;
    column-gap: 30px;
    margin: 40px auto 0 auto;
  }

  @media (min-width: $desktop) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 35px;
    justify-content: center;
  }

  @media (min-width: $laptop) {
    margin: 50px auto 0 auto;
  }
}

.promotions__item {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 18px;
  border: 2px solid $blueviolet;
  border-radius: 20px;

  &--inactive {
    border: 2px solid $grey;
    opacity: 0.5;
  }

  @media (min-width: $tablet) {
    width: 636px;
    padding: 24px;
  }

  @media (min-width: $desktop) {
    // row-gap: 16px;
    width: 514px;
    padding: 22px;
  }

  @media (min-width: $laptop) {
    row-gap: 30px;
    width: 680px;
    padding: 50px 28px 28px 28px;
  }
}

.promotions__number {
  align-self: center;

  @media (min-width: $tablet) {
    width: 60px;
    height: 60px;
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

.promotions__img {
  @media (min-width: $tablet) {
    height: 360px;
  }

  @media (min-width: $desktop) {
    height: 310px;
  }

  @media (min-width: $laptop) {
    height: 400px;
  }
}

.promotions__suptitle {
  font-family: $decorTitle;
  font-size: 26px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 2px;

  @media (min-width: $tablet) {
    font-size: 30px;
    line-height: 31px;
    flex-basis: 100%;
  }

  @media (min-width: $desktop) {
    font-size: 39px;
    line-height: 40px;
    height: max-content;
  }

  @media (min-width: $laptop) {
    font-size: 44px;
    line-height: 46px;
  }
}

.promotions__description {
  text-align: justify;
  font-weight: 300;
}

// .promotions__percent {
//   color: $blueviolet;
// }
</style>
