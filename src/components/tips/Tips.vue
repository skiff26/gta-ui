<template>
	<section class="main__tips tips">
		<ul class="tips__list">
			<li class="tips__item" v-for="tip in tips" :key="tip.label">
				<span v-for="button in tip.buttons" :key="button">{{ button }}</span>
				<div>{{ tip.label }}</div>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import type { Tip } from '@/interfaces'

const tips: Tip[] = [
	{ buttons: ['L'], label: 'Фары' },
	{ buttons: ['F'], label: 'Открыть / Закрыть' },
	{ buttons: ['2'], label: 'Ключ зажигания' },
	{ buttons: ['N8'], label: 'Аварийка' },
	{ buttons: ['N4', 'N6'], label: 'Поворотники' }
]
</script>