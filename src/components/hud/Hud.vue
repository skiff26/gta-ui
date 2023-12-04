<template>
	<section class="main__hud hud">
		<Map />
		<div class="hud__progress-lines">
			<div class="hud__progress-health low">
				<span data-progress="32"></span>
			</div>
			<div class="hud__progress-armor">
				<span data-progress="72"></span>
			</div>
		</div>
		<Info />
	</section>
</template>

<script setup lang="ts">
import Map from './Map.vue'
import Info from './Info.vue'
</script>