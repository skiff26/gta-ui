import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const money = ref<Number>(505170619)

  return {
    money
  }
})
