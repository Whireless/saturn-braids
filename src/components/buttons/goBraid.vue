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
  border-radius: 30px;
  transition: 0.5s;

  &:hover {
    opacity: 0.70;
  }

  @media (min-width: $tablet) {
    padding: 17px 35px;
  }
}
</style>