<script>
	import masters from './about/masters.vue';
	import studio from './about/studio.vue';
	import maps from './about/maps.vue';

	export default {
		components: {
			masters,
			studio,
			maps,
		}
	}
</script>
<template>
	<main>
		<masters></masters>
		<studio></studio>
		<maps></maps>
	</main>
</template>
<style lang="scss"></style>