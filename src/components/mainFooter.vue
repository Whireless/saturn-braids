<script>
  import { useGlobalStore } from '../store';

  export default {
    setup() {
      const { socials } = useGlobalStore();
      return {
        socials,
      }
    }
  }
</script>

<template>
  <footer class="main-footer">
    <div class="container">
      <article class="main-footer__interaction">
        <ul class="main-footer__social-list">
          <li class="main-footer__social-item"
              v-for="li in socials"
              :key="li">
            <a :href="li.href"
              :class="['main-footer__social-link', li.class]"
              :aria-label="li.name"></a>
          </li>
        </ul>
        <p class="main-footer__geo">
          г.Санкт-Петербург, ул. Будапештская, д. 11
          (рядом с метро Международная)
        </p>
        <span class="main-footer__copyright">Saturn Braids © 2024</span>
      </article>
      <span class="main-footer__dev">dev: <a href="https://github.com/Whireless" title="Разработчик">whireless</a></span>
    </div>
  </footer>
</template>