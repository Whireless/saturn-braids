<script>
  import goBraid from '../buttons/goBraid.vue';

  export default {
    components: {
      goBraid,
    },
  }
</script>

<template>
  <article class="intro">
    <div class="container">
      <section class="intro__info">
        <h1 class="intro__title">Студия афропричёсок Saturn Braids</h1>
        <p class="intro__description">Делаем лучшие причёски в Питере!</p>
        <go-braid></go-braid>
        <svg class="intro__arrow" width="50" height="60">
          <use href="#arrow"></use>
        </svg>
      </section>
    </div>
  </article>
</template>

<style lang="scss">
.intro {
  color: $whitesmoke;
  text-align: center;
  background-image: url("../img/intro-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 260px 0 220px 0;

  @media (min-width: $tablet) {
    padding: 220px 0 230px 0;
  }

  @media (min-width: $desktop) {
    background-position: center;
  }

  @media (min-width: $laptop) {
    padding: 320px 0 320px 0;
  }
}

.intro__title {
  font-size: 25px;
  line-height: 28px;

  @media (min-width: $tablet) {
    font-size: 30px;
    line-height: 33px;
  }

  @media (min-width: $desktop) {
    font-size: 38px;
    line-height: 41px;
  }

  @media (min-width: $laptop) {
    font-size: 53px;
    line-height: 56px;
  }
}

.intro__description {
  font-weight: 300;
  margin-top: 10px;
  margin-bottom: 50px;

  @media (min-width: $tablet) {
    margin-top: 15px;
    margin-bottom: 65px;
  }

  @media (min-width: $desktop) {
    font-size: 25px;
    line-height: 28px;
    margin-top: 25px;
    margin-bottom: 75px;
  }

  @media (min-width: $laptop) {
    font-size: 37px;
    line-height: 40px;
    margin-top: 30px;
    margin-bottom: 85px;
  }
}

.intro__arrow {
  margin-top: 35px;
  animation: arrow 2s infinite linear;

  @media (min-width: $tablet) {
    margin-top: 40px;
  }

  @media (min-width: $desktop) {
    margin-top: 45px;
  }
}
</style>