<template>
	<div class="wrapper">
		<main class="main">
			<InfoPanel />
			<Tips />
			<Hud />
		</main>
	</div>
</template>

<script setup lang="ts">
import InfoPanel from '@/components/info-panel/InfoPanel.vue'
import Tips from '@/components/tips/Tips.vue'
import Hud from '@/components/hud/Hud.vue'
</script>
