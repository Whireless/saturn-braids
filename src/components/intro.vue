<script>
  import goBraid from './buttons/goBraid.vue';

  import { animate } from 'animejs';

  export default {
    components: {
      goBraid,
    },
    mounted() {

      // setTimeout(() => {
      //   animate('.intro__info', {
      //     scale: [0.4, 1],
      //     opacity: [0, 1],
      //     delay: 500,
      //   });

      //   animate('.intro__best', {
      //     opacity: [0, 1],
      //     y: [-70, 0],
      //     delay: 1500,
      //   });
      // }, 2000);

      //////////////////////////////////////

      animate('.intro__info', {
        scale: [0.4, 1],
        opacity: [0, 1],
        delay: 600,
      });

      animate('.intro__best', {
        opacity: [0, 1],
        y: [-70, 0],
        delay: 1400,
      });
    },
  }
</script>

<template>
  <article class="intro">
    <div class="container">
      <span class="intro__best">*по мнению наших клиентов ✨</span>
      <section class="intro__info">
        <!-- <h1 class="intro__title"><span class="intro__title-decor">Saturn Braids</span> <br> Студия афропричёсок</h1> -->

        <!-- <h1 class="intro__title">Студия афропричёсок <span class="intro__title-decor">Saturn Braids</span></h1>
        <p class="intro__description">Делаем лучшие причёски в Питере!</p> -->

        <h1 class="intro__title">Saturn Braids</h1>
        <p class="intro__description">Пожалуй, лучшая студия афропричёсок в Питере!*</p>
        <go-braid></go-braid>
        <a href="#hairstyles">
          <svg class="intro__arrow" fill="whitesmoke" width="50" height="60">
            <use href="#arrow"></use>
          </svg>
        </a>
      </section>
    </div>
  </article>
</template>

<style lang="scss">
.intro {
  position: relative;
  color: $whitesmoke;
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../img/intro-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 70px;
  scroll-margin-top: 3em;

  @media (min-width: $tablet) {
    margin-top: 80px;
  }

  @media (min-width: $desktop) {
    background-position: center;
    margin-top: 95px;
  }

  @media (min-width: $laptop) {
    margin-top: 140px;
  }
}

.intro__best {
  font-weight: 100;
  position: absolute;
  top: 10px;
  right: 15px;
  width: max-content;

  @media (min-width: $tablet) {
    right: 40px;
  }

  @media (min-width: $desktop) {
    right: 60px;
  }

  @media (min-width: $laptop) {
    right: 120px;
  }
}

// .intro__title {
//   font-size: 25px;
//   line-height: 28px;

//   @media (min-width: $tablet) {
//     font-size: 30px;
//     line-height: 33px;
//   }

//   @media (min-width: $desktop) {
//     font-size: 38px;
//     line-height: 41px;
//   }

//   @media (min-width: $laptop) {
//     font-size: 53px;
//     line-height: 56px;
//   }
// }

.intro__title {
  font-family: $decorTitle;
  font-size: 42px;
  line-height: 45px;

  @media (min-width: $tablet) {
    font-size: 50px;
    line-height: 53px;
  }

  @media (min-width: $desktop) {
    font-size: 60px;
    line-height: 63px;
  }

  @media (min-width: $laptop) {
    font-size: 75px;
    line-height: 78px;
  }
}

// .intro__title-decor {
//   font-family: $decorTitle;
//   font-size: 50px;
//   line-height: 44px;

//   color: transparent;
//   background: $gradient1;
//   background-clip: text;
//   animation: gradient 3s infinite linear;
//   background-size: 400%;
// }

.intro__description {
  // font-weight: 300;
  margin-top: 15px;
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
    margin-top: 40px;
    margin-bottom: 95px;
  }
}

.intro__arrow {
  margin-top: 40px;
  animation: arrow 2s infinite linear;

  @media (min-width: $tablet) {
    margin-top: 45px;
  }

  @media (min-width: $desktop) {
    margin-top: 50px;
  }

  @media (min-width: $laptop) {
    width: 80px;
    height: 90px;
    margin-top: 55px;
  }
}
</style>