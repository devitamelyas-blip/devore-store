<template>
  <div class="product-card" @click="$emit('click', product)">
    <div class="product-media">
      <div class="image-wrapper" :style="imageStyle">
        <div class="image-overlay"></div>
        <div class="hover-actions">
          <button class="action-btn wishlist" title="Add to Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button class="action-btn cart" title="Quick Add">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div class="product-content">
      <div class="product-meta">
        <span class="product-category">{{ product.category }}</span>
        <h3 class="product-name">{{ product.name }}</h3>
      </div>
      
      <div class="product-price">{{ product.price }}</div>
      
      <div class="product-rating">
        <div class="stars">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <span class="rating">{{ product.rating }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product', 'index'],
  computed: {
    imageStyle() {
      const gradients = [
        'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, transparent 100%)',
        'linear-gradient(135deg, #fefce8 0%, #fef3c7 50%, transparent 100%)',
        'linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 50%, transparent 100%)',
        'linear-gradient(135deg, #fdf2f8 0%, #fbcfe8 50%, transparent 100%)',
        'linear-gradient(135deg, #f0f9ff 0%, #ccfbff 50%, transparent 100%)',
        'linear-gradient(135deg, #fef3e8 0%, #ffe8cc 50%, transparent 100%)',
        'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, transparent 100%)',
        'linear-gradient(135deg, #fff7ed 0%, #fed7aa 50%, transparent 100%)',
        'linear-gradient(135deg, #f8f9ff 0%, #e2e8ff 50%, transparent 100%)',
        'linear-gradient(135deg, #fafaf9 0%, #f4f4e9 50%, transparent 100%)'
      ];
      
return {
  backgroundImage: `url(${this.product.image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};
    }
  }
}
</script>

