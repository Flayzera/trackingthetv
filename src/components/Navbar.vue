<template>
  <div id="nav">
     <router-link to='/' id='txt-url'>Tracking the TV</router-link>
     <router-link to='/about'>Sobre</router-link>
     <router-link to='/contact'>Contato</router-link>
     <!-- criar pagina de login -->
     <router-link to='/contact'>Login</router-link>
  </div>
  
</template>

<script>
export default {
    name:'NavBar'
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
  color: #FCBA03;
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