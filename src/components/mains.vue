<script>
  export default {
    data() {
      return {
        // Полная информация по причёскам
        hairstyles: [
          {
            img: './img/hairstyles/dreds.jpg',
            alt: '',
            title: 'Дреды',
            desc: 'Дреды могут быть любого цвета, как однотонные, так и с переходами из одного цвета в другой. Так же дреды бывают разных фактур: под натуральные, гладкие, фактурные и завитые.',
            price: 'от 7000 ₽',
          },
          {
            img: './img/hairstyles/kydri.jpg',
            alt: '',
            title: 'Кудри',
            desc: 'Кудри созданы для любительниц густых и объемных волос. Палитра кудрей очень разнообразна на оттенки и виды завитков. Можно с легкостью стать из брюнетки блондинкой без вреда для своих волос, делаем на каркас или точечно.',
            price: 'от 9300 ₽',
          },
          {
            img: './img/hairstyles/kosy.jpg',
            alt: '',
            title: 'Косы',
            desc: 'Комплекты кос (SE, DE) смотрятся более консервативно. Могу быть и в натуральных оттенках и в ярких. Такая причёска подойдет в любом возрасте.',
            price: 'от 9000 ₽',
          },
          {
            img: './img/hairstyles/zizi.jpg',
            alt: '',
            title: 'Зизи',
            desc: 'Минимум объема и густые концы - это про зизи. Для тех, кто хочет очень много тоненьких косичек. Бывают прямые, завитые и гофре. Материал фабричный - поэтому не придется ждать изготовления комплекта.',
            price: 'от 6000 ₽',
          },
          {
            img: './img/hairstyles/braids.jpg',
            alt: '',
            title: 'Брейды',
            desc: 'Прически на основе брейдов бывают самые разные. Это может быть просто несколько прямых кос вдоль головы или косы собранные в распущеный хвост. Такие прически отлично подойдут на праздник или фотосессию.',
            price: 'от 4000 ₽',
          },
          {
            img: './img/hairstyles/microkosy.jpg',
            alt: '',
            title: 'Наращивание',
            desc: 'Наращивание на микрокосы - без капсул и клея. Используем современное термоволокно максимально схожее с натуральными волосами. Оттенки смешиваются индивидуально под цвет волос клиента.',
            price: 'от 7500 ₽',
          },
        ],
        readyList: [
          {
            desc: `Понравились причёски выше, но всё еще есть вопросы? По ссылке ниже мы расписали все подробно, чтобы развеять твои страхи ;)`,
            link: '/faq',
            linkName: 'Ответы на вопросы',
          },
          {
            desc: `Ознакомилась с информацией выше, и решила какую прическу ты хотела бы заплести? Переходи на страницу с нашими мастерами, и выбирай, у кого ты хотела бы заплестись!`,
            link: '/masters',
            linkName: 'Список мастеров',
          },
        ],
      }
    }
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
              v-bind:key="li">
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
              v-bind:key="li">
              <p class="ready__description">{{ li.desc }}</p>
              <router-link :to="li.link"
                           class="ready__link">{{ li.linkName }}</router-link>
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>