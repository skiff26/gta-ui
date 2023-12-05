<template>
	<div class="wrapper">
		<main class="main">
			<Sliders />
			<InfoPanel />
			<Tips />
			<Hud />
			<Speedometer />
		</main>
	</div>
</template>

<script setup lang="ts">
import InfoPanel from '@/components/info-panel/InfoPanel.vue'
import Tips from '@/components/tips/Tips.vue'
import Hud from '@/components/hud/Hud.vue'
import Sliders from '@/components/sliders/Sliders.vue'
import Speedometer from '@/components/speedometer/Speedometer.vue'
</script>
