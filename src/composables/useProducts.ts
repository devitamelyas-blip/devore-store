import { ref, computed } from 'vue'

const products = ref([
  { id: 1, name: 'Gamis Aesthetic', price: 150000 },
  { id: 2, name: 'Hijab Satin', price: 50000 },
  { id: 3, name: 'Blazer Korean', price: 200000 },
  { id: 4, name: 'Rok Plisket', price: 120000 }
])

export function useProducts() {
  const filteredProducts = computed(() => products.value)

  return {
    products,
    filteredProducts
  }
}