<script>
  import mainHeader from './components/mainHeader.vue';
  import mains from './components/mains.vue';
  import mainFooter from './components/mainFooter.vue';

  export default {
    components: {
      mainHeader,
      mainFooter,
      mains,
    },
  }
</script>

<template>
  <mainHeader></mainHeader>
  <router-view></router-view>
  <mainFooter></mainFooter>
</template>