<template>
  <nav class="navbar">
    <div class="logo">Devore</div>

    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/cart">Cart</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background: #F7F3EF;
  border-bottom: 1px solid #E0DAD5;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 600;
}

.menu a {
  margin-left: 20px;
  text-decoration: none;
  color: #2F2F2F;
  font-weight: 500;
}

.menu a:hover {
  opacity: 0.7;
}
</style>