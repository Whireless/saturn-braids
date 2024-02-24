<script>
  import { useGlobalStore } from '../store';

  export default {
    setup() {
      const { mastersList } = useGlobalStore();
      return {
        mastersList,
      }
    }
  }
</script>

<template>
  <section class="masters">
    <div class="container">
      <h2 class="masters__title">Наши мастера</h2>
      <ul class="masters__list">
        <li v-for="li in mastersList" 
            :key="li"
            class="masters__item">
          <img :src="li.img"
               :alt="li.alt"
               class="masters__master-img"
               width="275" height="350">
          <h3 class="masters__master-title">{{ li.name }}</h3>
          <p class="masters__master-status">{{ li.status }}</p>
          <p class="masters__master-description">{{ li.descr }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>