import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Server } from '@/interfaces'

export const useMainStore = defineStore('main', () => {
  const money = ref<Number>(505170619)

  const days: string[] = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ]

  const today = ref<Date>(new Date())

  const updateServer = () => (today.value = new Date())

  const server = computed<Server>(() => {
    return {
      name: 'Rage MP',
      weather: {
        deg: '+ 14.5',
        name: 'Смог'
      },
      date: `${today.value.getDate() < 10 ? '0' : ''}${today.value.getDate()}.${
        today.value.getMonth() < 10 ? '0' : ''
      }${today.value.getMonth()}.${today.value.getFullYear()}`,
      time: `${
        today.value.getHours() < 10 ? '0' : ''
      }${today.value.getHours()}:${
        today.value.getMinutes() < 10 ? '0' : ''
      }${today.value.getMinutes()}`,
      day: days[today.value.getDay()]
    }
  })

  return {
    money,
    server,
    updateServer
  }
})
