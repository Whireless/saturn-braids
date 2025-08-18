<script>
  // import goBraid from './buttons/goBraid.vue';
  import { useGlobalStore } from '../store';

  import { animate, onScroll, utils } from 'animejs';

  export default {
    setup() {
      const { faqList } = useGlobalStore();
      return {
        faqList,
      }
    },
    mounted() {

      // Анимация заголовка

      animate('.faq__title', {
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

      // Анимация появления вопросов

      const questions = utils.$('.faq__details');

      questions.forEach(question => {
        animate(question, {
          opacity: [0, 1],
          x: [-50, 0],
          autoplay: onScroll({
            enter: 'center -120px',
            leave: 'center center',
            alternate: true,
            sync: true,
            // debug: true,
          }),
        });
      });
    },
    components: {
      // goBraid,
    },
  }
</script>

<template>
  <section class="faq" id="faq">
    <div class="container">
      <h2 class="faq__title">F . A . Q</h2>
      <article class="faq__block">
        <details class="faq__details"
            v-for="li in faqList"
            :key="li">
          <summary class="faq__question">
            <svg class="faq__star-icon" width="25" height="25">
              <use href="#star"></use>
            </svg>
            {{ li.question }}
          </summary>
          <p class="faq__answer">{{ li.answer }}</p>
        </details>
      </article>
      <!-- <p class="faq__go-braid">Развеял(а) свои сомнения и решился(ась)?</p>
      <go-braid></go-braid> -->
    </div>
  </section>
</template>

.<style lang="scss">
.faq {
  margin: 0 auto;
  scroll-margin-top: 3em;
}

.faq__block {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 35px;

  @media (min-width: $tablet) {
    row-gap: 25px;
    margin-top: 45px;
  }

  @media (min-width: $desktop) {
    row-gap: 30px;
    margin-top: 65px;
  }

  @media (min-width: $laptop) {
    margin-top: 85px;
  }
}

.faq__details {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 323px;
  border: 1px solid $lightBlack;
  border-radius: 7px;
  list-style: none;

  &[open] {
    .faq__question {
      .faq__star-icon {
        transform: rotate(180deg);
      }
    }
  }

  @media (min-width: $tablet) {
    width: 620px;
  }

  @media (min-width: $desktop) {
    width: 950px;
    margin: 0 auto;
  }

  @media (min-width: $laptop) {
    width: 1400px;
  }
}

.faq__question {
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  cursor: pointer;
  list-style: none;
  padding: 12px;

  ///////// Скрытие стрелочек для IOS

  &::-webkit-details-marker {
    display: none;
  }

  /////////

  @media (min-width: $tablet) {
    font-size: 25px;
    line-height: 28px;
    column-gap: 20px;
    padding: 15px;
  }

  @media (min-width: $desktop) {
    font-size: 30px;
    line-height: 33px;
    column-gap: 25px;
    padding: 20px 25px;
  }

  @media (min-width: $laptop) {
    font-size: 35px;
    line-height: 38px;
    column-gap: 35px;
    padding: 30px;
  }
}

.faq__star-icon {
  transform: rotate(0);
  transition: 0.4s;

  @media (min-width: $tablet) {
    width: 30px;
    height: 30px;
  }

  @media (min-width: $laptop) {
    width: 42px;
    height: 42px;
  }
}

.faq__answer {
  font-weight: 300;
  text-align: justify;
  padding: 15px;
  border-top: 1px solid $lightBlack;

  @media (min-width: $tablet) {
    padding: 20px;
  }

  @media (min-width: $desktop) {
    padding: 25px;
  }

  @media (min-width: $laptop) {
    padding: 30px;
  }
}

// .faq__go-braid {
//   font-size: 18px;
//   line-height: 21px;
//   font-weight: 300;
//   width: max-content;
//   margin: 30px auto 20px auto;

//   @media (min-width: $tablet) {
//     font-size: 21px;
//     line-height: 24px;
//     margin: 40px auto 30px auto;
//   }

//   @media (min-width: $desktop) {
//     font-size: 25px;
//     line-height: 28px;
//     margin: 50px auto 40px auto;
//   }
// }
</style>