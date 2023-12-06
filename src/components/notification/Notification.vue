<template>
	<section class="notification" v-if="message">
		<svg class="notification__icon" fill="#29DA3B" width="20" height="20">
			<use :xlink:href="`icons.svg#${icon}`"></use>
		</svg>
		<div class="notification__text">{{ message }}</div>
	</section>
</template>

<script setup lang="ts">
interface Props {
	icon: string,
	message: string
}

defineProps<Props>()
</script>