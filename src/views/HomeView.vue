<template>
<div>
  <h1>Tracking the TV</h1>
  <div class="container">
    <div class="input-group flex-nowrap">
      <span class="input-group-text" id="addon-wrapping"><i class="bi bi-search"></i></span>
      <input type="text" class="form-control" placeholder="Pesquisar" aria-label="Username" aria-describedby="addon-wrapping">
    </div>
  </div>
</div>

</template>

<script>

export default {
name: 'HomeView'
}
</script>

<style scoped>

h1{
  font-weight: bold;
  margin-top: 60px;
  font-size: 96px;
}

.form-control{
  text-align: center;
}
.container{
  margin-top: 35px;
}
</style>
