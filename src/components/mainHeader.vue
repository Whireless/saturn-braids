<script>
  import { useGlobalStore } from '../store';
  import { storeToRefs } from 'pinia';

  export default {
    setup() {
      const { menuStatus, } = storeToRefs(useGlobalStore());
      const { mobileMenu, navList, contactList } = useGlobalStore();
      return {
        menuStatus,
        mobileMenu,
        navList,
        contactList,
      }
    },
  }
</script>

<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul :class="['main-nav__list', 'main-nav__list--nav', {'main-nav__list--open' : menuStatus}]">
        <li class="main-nav__item main-nav__item--nav"
            v-for="li in navList"
            :key="li">
            <router-link :to="li.href" 
                         @click="mobileMenu(true, li.page)"
                         active-class="main-nav__link--nav--active"
                         class="main-nav__link main-nav__link--nav">
                         {{ li.text }}
            </router-link>
        </li>
      </ul>
      <router-link to="/home"
                   @click="mobileMenu(true)"
                   class="main-nav__logo"
                   aria-label="Наш шикарный логотип">
                    <svg class="main-nav__logo-icon" width="100%" height="100%">
                      <use href="#logo"></use>
                    </svg>
      </router-link>
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
              @click="mobileMenu()"
              aria-label="Открыть меню">
        <span class="main-nav__button-elem"></span>
        <span class="main-nav__button-elem"></span>
        <span class="main-nav__button-elem"></span>
      </button>
    </nav>
  </header>
</template>

.<style lang="scss">
.main-nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $lightBlack;
  padding: 10px 15px;
  left: 0;
  right: 0;
  z-index: 1;

  @media (min-width: $tablet) {
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
  }

  @media (min-width: $desktop) {
    margin: 0 auto;
    padding: 20px 60px;
  }

  @media (min-width: $laptop) {
    padding: 35px 150px;
  }
}

.main-nav__list {
  list-style: none;

  &--nav {
    text-align: center;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    row-gap: 10px;
    height: 80vh;
    background-color: $lightBlack;
    margin: 0;
    padding: 50px 0;
    transform: translateX(-100%);
    transition: 0.5s;

    @media (min-width: $tablet) {
      position: static;
      flex-direction: row;
      column-gap: 30px;
      height: min-content;
      padding: 0;
      transform: translateX(0);
    }

    @media (min-width: $desktop) {
      column-gap: 40px;
    }

    @media (min-width: $laptop) {
      column-gap: 60px;
    }
  }

  &~.main-nav__menu-button {
    .main-nav__button-elem {
      &:nth-of-type(1) {
        animation: ease 0.5s topClose forwards;
      }

      &:nth-of-type(2) {
        animation: ease 0.5s mdlClose forwards;
      }

      &:nth-of-type(3) {
        animation: ease 0.5s btmClose forwards;
      }
    }
  }

  &--open {
    transform: translateX(0);

    &~.main-nav__menu-button {
      .main-nav__button-elem {
        &:nth-of-type(1) {
          animation: ease 0.5s topOpen forwards;
        }

        &:nth-of-type(2) {
          animation: ease 0.5s mdlOpen forwards;
        }

        &:nth-of-type(3) {
          animation: ease 0.5s btmOpen forwards;
        }
      }
    }
  }

  &--contact {
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    @media (min-width: $tablet) {
      align-items: center;
    }

    @media (min-width: $desktop) {
      flex-direction: row;
      column-gap: 25px;
    }
  }
}

.main-nav__link {
  text-decoration: none;
  color: $whitesmoke;
  width: 100%;
  transition: 0.4s;

  &:hover {
    color: $lightBlack;
    background-color: $whitesmoke;
  }

  &--nav {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;

    &--active {
      color: $lightBlack;
      background-color: $whitesmoke;
    }

    @media (min-width: $tablet) {
      font-size: 18px;
      line-height: 21px;
      position: relative;
      height: auto;

      &:hover {
        color: $whitesmoke;
        background-color: transparent;
  
        &::before {
          content: "";
          position: absolute;
          top: -5px;
          background-color: $whitesmoke;
          width: 100%;
          height: 1px;
        }
  
        &::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          background-color: $whitesmoke;
          width: 100%;
          height: 1px;
        }
      }

      &--active {
        color: $whitesmoke;
        background-color: transparent;

        &::before {
          content: "";
          position: absolute;
          top: -5px;
          background-color: $whitesmoke;
          width: 100%;
          height: 1px;
        }
  
        &::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          background-color: $whitesmoke;
          width: 100%;
          height: 1px;
        }
      }
    }

    @media (min-width: $desktop) {
      font-size: 21px;
      line-height: 24px;
    }

    @media (min-width: $laptop) {
      font-size: 30px;
      line-height: 34px;
    }
  }

  &--contact {
    padding: 3px 8px;
    color: $lightBlack;
    background-color: $whitesmoke;
    border-radius: 30px;

    &:hover {
      opacity: 0.5;
    }

    @media (min-width: $tablet) {
      font-size: 16px;
      line-height: 19px;
      padding: 5px 12px;
    }

    @media (min-width: $desktop) {
      font-size: 20px;
      line-height: 23px;
      padding: 8px 15px;
    }

    @media (min-width: $laptop) {
      font-size: 30px;
      line-height: 34px;
      padding: 10px 20px;
    }
  }
}

.main-nav__logo {
  display: block;
  width: 110px;
  height: 50px;
  transition: 0.4s;

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: $tablet) {
    order: 1;
  }

  @media (min-width: $desktop) {
    width: 145px;
    height: 55px;
  }

  @media (min-width: $laptop) {
    width: 180px;
    height: 80px;
  }
}

.main-nav__menu-button {
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  background-color: transparent;
  width: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  order: 1;

  @media (min-width: $tablet) {
    display: none;
  }
}

.main-nav__button-elem {
  position: relative;
  display: block;
  background-color: $whitesmoke;
  width: 100%;
  height: 3px;
  border-radius: 3px;
}
</style>