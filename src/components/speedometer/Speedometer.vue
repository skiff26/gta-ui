<template>
	<section class="main__speedometer speedometer">
		<svg width="200" height="200" viewBox="0 0 171 170" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="169.258" y="30.9399" width="1" height="10.6662" transform="rotate(46.0039 169.258 30.9399)"
				fill="#6C6C6C" />
			<path fill-rule="evenodd" clip-rule="evenodd"
				d="M169.706 31.8924L170.434 31.2073C164.988 25.196 158.794 19.8677 151.864 15.4688C138.018 6.67979 122.154 1.45111 105.724 0.261271C89.2951 -0.928569 72.8251 1.95843 57.8219 8.65805C42.8186 15.3577 29.7613 25.6559 19.8449 38.6103C9.92847 51.5647 3.46972 66.7614 1.05975 82.8097C-1.35023 98.8579 0.365556 115.245 6.05006 130.471C11.7346 145.698 21.2062 159.277 33.5982 169.966L34.2491 169.234L33.5142 168.556L33.5089 168.562C21.6072 158.083 12.4981 144.884 6.9869 130.122C1.36165 115.054 -0.336074 98.8383 2.04866 82.9582C4.43339 67.0779 10.8247 52.0391 20.6389 39.2181C30.4533 26.3971 43.3774 16.2033 58.2296 9.57115C73.0819 2.93895 89.3869 0.0807002 105.652 1.25866C121.917 2.43662 137.622 7.61304 151.328 16.3131C158.182 20.6637 164.312 25.9374 169.706 31.8924Z"
				fill="#6C6C6C" />
			<path speed-indicator
				d="M41.5 169.5C20.0309 152.556 7 126.877 7 97.5C7 69.3852 19.0508 45.6011 38 28.5C53.4826 14.5273 74.4043 5.5 97.5 5.5C122.213 5.5 145.844 15.3608 162.5 31"
				stroke="#6C6C6C" />
			<path speed
				d="M41.5 169.5C20.0309 152.556 7 126.877 7 97.5C7 69.3852 19.0508 45.6011 38 28.5C53.4826 14.5273 74.4043 5.5 97.5 5.5C122.213 5.5 145.844 15.3608 162.5 31"
				stroke="#6C6C6C" :stroke-dasharray="store.settings.speed.value / store.settings.speed.max * 300 + ' 1000'" />
		</svg>
		<div class="speedometer__petrol">
			<svg :fill="store.settings.fuel.value > 40 ? 'white' : '#6c6c6c'" width="24" height="20">
				<use xlink:href="icons.svg#fuel"></use>
			</svg>
			<span>{{ store.settings.fuel.value }}л</span>
		</div>
		<div class="speedometer__info">
			<div class="speedometer__main">
				<div class="speedometer__signal-left on">
					<svg fill="#6c6c6c" width="30" height="30">
						<use xlink:href="icons.svg#signal"></use>
					</svg>
				</div>
				<div class="speedometer__speed">{{ store.settings.speed.value }}<span>км/ч</span></div>
				<div class="speedometer__signal-right">
					<svg fill="#6c6c6c" width="30" height="30" style="transform: rotate(180deg)">
						<use xlink:href="icons.svg#signal"></use>
					</svg>
				</div>
				<div class="speedometer__mileage">
					<span v-for="digit in formattedMileage" :key="digit">{{ digit }}</span>
				</div>
			</div>
			<svg fill="#6c6c6c" width="24" height="24" class="speedometer__indicator-lock on">
				<use xlink:href="icons.svg#lock"></use>
			</svg>
			<svg fill="#6c6c6c" width="24" height="24" class="speedometer__indicator-light">
				<use xlink:href="icons.svg#light"></use>
			</svg>
			<svg fill="#6c6c6c" width="24" height="24" class="speedometer__indicator-key">
				<use xlink:href="icons.svg#key"></use>
			</svg>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMainStore } from '@/stores/main'
const store = useMainStore()

const mileage = ref<number>(12)
const formattedMileage = computed<string[]>(() => {
	return mileage.value.toString().padStart(7, '0').split('')
})
</script>