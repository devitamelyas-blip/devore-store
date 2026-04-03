<template>
  <div class="feature-card">
    <div class="feature-icon">{{ feature.icon }}</div>
    <h3 class="feature-title">{{ feature.title }}</h3>
    <p class="feature-description">{{ feature.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['feature']
}
</script>

<style scoped>
.feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.feature-description {
  color: #64748b;
  line-height: 1.6;
}
</style>