<script>
	import { animate, onScroll } from 'animejs';

	export default {
		mounted() {

      // Анимация заголовка

      animate('.maps__title', {
        opacity: [0, 1],
        scale: [0, 1.2, 1],
        autoplay: onScroll({
          enter: 'center -200px',
          leave: 'center center',
          alternate: true,
          sync: true,
          // debug: true,
        }),
      });

      animate('.maps__block', {
      	opacity: [0, 1],
      	y: [100, 0],
      	autoplay: onScroll({
      		enter: 'center -200px',
          leave: 'center center',
          alternate: true,
          sync: true,
          // debug: true,
      	}),
      });
		},
	}
</script>
<template>
	<section class="maps">
    <h2 class="maps__title">Как нас найти</h2>
    <div class="maps__block">
      <iframe class="maps__iframe" src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=156050898898" width="100%" height="290" frameborder="0">
      </iframe>
    </div>
  </section>
</template>
<style lang="scss">
.maps__block {
	display: flex;
	margin-top: 35px;

	@media (min-width: $desktop) {
		margin-top: 50px;
	}
}

.maps__iframe {
	@media (min-width: $tablet) {
		height: 360px;	
	}

	@media (min-width: $desktop) {
		height: 480px;
	}

	@media (min-width: $laptop) {
		height: 680px;
	}
}
</style>