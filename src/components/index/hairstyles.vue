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
  <article class="hairstyles" id="hairstyles">
    <div class="container">
      <h2 class="hairstyles__title">Виды причесок</h2>
      <ul class="hairstyles__list">
        <li class="hairstyles__item"
            v-for="li in hairstyles"
            :key="li">
          <img :src="li.img"
              :alt="li.alt"
              class="hairstyles__img"
              width="330" height="320">
          <div class="hairstyles__intro">
            <svg class="hairstyles__icon" width="40" height="40">
              <use href="#braids"></use>
            </svg>
            <h3 class="hairstyles__subtitle">{{ li.title }}</h3>
          </div>
          <p class="hairstyles__info">{{ li.desc }}</p>
          <span class="hairstyles__price">{{ li.price }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<style lang="scss">
.hairstyles__title {
  font-family: $decorTitle;
  font-size: 37px;
  line-height: 40px;
  letter-spacing: 1px;
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

  @media (min-width: $laptop) {
    row-gap: 120px;
    margin: 90px 0 0 0;
  }
}

.hairstyles__item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  transition: 0.4s;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    height: 1px;
    width: 100%;
    background-color: $grey;
    border-radius: 5px;
  }

  @media (min-width: $tablet) {
    display: grid;
    grid-template-columns: 330px 330px;
    grid-template-rows: repeat(3, auto);
    justify-content: space-between;
    row-gap: 50px;

    &:nth-child(even) {
      grid-template-columns: 330px 330px;
      
      .hairstyles__img {
        grid-column: 2;
      }
    }

    &::after {
      bottom: -20px;
    }
  }

  @media (min-width: $desktop) {
    grid-template-columns: 520px 560px;
    transition: 0.4s;

    &:nth-child(even) {
      grid-template-columns: 560px 520px;
    }
  }

  @media (min-width: $laptop) {
    grid-template-columns: 620px 750px;

    &:nth-child(even) {
      grid-template-columns: 750px 620px;
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

  @media (min-width: $laptop) {
    width: 620px;
    height: 590px;
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

  @media (min-width: $desktop) {
    column-gap: 25px;
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
  font-family: $decorTitle;
  font-size: 26px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 2px;
  position: relative;

  @media (min-width: $tablet) {
    font-size: 32px;
    line-height: 35px;
    width: max-content;

    justify-self: center;
  }

  @media (min-width: $desktop) {
    font-size: 42px;
    line-height: 45px;
  }

  @media (min-width: $laptop) {
    font-size: 52px;
    line-height: 55px;
  }
}

.hairstyles__info {
  font-weight: 300;
  text-align: justify;

  @media (min-width: $tablet) {
    font-size: 20px;
    line-height: 28px;
  }

  @media (min-width: $desktop) {
    font-size: 26px;
    line-height: 33px;
  }

  @media (min-width: $laptop) {
    font-size: 37px;
    line-height: 42px;
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

  @media (min-width: $laptop) {
    padding: 10px 20px;
  }
}
</style>