<template>
  <nav class="navbar">
    <div class="nav-inner">
      
      <!-- LEFT -->
      <div class="logo">Devore</div>

      <!-- CENTER -->
      <div class="menu">
        <router-link to="/"></router-link>
        <router-link to="/shop"></router-link>
        <router-link to="/collection"></router-link>
      </div>

      <!-- RIGHT -->
      <div class="actions">
        <i class="pi pi-search"></i>
        <i class="pi pi-heart"></i> 
        <router-link to="/cart">
          <i class="pi pi-shopping-bag"></i>
        </router-link>
        <i class="pi pi-user"></i>
      </div>

    </div>
  </nav>
</template>

<style scoped>
/* NAVBAR WRAPPER */
.navbar {
  width: 100%;
  position: absolute; 
  top: 0;
  left: 0;
  z-index: 10;
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

/* LOGO */
.logo {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  justify-self: start;
}

/* MENU */
.menu {
  display: flex;
  gap: 30px;
  justify-self: center;
}

.menu a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  position: relative;
  transition: 0.3s;
}

.menu a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0%;
  height: 1px;
  background: #ffffff;
  transition: 0.3s;
}

.menu a:hover::after {
  width: 100%;
}

.actions {
  display: flex;
  gap: 18px;
  justify-self: end;
  align-items: center;
}

/* ICON */
.actions i {
  font-size: 18px;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.3s ease;
}

.actions i:hover {
  opacity: 0.6;
  transform: translateY(-1px);
}

.actions a {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .nav-inner {
    grid-template-columns: auto auto;
  }

  .menu {
    display: none; 
  }
}
</style>