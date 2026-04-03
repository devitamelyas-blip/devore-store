<template>
  <div id="app" class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      
      <!-- BACKGROUND IMAGE -->
      <img src="/images/hh.jpg" class="hero-bg" />

      <!-- OVERLAY -->
      <div class="hero-overlay"></div>

      <!-- CONTENT -->
      <div class="hero-content">
        <h1 class="brand-title">DEVORE</h1>
        <p class="tagline">Grace in Every Fold, Elegance in Every Moment.</p>

        <button class="btn-shop-outline">
          SHOP NOW
        </button>
      </div>

    </section>

<!-- Best Seller Section -->
<section class="bestseller-section">
  <div class="container">
    <div class="section-header">
      <h2>Best Sellers</h2>
      <p>Our most loved pieces</p>
    </div>
    
    <!-- Carousel -->
    <div class="carousel-container" ref="carousel">
      <div class="carousel-track" :style="{ transform: `translateX(${carouselTransform}px)` }">
        <ProductCard
          v-for="product in bestsellers"
          :key="product.id"
          :product="product"
          :index="product.id - 1"
        />
      </div>
    </div>
    
    <!-- Shop Now CTA -->
    <div class="shop-now-cta">
      <button class="shop-now-btn" @click="goToShop">
        <span>Shop All Collection</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </div>
</section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 DEVORE. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import FeatureCard from '../components/FeatureCard.vue'
import StatCard from '../components/StatCard.vue'
import ProductCard from '../components/ProductCard.vue'


export default {
  name: 'App',
  components: {
    ProductCard, 
    FeatureCard,
    StatCard
  },
  data() {
    return {
      carouselTransform: 0, 
      bestsellers: [ 
        {
          id: 1,
          name: "Floréa Whisper",
          price: "Rp 136.000",
          image: "/images/products/id1.jpg",
          color: "ivory",
          rating: 4.9
        },
        {
          id: 2,
          name: "Virelle Essence", 
          price: "Rp 137.000",
          image: "/images/products/id2.jpg",
          color: "cream",
          rating: 4.8
        },
        {
          id: 3,
          name: "Nerina Softscape",
          price: "Rp 130.000", 
          image: "/images/products/id3.jpg",
          color: "white",
          rating: 5.0
        },
        {
          id: 4,
          name: "Aloura Meadow",
          price: "Rp 133.000",
          image: "/images/products/id4.jpg", 
          color: "pearl",
          rating: 4.9
        },
        {
          id: 5,
          name: "Celestia Veil",
          price: "Rp 132.000",
          image: "/images/products/id5.jpg",
          color: "off-white",
          rating: 4.7
        },
        {
          id: 6,
          name: "Ivory Fleur",
          price: "Rp 139.000",
          image: "/images/products/id6.jpg",
          color: "ivory",
          rating: 4.9
        },
        {
          id: 7,
          name: "Rosé Haven",
          price: "Rp 134.000",
          image: "/images/products/id7.jpg",
          color: "champagne",
          rating: 4.8
        },
        {
          id: 8,
          name: "Elowen Dusk",
          price: "Rp 131.000",
          image: "/images/products/id8.jpg",
          color: "white",
          rating: 5.0
        },
        {
          id: 9,
          name: "Aurelia Garden",
          price: "Rp 138.000",
          image: "/images/products/id9.jpg",
          color: "ivory",
          rating: 4.8
        },
        {
          id: 10,
          name: "Lunara Bloom",
          price: "Rp 129.000",
          image: "/images/products/id10.jpg",
          color: "cream",
          rating: 4.9
        },
                {
          id: 11,
          name: "Serene Petalia",
          price: "Rp 132.000",
          image: "/images/products/id11.jpg",
          color: "cream",
          rating: 4.9
        },
                {
          id: 12,
          name: "Veloura Mist",
          price: "Rp 135.000",
          image: "/images/products/id12.jpg",
          color: "cream",
          rating: 4.9
        }
      ],
    }
  },
  methods: {
    handleMouseMove(e) {
      const rect = this.$refs.carousel.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const containerWidth = rect.width;
      
      const maxTransform = -(containerWidth * 0.8);
      const transform = (mouseX / containerWidth) * maxTransform;
      
      this.carouselTransform = Math.max(-maxTransform, Math.min(0, transform));
    },
    
    handleMouseLeave() {
      this.carouselTransform = 0;
    },
    
    goToShop() {
      alert('Redirect to Shop Page...'); 
    },
    
  },
  mounted() {
    this.initAnimations();
    
    const carousel = this.$refs.carousel;
    if (carousel) {
      carousel.addEventListener('mousemove', this.handleMouseMove);
      carousel.addEventListener('mouseleave', this.handleMouseLeave);
    }
  }
}
</script>

