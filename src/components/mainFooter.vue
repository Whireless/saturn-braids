<script>
  export default {
    data() {
      return {
        // Социальные сети
        socials: [
          {
            href: 'https://vk.com/club_art_in_hair',
            name: 'Вконтакте',
            class: 'main-footer__social-link--vk',
          },
          {
            href: 'tg://resolve?domain=@alina_saturn_braids',
            name: 'Telegram',
            class: 'main-footer__social-link--telegram',
          },
        ],
      }
    }
  }
</script>

<template>
  <footer class="main-footer">
    <div class="container">
      <a href="" class="main-footer__logo"></a>
      <ul class="main-footer__social-list">
        <li class="main-footer__social-item"
            v-for="li in socials"
            v-bind:key="li">
          <a :href="li.href"
             :class="['main-footer__social-link', li.class]"
             :aria-label="li.name"></a>
        </li>
      </ul>
      <p class="main-footer__geo">Мы находимся:<br>
        <span>
          г.Санкт-Петербург, ул. Будапештская, д. 11
          (рядом с метро Международная)
        </span>
      </p>
      <span class="main-footer__copyright">Saturn Braids © 2024</span>
      <span class="main-footer__dev">dev: <a href="https://github.com/Whireless">whireless</a></span>
    </div>
  </footer>
</template>