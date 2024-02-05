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
            title: 'Афрокудри (каркас, точечно)',
            desc: 'Кудри созданы для любительниц густых и объемных волос. Палитра кудрей очень разнообразна на оттенки и виды завитков. Можно с легкостью стать из брюнетки блондинкой без вреда для своих волос.',
            price: 'от 9300 ₽',
          },
          {
            img: './img/hairstyles/kosy.jpg',
            alt: '',
            title: 'Афрокосы (SE, DE)',
            desc: 'Комплекты кос смотрятся более консервативно. Могу быть и в натуральных оттенках и в ярких. Такая причёска подойдет в любом возрасте.',
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
            title: 'Наращивание на микрокосы',
            desc: 'Наращивание на микрокосы - без капсул и клея. Используем современное термоволокно максимально схожее с натуральными волосами. Оттенки смешиваются индивидуально под цвет волос клиента.',
            price: 'от 7500 ₽',
          },
        ],
      }
    }
  }
</script>

<template>
  <section class="hairstyles">
    <div class="container">
      <h2 class="hairstyles__title">Немного о прическах</h2>
      <ul class="hairstyles__list">
        <li class="hairstyles__item"
            v-for="li in hairstyles"
            v-bind:key="li">
          <img :src="li.img"
               :alt="li.alt"
               class="hairstyles__img"
               width="335" height="300">
          <h3 class="hairstyles__subtitle">{{ li.title }}</h3>
          <p class="hairstyles__description">{{ li.desc }}</p>
          <span class="hairstyles__price">{{ li.price }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>