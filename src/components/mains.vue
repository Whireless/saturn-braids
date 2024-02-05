<script>
  import intro from './intro.vue';
  import hairstyles from './hairstyles.vue';
  import ready from './ready.vue';

  export default {
    components: {
      intro,
      hairstyles,
      ready,
    },
  }
</script>

<template>
  <intro></intro>
  <hairstyles></hairstyles>
  <ready></ready>
</template>