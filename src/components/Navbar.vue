<template>
  <div id="nav">
     <router-link to='/' id='txt-url'>Tracking the TV</router-link>
     <router-link to='/about'>Sobre</router-link>
     <router-link to='/contact'>Contato</router-link>
     <a href="#" @click.prevent='logOut'>Logout</a>
  </div>
  
</template>

<script>
export default {
    name:'NavbarView',
    
    methods:{
      logOut(){
        localStorage.removeItem('isLoggedIn')
        this.$router.push('/login')
      }
    }
}
</script>

<style scoped>


#nav{
  background-color: #222;
  padding: 15px 50px;
  display:flex;
  justify-content: flex-end;
}

#nav a{
  color: #FFF;
  text-decoration: none;
  margin: 12px;
  transition: .5s;
  
}

#nav #txt-url{
  font-weight: bold;
  margin: auto;
  margin-left: 0;
}
#nav a:hover{
  color: #fff;
}

</style>