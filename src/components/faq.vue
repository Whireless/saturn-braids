<script>
  import { useGlobalStore } from '../store';

  export default {
    setup() {
      const { faqList } = useGlobalStore();
      return {
        faqList,
      }
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
          <summary class="faq__question" >{{ li.question }}</summary>
          <p class="faq__answer">{{ li.answer }}</p>
        </details>
      </article>
    </div>
  </section>
</template>