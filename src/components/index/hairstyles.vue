<script>
  import { useGlobalStore } from '/src/store';

  export default {
    setup() {
      const { hairstyles } = useGlobalStore();
      return {
        hairstyles,
      }
    },
  }
</script>

<template>
  <article class="hairstyles">
    <div class="container">
      <h2 class="hairstyles__title">О причёсках</h2>
      <p class="hairstyles__description">Немного подробнее о том, что мы делаем</p>
      <ul class="hairstyles__list">
        <li class="hairstyles__item"
            v-for="li in hairstyles"
            :key="li">
          <img :src="li.img"
              :alt="li.alt"
              class="hairstyles__img"
              width="335" height="320">
          <h3 class="hairstyles__subtitle">{{ li.title }}</h3>
          <p class="hairstyles__info">{{ li.desc }}</p>
          <span class="hairstyles__price">{{ li.price }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<style lang="scss">
.hairstyles {
  padding: 40px 0;

  @media (min-width: $tablet) {
    padding: 50px 0;
  }

  @media (min-width: $desktop) {
    padding: 70px 0;
  }
}

.hairstyles__title {
  font-family: $decorTitle;
  font-size: 30px;
  line-height: 33px;
  letter-spacing: 1px;
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

.hairstyles__description {
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

.hairstyles__list {
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  margin: 35px 0 0 0;

  @media (min-width: $tablet) {
    row-gap: 80px;
    margin: 50px 0 0 0;
  }

  @media (min-width: $desktop) {
    row-gap: 90px;
    margin: 70px 0 0 0;
  }
}

.hairstyles__item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    height: 1px;
    width: 100%;
    background-color: $grey;
    border-radius: 5px;
  }

  @media (min-width: $tablet) {
    display: grid;
    grid-template-columns: 335px 310px;
    grid-template-rows: repeat(4, auto);
    justify-content: space-between;
    row-gap: 50px;

    &:nth-child(even) {
      grid-template-columns: 310px 335px;
      
      .hairstyles__img {
        grid-column: 2;
      }
    }
  }

  @media (min-width: $desktop) {
    grid-template-columns: 520px 420px;

    &:nth-child(even) {
      grid-template-columns: 420px 520px;
    }
  }
}

.hairstyles__img {
  @media (min-width: $tablet) {
    grid-row: 1/-1;
    height: 365px;
  }

  @media (min-width: $desktop) {
    width: 520px;
    height: 490px;
  }
}

.hairstyles__subtitle {
  font-family: $decorTitle;
  font-size: 26px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 2px;

  @media (min-width: $tablet) {
    font-size: 30px;
    line-height: 33px;
  }

  @media (min-width: $desktop) {
    font-size: 35px;
    line-height: 38px;
    margin-top: 100px;
  }
}

.hairstyles__info {
  text-align: justify;

  @media (min-width: $tablet) {
    margin-top: 20px;
  }

  @media (min-width: $desktop) {
    margin-top: 0;
  }
}

.hairstyles__price {
  display: block;
  width: max-content;
  margin: 0 auto;
  padding: 3px 7px;
  border: 1px solid $lightBlack;
  border-radius: 30px;

  @media (min-width: $tablet) {
    padding: 4px 9px;
  }

  @media (min-width: $desktop) {
    padding: 5px 11px;
  }
}
</style>