<script>
  import { useGlobalStore } from '../store';
  import { storeToRefs } from 'pinia';

  export default {
    setup() {
      const { arrowUp } = storeToRefs(useGlobalStore());
      const { scrollPage, socials } = useGlobalStore();
      return {
        scrollPage,
        arrowUp,
        socials,
      }
    },
    mounted() {
      this.scrollPage();
    },
  }
</script>

<template>
  <footer class="main-footer" id="contacts">
    <div class="container">
      <article class="main-footer__interaction">
        <ul class="main-footer__social-list">
          <li class="main-footer__social-item"
              v-for="li in socials"
              :key="li">
            <a :href="li.href"
              :class="['main-footer__social-link', li.class]"
              :aria-label="li.name">
                <svg class="main-footer__social-icon" width="100%" height="100%">
                  <use :href="li.icon"></use>
                </svg>
              </a>
          </li>
        </ul>
        <a class="main-footer__feedback" href="https://yandex.ru/maps/org/saturn_braids/156050898898/reviews/?ll=30.368689%2C59.869070&tab=reviews&z=15">Оставить отзыв</a>
        <p class="main-footer__geo">
          г.Санкт-Петербург, ул. Будапештская, д. 11
          (рядом с метро Международная)
        </p>
        <span class="main-footer__copyright">Saturn Braids © 2025</span>
      </article>
      <span class="main-footer__dev">dev: <a href="https://github.com/Whireless" title="Разработчик">whireless</a></span>
    </div>
    <a :class="['main-footer__up', {'main-footer__up--visually' : arrowUp}]" href="#intro">
      <svg class="main-footer__up-arrow" fill="whitesmoke" width="35" height="35">
        <use href="#arrow"></use>
      </svg>
    </a>
  </footer>
</template>

.<style lang="scss">
.main-footer {
  color: $whitesmoke;
  background-color: $lightBlack;
}

.main-footer__interaction {
  display: flex; 
  flex-direction: column;
  align-items: center;
  row-gap: 15px;

  @media (min-width: $tablet) {
    font-size: 15px;
    flex-direction: row;
    column-gap: 30px;
  }

  @media (min-width: $desktop) {
    font-size: 17px;
    align-items: center;
    column-gap: 0;
    justify-content: space-between;
  }

  @media (min-width: $laptop) {
    font-size: 21px;
  }
}

.main-footer__social-list {
  display: flex;
  width: max-content;
  column-gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: $laptop) {
    column-gap: 25px;
  }
}

.main-footer__feedback {
  text-decoration: none;
  color: $blueviolet;
  transition: 0.4s;

  &:hover {
    opacity: 0.5;
  }
}

.main-footer__social-link {
  text-decoration: none;
  display: block;
  width: 35px;
  height: 35px;
  transition: 0.4s;

  @media (min-width: $tablet) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: $desktop) {
    width: 45px;
    height: 45px;
  }

  @media (min-width: $laptop) {
    width: 50px;
    height: 50px;
  }

  &:hover {
    opacity: 0.5;
  }
}

.main-footer__copyright {
  text-align: center;
  display: block;

  @media (min-width: $tablet) {
    width: max-content;
  }
}

.main-footer__dev {
  font-size: 13px;
  line-height: 16px;
  color: $grey;
  display: block;
  width: max-content;
  margin: 10px auto 0 auto;

  @media (min-width: $desktop) {
    margin: 0 0 0 auto;
  }
}

.main-footer__up {
  position: fixed;
  bottom: 40px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: $lightBlack;
  border: 1px solid $whitesmoke;
  border-radius: 50%;
  opacity: 0;
  z-index: -1;
  transition: 0.4s;

  &--visually {
    opacity: 1;
    z-index: 9;
  }

  &:hover {
    background-color: $whitesmoke;
    border: 1px solid $lightBlack;

    .main-footer__up-arrow {
      fill: $lightBlack;
    }
  }

  @media (min-width: $tablet) {
    right: 40px;
    width: 50px;
    height: 50px;
  }

  @media (min-width: $desktop) {
    right: 60px;
    width: 55px;
    height: 55px;
  }

  @media (min-width: $laptop) {
    right: 120px;
    width: 70px;
    height: 70px;
  }
}

.main-footer__up-arrow {
  @media (min-width: $tablet) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: $laptop) {
    width: 50px;
    height: 50px;
  }
}
</style>