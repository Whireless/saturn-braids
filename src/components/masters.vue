<script>
  export default {
    data() {
      return {
        
        // Список мастеров студии

        mastersList: [
          {
            img: './img/masters/alina.jpg',
            alt: 'Фото Алины, основательницы студии',
            name: 'Алина',
            status: 'Основатель студии Saturn•Braids. Мастер-универсал. Преподаватель брейдинга.',
            descr: 'Экстраверт. Люблю поговорить, супер-способность - поддерживать разговор со всеми кто есть в студии одновременно и при этом плести.',
          },
          {
            img: './img/masters/dasha.jpg',
            alt: 'Фото Дарьи, со-основательницы студии',
            name: 'Дарья',
            status: 'Со-основатель студии Saturn•Braids. Мастер-универсал',
            descr: `Обожаю плести дреды и всё, что с ними связано. 
            Делаю максимально мягкие и легкие комплекты.`,
          },
          {
            img: './img/masters/kris.jpg',
            alt: 'Фото мастера Кристины',
            name: 'Кристина',
            status: 'Мастер',
            descr: 'Мастер спорта по креплению афрокудрей на каркас, а так же изготовлению комплектов дредокудрей.',
          },
          {
            img: './img/masters/alina2.jpg',
            alt: 'Фото мастера Алины',
            name: 'Алина',
            status: 'Мастер',
            descr: 'Люблю плести нежные DE комплекты, брейды а так же водопад и афрохвосты.',
          },
        ],
      }
    }
  }
</script>

<template>
  <section class="masters">
    <div class="container">
      <h2 class="masters__title">Наши мастера</h2>
      <ul class="masters__list">
        <li v-for="li in mastersList" 
            v-bind:key="li"
            class="masters__item">
          <img :src="li.img"
               :alt="li.alt"
               class="masters__master-img"
               width="275" height="350">
          <h3 class="masters__master-title">{{ li.name }}</h3>
          <p class="masters__master-status">{{ li.status }}</p>
          <p class="masters__master-description">{{ li.descr }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>