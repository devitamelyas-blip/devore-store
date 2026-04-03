<template>
  <div class="stat-card">
    <div class="stat-number">{{ stat.number }}</div>
    <div class="stat-label">{{ stat.label }}</div>
  </div>
</template>

<script>
export default {
  props: ['stat']
}
</script>

<style scoped>
.stat-card {
  text-align: center;
}

.stat-number {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  background: linear-gradient(45deg, #fff, #f0f0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.9);
  font-weight: 500;
}
</style>