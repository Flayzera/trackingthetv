<template>
  <div id="nav">
     <router-link to='/' id='txt-url'>Tracking the TV</router-link>
     <router-link to='/about'>Sobre</router-link>
     <router-link to='/contact'>Contato</router-link>
     <router-link to='/login'>Login</router-link>
  </div>
  
</template>

<script>
export default {
    name:'NavbarView'
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
  color: #2691d9;
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