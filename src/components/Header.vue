<template>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart'

interface HeaderProps {}

const cartStore = useCartStore()
const searchQuery = ref<string>('')
const selectedCategory = ref<string>('all')
const wishlistCount = ref<number>(2)

const categories = [
    { id: 'all', name: 'Semua', slug: 'all' },
  { id: 'gamis', name: 'Gamis', slug: 'gamis' },
  { id: 'hijab', name: 'Hijab', slug: 'hijab' },
  { id: 'blazer', name: 'Blazer', slug: 'blazer' },
  { id: 'outer', name: 'Outer', slug: 'outer' },
  { id: 'rok', name: 'Rok', slug: 'rok' }
]

const selectCategory = (categoryId: string): void => {
  selectedCategory.value = categoryId
}

const searchProducts = (): void => {
  console.log('Searching for:', searchQuery.value)
}

onMounted(() => {
cartStore.totalItems})
</script>