<template>
  <div>
    <section class="py-10">
      <h2 class="text-2xl font-bold text-center mb-6">
        Produk Terlaris
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 px-6">
        <ProductCard 
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue'
import { useProducts } from "../composables/useProducts";
const { filteredProducts } = useProducts()
</script>