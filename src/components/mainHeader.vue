<script>
  import { useGlobalStore } from '../store';
  import { storeToRefs } from 'pinia';

  export default {
    setup() {
      const { menu } = storeToRefs(useGlobalStore());
      const { menuStatus, navList, contactList } = useGlobalStore();
      return {
        menu,
        menuStatus,
        navList,
        contactList,
      }
    },
  }
</script>

<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul :class="['main-nav__list', 'main-nav__list--nav', menu.status === true ? menu.navClass: '']">
        <li class="main-nav__item main-nav__item--nav"
            v-for="li in navList"
            :key="li">
            <router-link :to="li.href" 
                         @click="menuStatus(true)"
                         active-class="main-nav__link--nav--active"
                         class="main-nav__link main-nav__link--nav">
                         {{ li.text }}
            </router-link>
        </li>
      </ul>
      <router-link to="/home"
                   @click="menuStatus(true)"
                   class="main-nav__logo"
                   aria-label="Наш шикарный логотип"></router-link>
      <ul class="main-nav__list main-nav__list--contact">
        <li class="main-nav__item main-nav__item--contact"
            v-for="li in contactList"
            :key="li">
            <a :href="li.href"
               class="main-nav__link main-nav__link--contact">{{ li.text }}</a>
        </li>
      </ul>
      <button class="main-nav__menu-button"
              type="button"
              @click="menuStatus()"
              aria-label="Открыть меню">
        <span class="main-nav__button-elem"></span>
        <span class="main-nav__button-elem"></span>
        <span class="main-nav__button-elem"></span>
      </button>
    </nav>
  </header>
</template>