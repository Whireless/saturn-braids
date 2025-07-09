<script>
  import goBraid from './buttons/goBraid.vue';
  import { useGlobalStore } from '../store';

  import { gsap, ScrollTrigger } from 'gsap/all';
  gsap.registerPlugin(ScrollTrigger);

  export default {
    setup() {
      const { faqList } = useGlobalStore();
      return {
        faqList,
      }
    },
    mounted() {
      const afterLoad = gsap.timeline({delay: 0.3});

      const answers = gsap.utils.toArray('.faq__details');

      afterLoad
      .from(answers, {
        y: '-30%',
        opacity: 0,
        stagger: 0.3,
      })
    },
    components: {
      goBraid,
    },
  }
</script>

<template>
  <section class="faq">
    <div class="container">
      <h2 class="faq__title">F . A . Q</h2>
      <article class="faq__faq-block">
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
      <p class="faq__go-braid">Развеял(а) свои сомнения и решился(ась)?</p>
      <go-braid></go-braid>
    </div>
  </section>
</template>

.<style lang="scss">
.faq {
  margin: 70px auto 0 auto;

  @media (min-width: $tablet) {
    margin: 80px auto 0 auto;
  }

  @media (min-width: $desktop) {
    margin: 95px auto 0 auto;
  }

  @media (min-width: $laptop) {
    margin: 150px auto 0 auto;
  }
}

.faq__title {
  font-family: $decorTitle;
  font-size: 37px;
  line-height: 40px;
  letter-spacing: 2px;
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

.faq__faq-block {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-top: 35px;

  @media (min-width: $tablet) {
    margin-top: 50px;
  }

  @media (min-width: $desktop) {
    row-gap: 40px;
    margin-top: 70px;
  }

  @media (min-width: $laptop) {
    margin-top: 90px;
  }
}

.faq__details {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 323px;
  padding: 10px;
  border: 1px solid $lightBlack;
  border-radius: 20px;
  list-style: none;

  &[open] {
    .faq__question {
      .faq__star-icon {
        transform: rotate(180deg);
      }
    }
  }

  @media (min-width: $tablet) {
    width: 580px;
  }

  @media (min-width: $desktop) {
    width: 800px;
    margin: 0 auto;
  }

  @media (min-width: $laptop) {
    width: 1100px;
    padding: 20px;
  }
}

.faq__question {
  font-family: $decorTitle;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 2px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  cursor: pointer;
  list-style: none;

  // Скрытие стрелочек для IOS

  &::-webkit-details-marker {
    display: none;
  }

  ////

  @media (min-width: $tablet) {
    font-size: 30px;
    line-height: 33px;
    column-gap: 20px;
  }

  @media (min-width: $desktop) {
    font-size: 35px;
    line-height: 38px;
    column-gap: 25px;
  }

  @media (min-width: $laptop) {
    font-size: 40px;
    line-height: 45px;
    column-gap: 35px;
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

  @media (min-width: $tablet) {
    padding: 20px 15px;
  }

  @media (min-width: $desktop) {
    padding: 25px 15px;
  }
}

.faq__go-braid {
  font-size: 18px;
  line-height: 21px;
  font-weight: 300;
  width: max-content;
  margin: 30px auto 20px auto;

  @media (min-width: $tablet) {
    font-size: 21px;
    line-height: 24px;
    margin: 40px auto 30px auto;
  }

  @media (min-width: $desktop) {
    font-size: 25px;
    line-height: 28px;
    margin: 50px auto 40px auto;
  }
}
</style>