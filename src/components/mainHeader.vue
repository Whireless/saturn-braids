<script>
  export default {
    data() {
      return {
        // Список навигации и контакты
        navList: [
          {
            href: '/',
            text: 'Главная',
          },
          {
            href: '/faq',
            text: 'О причёсках',
          },
          {
            href: '/masters',
            text: 'Наши мастера',
          },
        ],
        contactList: [
          {
            href: 'tel:',
            text: '+7 901 102-83-16',
          },
          // {
          //   href: 'mailto:',
          //   text: 'mail@mail.com',
          // },
        ],
      }
    },
    methods: {
      // Показ/скрытие мобильного меню
      showMenu() {
        const body = document.querySelector('body');
        const menu = body.querySelector('.main-nav__list');
        menu.classList.toggle('main-nav__list--open');
        menu.classList.contains('main-nav__list--open') ? body.style.overflow = 'hidden' : body.removeAttribute('style');
      },

      // Закрытие мобильного меню при нажатии ссылки
      closeOnCLick() {
        const body = document.querySelector('body');
        body.querySelector('.main-nav__list--nav').classList.remove('main-nav__list--open');
        body.removeAttribute('style');
      },
    },
  }
</script>

<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="main-nav__list main-nav__list--nav">
        <li class="main-nav__item main-nav__item--nav"
            v-for="li in navList"
            v-bind:key="li">
            <router-link :to="li.href" 
                         v-on:click="closeOnCLick"
                         class="main-nav__link main-nav__link--nav">{{ li.text }}</router-link>
        </li>
      </ul>
      <router-link to="/"
                   class="main-nav__logo"
                   aria-label="Наш шикарный логотип"></router-link>
      <ul class="main-nav__list main-nav__list--contact">
        <li class="main-nav__item main-nav__item--contact"
            v-for="li in contactList"
            v-bind:key="li">
            <a :href="li.href"
               class="main-nav__link main-nav__link--contact">{{ li.text }}</a>
        </li>
      </ul>
      <button class="main-nav__menu-button"
              type="button"
              v-on:click="showMenu"
              aria-label="Открыть меню">
        <span class="main-nav__button-elem"></span>
        <span class="main-nav__button-elem"></span>
        <span class="main-nav__button-elem"></span>
      </button>
    </nav>
  </header>
</template>