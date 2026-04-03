import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref<any[]>([])

  const totalItems = computed(() => items.value.length)

  const addItem = (item: any) => {
    items.value.push(item)
  }

  return {
    items,
    totalItems,
    addItem
  }
})