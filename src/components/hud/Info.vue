<template>
	<div class="hud__info">
		<div class="hud__info-deg">
			{{ store.server.weather.deg }}
			<svg width="20" height="20">
				<use xlink:href="icons.svg#smog"></use>
			</svg>
			<span>{{ store.server.weather.name }}</span>
		</div>
		<div class="hud__info-time">
			{{ store.server.time }} <time>{{ store.server.date }}</time>
			<br />
			<span>{{ store.server.day }}</span>
			<br />
			<span>Лос-Сантос</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/main'
const store = useMainStore()

setInterval(() => {
	store.updateServer()
}, 10000)
</script>