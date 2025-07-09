<script>
  export default {

  }
</script>

<template>
  <a class="go-braid" href="https://vk.me/club_art_in_hair">Заплестись</a>
</template>

<style lang="scss">
.go-braid {
  color: $white;
  text-decoration: none;
  display: flex;
  width: max-content;
  background: $gradient2;
  animation: gradient 3s infinite linear;
  background-size: 400%;
  margin: 0 auto;
  padding: 15px 30px;
  border-radius: 40px;
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: $tablet) {
    padding: 17px 35px;
  }

  @media (min-width: $laptop) {
    padding: 20px 40px;
  }
}
</style>