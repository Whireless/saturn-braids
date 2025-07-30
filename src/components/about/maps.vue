<script></script>
<template>
	<section class="maps">
    <h2 class="maps__title">Как нас найти</h2>
    <div class="maps__block">
      <iframe class="maps__iframe" src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=156050898898" width="100%" height="250" frameborder="0">
      </iframe>
    </div>
  </section>
</template>
<style lang="scss">
.maps__title {
	font-family: $decorTitle;
  font-size: 37px;
  line-height: 40px;
  letter-spacing: 2px;
  text-align: center;
  width: max-content;
  margin: 0 auto;
  border-radius: 20px;

  @media (min-width: $tablet) {
  	font-size: 45px;
    line-height: 48px;
  }

  @media (min-width: $desktop) {
  	font-size: 55px;
    line-height: 60px;
  }

  @media (min-width: $laptop) {
    font-size: 65px;
    line-height: 70px;
  }
}

.maps__block {
	margin-top: 35px;

	@media (min-width: $desktop) {
		margin-top: 50px;
	}
}

.maps__iframe {
	@media (min-width: $tablet) {
		height: 350px;	
	}

	@media (min-width: $desktop) {
		height: 480px;
	}

	@media (min-width: $laptop) {
		height: 600px;
	}
}
</style>