<template>
	<div class="speedometer__fuel">
		<svg width="24" height="20">
			<use xlink:href="/icons.svg#fuel" fill="#6c6c6c"></use>
			<defs>
				<clipPath id="icon-clip" clipPathUnits="objectBoundingBox">
					<rect x="0" :y="1 - store.settings.fuel.value / store.settings.fuel.max" width="1" height="1" />
				</clipPath>
			</defs>
			<use xlink:href="/icons.svg#fuel" clip-path="url(#icon-clip)" fill="white"></use>
		</svg>
		<span>{{ store.settings.fuel.value }}л</span>
	</div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/main'
const store = useMainStore()
</script>