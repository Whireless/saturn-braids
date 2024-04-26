<script>
  import { useGlobalStore } from '/src/store';

  export default {
    setup() {
      const { readyList } = useGlobalStore();
      return {
        readyList,
      }
    },
  }
</script>

<template>
  <section class="promotions">
    <div class="container">
      <h2 class="promotions__title">Акции</h2>
      <p class="promotions__description">Проводимые акции для клиентов</p>
      <article class="promotions__actions">
        <h3 class="promotions__subtitle">Карта клиента</h3>
        <img class="promotions__img" src="/img/actions/action1.jpeg" width="335" height="210" alt="Скидочная карта постоянным клиентам">
        <p class="promotions__action-info">
          После 1го посещения нашей студии вы получаете скидочную карту постоянного клиента,
          на которой мы ставим отметки после каждого вашего посещения,
          что даёт возможность получить скидку на заплетение при последующих посещениях студии.
          3е посещение - скидка <span class="promotions__percent">10%</span>, 5е посещение - скидка <span class="promotions__percent">20%</span>.
        </p>
      </article>
    </div>
  </section>
</template>

<style lang="scss">
.promotions {
  padding: 40px 0;
}

.promotions__title {
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

.promotions__description {
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

.promotions__actions {
  margin: 35px auto 0 auto;

  @media (min-width: $tablet) {
    margin: 50px auto 0 auto;
  }

  @media (min-width: $desktop) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 40px 330px;
    column-gap: 30px;
    margin: 70px auto 0 auto;
  }
}

.promotions__subtitle {
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
    order: 1;
    height: max-content;
  }
}

.promotions__img {
  display: block;
  margin: 20px auto;

  @media (min-width: $tablet) {
    width: 668px;
    height: 380px;
  }

  @media (min-width: $desktop) {
    margin: 0 auto;
  }
}

.promotions__action-info {
  text-align: justify;

  @media (min-width: $desktop) {
    grid-column: 2;
    grid-row: 2;
    margin-top: 80px;
    order: 2;
  }
}

.promotions__percent {
  color: $blueviolet;
}
</style>
