<template>
  <div id="nav">
    <router-link to="/" id="txt-url">Tracking the TV</router-link>
    <router-link to="/about">Sobre</router-link>
    <router-link to="/contact">Contato</router-link>
    <a href="#" v-if="logged" @click.prevent="logOut">Logout</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "NavbarView",

  methods: {
    ...mapActions(['invertLogged']),
    logOut() {
      this.$router.push("/login");
      this.invertLogged();
    },
  },
  computed:{
   logged(){
     return this.$store.state.logged
   }
  }
};
</script>

<style scoped>
#nav {
  background-color: #222;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
}

#nav a {
  color: #fff;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}

#nav #txt-url {
  font-weight: bold;
  margin: auto;
  margin-left: 0;
}
#nav a:hover {
  color: #fff;
}
</style>