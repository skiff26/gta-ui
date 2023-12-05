<template>
	<section class="main__sliders sliders">
		<div class="sliders__slider" v-for="item in store.settings" :key="item.name">
			<p>{{ item.name }}</p>
			<input type="range" :min="item.min" :max="item.max" v-model="item.value" :first="item.min + ' ' + item.prefix"
				:second="item.max + ' ' + item.prefix">
		</div>
	</section>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/main'
const store = useMainStore()
</script>