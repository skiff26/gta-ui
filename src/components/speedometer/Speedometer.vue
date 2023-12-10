<template>
	<section class="main__speedometer speedometer">
		<SpeedGauge />
		<div class="speedometer__info">
			<div class="speedometer__main">
				<div class="speedometer__signal-left" :class="{ on: store.carData.Numpad4.status }">
					<svg fill="#6c6c6c" width="30" height="30">
						<use xlink:href="/icons.svg#signal"></use>
					</svg>
				</div>
				<div class="speedometer__speed">{{ store.settings.speed.value }}<span>км/ч</span></div>
				<div class="speedometer__signal-right" :class="{ on: store.carData.Numpad6.status }">
					<svg fill="#6c6c6c" width="30" height="30" style="transform: rotate(180deg)">
						<use xlink:href="/icons.svg#signal"></use>
					</svg>
				</div>
				<div class="speedometer__mileage">
					<span v-for="digit in formattedMileage" :key="digit">{{ digit }}</span>
				</div>
			</div>
			<svg fill="#6c6c6c" width="24" height="24" v-for="item in store.carData" :key="item.label"
				:class="{ [`speedometer__indicator-${item.label}`]: true, on: item.status }">
				<use :xlink:href="`/icons.svg#${item.label}`" v-if="!item.hide"></use>
			</svg>
		</div>
		<Fuel />
	</section>
</template>

<script setup lang="ts">
import Fuel from './Fuel.vue'
import SpeedGauge from './SpeedGauge.vue'
import { ref, computed } from 'vue'
import { useMainStore } from '@/stores/main'
const store = useMainStore()

const mileage = ref<number>(12)
const formattedMileage = computed<string[]>(() => {
	return mileage.value.toString().padStart(7, '0').split('')
})
</script>