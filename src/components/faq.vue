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
      const afterLoad = gsap.timeline({delay: 0.8});

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
      <p class="faq__description">Часто задаваемые вопросы</p>
      <article class="faq__faq-block">
        <details class="faq__details"
            v-for="li in faqList"
            :key="li">
          <summary class="faq__question" >{{ li.question }}</summary>
          <p class="faq__answer">{{ li.answer }}</p>
        </details>
      </article>
      <p class="faq__go-braid">Развеяла свои сомнения и решилась?</p>
      <go-braid></go-braid>
    </div>
  </section>
</template>

.<style lang="scss">
.faq {
  margin: 90px auto 0 auto;
  padding: 30px 0;

  @media (min-width: $tablet) {
    margin: 100px auto 0 auto;
    padding: 50px 0;
  }

  @media (min-width: $desktop) {
    margin: 105px auto 0 auto;
    padding: 70px 0;
  }

  @media (min-width: $laptop) {
    margin: 115px auto 0 auto;
  }
}

.faq__title {
  font-family: $decorTitle;
  font-size: 30px;
  line-height: 33px;
  letter-spacing: 2px;
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

.faq__description {
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
}

.faq__details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid $lightBlack;
  border-radius: 20px;
  list-style: none;

  &[open] {
    .faq__question {
      &::before {
        transform: rotate(360deg);
      }
    }
  }

  @media (min-width: $desktop) {
    width: 800px;
    margin: 0 auto;
  }
}

.faq__question {
  font-family: $decorTitle;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  list-style: none;
  transition: 0.5s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 5px;
    background-image: url('/icons/star.svg');
    background-size: contain;
    width: 25px;
    height: 25px;
    transform: rotate(0);
    transition: 1s;
  }

  @media (min-width: $tablet) {
    font-size: 30px;
    line-height: 33px;
    padding-left: 0px;

    &::before {
      top: 1px;
      left: 10px;
      width: 30px;
      height: 30px;
    }
  }

  @media (min-width: $desktop) {
    font-size: 35px;
    line-height: 38px;

    &::before {
      top: 2px;
      left: 50px;
      width: 35px;
      height: 35px;
    }
  }
}

.faq__answer {
  text-align: justify;
  padding: 15px;
}

.faq__go-braid {
  font-size: 18px;
  line-height: 21px;
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