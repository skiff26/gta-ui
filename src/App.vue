<template>
	<div class="wrapper">
		<main class="main">
			<Sliders />
			<InfoPanel />
			<Tips />
			<Hud />
			<Notification icon="done" message="Интерфейсы загружены" />
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
import Notification from '@/components/notification/Notification.vue'
import { onBeforeUnmount } from 'vue'
import { useMainStore } from '@/stores/main'
const store = useMainStore()

const keyPress = (event: any) => {
	if (store.carData[event.code]?.label) {
		store.carData[event.code].status = !store.carData[event.code].status
	}
}

window.addEventListener('keydown', keyPress)

onBeforeUnmount(() => {
	window.removeEventListener('keydown', keyPress)
})
</script>
