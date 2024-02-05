<script>
  export default {
    data() {
      return {
        readyList: [
          {
            desc: `Понравились причёски выше, но всё еще не уверена что готова к такому? По ссылке ниже мы расписали все подробно, чтобы развеять твои страхи ;)`,
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
  <section class="ready">
    <div class="container">
      <h2 class="ready__title">Решила заплестись? Супер!</h2>
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
  </section>
</template>