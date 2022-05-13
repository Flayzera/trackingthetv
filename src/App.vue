<template>
  <div class="main-div">
    <div class="row">
      <NavbarView />
      <router-view />
     
    </div>
     <FooterView />
  </div>
</template>

<script>
import FooterView from "./components/Footer.vue";
import NavbarView from "./components/Navbar.vue";

export default {
  components: {
    NavbarView,
    FooterView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  min-height: 100vh;
  background-size: cover;
  background-image:url('https://img.freepik.com/fotos-gratis/fundo-azul-do-gradiente-de-luxo-abstrato-liso-azul-escuro-com-vinheta-preta-studio-banner_1258-52379.jpg?t=st=1652369036~exp=1652369636~hmac=425743d50bd10f4d70b96a71bcb6689352a3f65913439aed2662476a73c03d3c&w=900');
  }
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.row{
  margin-right: 0 !important;
}
</style>
