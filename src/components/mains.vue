<script>
  import { useGlobalStore } from '../store';

  export default {
    setup() {
      const { hairstyles, readyList } = useGlobalStore();
      return {
        hairstyles,
        readyList,
      }
    },
  }
</script>

<template>
  <section class="mains">
    <article class="intro">
      <div class="container">
        <h1 class="intro__title">Делаем лучшие причёски в Питере!</h1>
        <p class="intro__description">Приходи плести дреды именно к нам!</p>
      </div>
    </article>
    <article class="hairstyles">
      <div class="container">
        <h2 class="hairstyles__title">О прическах</h2>
        <ul class="hairstyles__list">
          <li class="hairstyles__item"
              v-for="li in hairstyles"
              :key="li">
            <img :src="li.img"
                :alt="li.alt"
                class="hairstyles__img"
                width="335" height="320">
            <h3 class="hairstyles__subtitle">{{ li.title }}</h3>
            <p class="hairstyles__description">{{ li.desc }}</p>
            <span class="hairstyles__price">{{ li.price }}</span>
          </li>
        </ul>
      </div>
    </article>
    <article class="ready">
      <div class="container">
        <h2 class="ready__title">Решила заплестись? Супер!</h2>
        <a class="ready__go-braids" href="https://vk.me/club_art_in_hair">Записаться</a>
        <ul class="ready__list">
          <li class="ready__item"
              v-for="li in readyList"
              :key="li">
              <p class="ready__description">{{ li.desc }}</p>
              <router-link :to="li.link"
                           class="ready__link">{{ li.linkName }}</router-link>
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>