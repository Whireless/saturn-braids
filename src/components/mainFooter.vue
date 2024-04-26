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
        <a class="main-footer__feedback" href="https://yandex.ru/maps/org/saturn_braids/156050898898/reviews/?ll=30.368689%2C59.869070&tab=reviews&z=15">Оставить отзыв</a>
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

.<style lang="scss">
.main-footer {
  color: $whitesmoke;
  background-color: $lightBlack;
  padding: 40px 0;

  @media (min-width: $tablet) {
    padding: 50px 0;
  }
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
}

.main-footer__social-list {
  display: flex;
  width: max-content;
  column-gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.main-footer__feedback {
  text-decoration: none;
  color: $blueviolet;
  transition: 0.5s;

  &:hover {
    opacity: 0.5;
  }
}

.main-footer__social-link {
  text-decoration: none;
  display: block;
  width: 35px;
  height: 35px;
  background-repeat: no-repeat;
  background-size: contain;
  transition: 0.5s;

  &--vk {
    background-image: url("/icons/vk.svg");
  }

  &--telegram {
    background-image: url("/icons/telegram.svg");
  }

  @media (min-width: $tablet) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: $desktop) {
    width: 45px;
    height: 45px;
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
  margin: 0 auto;

  @media (min-width: $desktop) {
    margin: 0 0 0 auto;
  }
}
</style>