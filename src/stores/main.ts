import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import type { Server, Setting } from '@/interfaces'

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

  const settings: Ref<{ [key: string]: Setting }> = ref({
    speed: {
      name: 'Скорость',
      prefix: 'км/ч',
      max: 270,
      min: 0,
      value: 120
    },
    fuel: {
      name: 'Топливо',
      prefix: 'л',
      max: 60,
      min: 0,
      value: 21
    },
    health: {
      name: 'Здоровье',
      prefix: 'HP',
      max: 100,
      min: 0,
      value: 32
    }
  })

  return {
    money,
    server,
    settings,
    updateServer
  }
})
