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
  padding: 285px 0 200px 0;

  @media (min-width: $tablet) {
    padding: 260px 0 230px 0;
  }

  @media (min-width: $desktop) {
    background-position: center;
    padding: 260px 0 230px 0;
  }

  @media (min-width: $laptop) {
    padding: 330px 0 250px 0;
  }
}

.intro__info {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 43%;
    bottom: -90px;
    background-image: url("/icons/arrow.svg");
    width: 50px;
    height: 60px;
    background-repeat: no-repeat;
    background-size: contain;
    animation: arrow 3s infinite linear;

    @media (min-width: $tablet) {
      left: 46%;
      bottom: -105px;
    }

    @media (min-width: $desktop) {
      left: 48%;
    }
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
    font-size: 42px;
    line-height: 45px;
  }
}

.intro__description {
  margin-top: 10px;
  margin-bottom: 50px;

  @media (min-width: $tablet) {
    margin-top: 15px;
    margin-bottom: 65px;
  }

  @media (min-width: $desktop) {
    font-size: 24px;
    line-height: 27px;
    margin-top: 25px;
    margin-bottom: 75px;
  }

  @media (min-width: $laptop) {
    font-size: 26px;
    line-height: 29px;
    margin-top: 30px;
    margin-bottom: 85px;
  }
}
</style>