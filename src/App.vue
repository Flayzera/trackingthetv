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
  background-image: linear-gradient(180deg, #bce5ff 0, #9db9f2 50%, #7e8fb3 100%);
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
