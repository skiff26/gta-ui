<template>
	<section class="main__info-panel info-panel">
		<div class="info-panel__money">
			<div class="info-panel__money-icon">
				<svg width="24" height="24">
					<use xlink:href="icons.svg#dollar"></use>
				</svg>
			</div>
			<div class="info-panel__money-text"><span>{{ formatMoney(store.money) }}</span></div>
		</div>
		<div class="info-panel__server">
			<div class="info-panel__server-icon">
				<ServerLogo />
			</div>
			<div class="info-panel__server-text">Rage MP</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import ServerLogo from './ServerLogo.vue'
import { useMainStore } from '@/stores/main'

const store = useMainStore()

const formatMoney = (money: number): string => money.toLocaleString('de-DE')
</script>