<template>
  <div class="border p-4 rounded-lg">
    <h3 class="font-bold">{{ product.name }}</h3>
    <p>Rp {{ formatPrice(product.price) }}</p>

    <button @click="addToCart" class="mt-2 px-3 py-1 bg-black text-white rounded">
      Add to Cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'

interface Props {
  product: any
}

const props = defineProps<Props>()

const cartStore = useCartStore()
const isInCart = ref(false)

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID').format(price)
}

const addToCart = () => {
  cartStore.addItem({
    ...props.product
  })

  isInCart.value = true
  setTimeout(() => {
    isInCart.value = false
  }, 1000)
}
</script>