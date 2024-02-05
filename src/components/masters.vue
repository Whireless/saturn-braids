<script>
  export default {
    data() {
      return {
        // Список мастеров студии
        mastersList: [
          {
            img: '',
            alt: '',
            name: 'Алина',
            status: 'Остнователь студии, мастер-универсал, преподаватель курсов по брейдингу',
            descr: '-',
            // Красный
          },
          {
            img: './img/masters/dasha.jpg',
            alt: '',
            name: 'Дарья',
            status: 'Со-основатель студии, мастер-универсал',
            descr: `Обожаю плести дреды и всё, что с ними связано. 
            Делаю максимально мягкие и легкие комплекты.`,
            // Фиолетовый
          },
          {
            img: './img/masters/kris.jpg',
            alt: '',
            name: 'Кристина',
            status: 'Мастер',
            descr: '-',
          },
          {
            img: './img/masters/alina2.jpg',
            alt: '',
            name: 'Алина',
            status: 'Мастер',
            descr: 'Люблю плести нежные DE комплекты, брейды а так же водопад и афрохвосты.',
            // Розовый
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