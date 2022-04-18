<template>
<div>
  <h1 class="text-center">Tracking the TV</h1>
  <div class="container">
    <div class="input-group flex-nowrap">
      <span class="input-group-text" id="addon-wrapping"><i class="bi bi-search"></i></span>
      <input type="text" class="form-control" placeholder="Pesquisar" aria-label="Pesquisar">
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <p class="title text-center">Séries mais populares</p>
        <div class="d-flex justify-content-center">
          <div class="card-home c1" @click="$router.push('/info1')">
          </div>
        </div>
      </div>
      <div class="col-3">
        <p class="title text-center">Filmes mais populares</p>
        <div class="d-flex justify-content-center">
          <div class="card-home c2">
          </div>
        </div>
      </div>
      <div class="col-3">
        <p class="title text-center">Animes mais populares</p>
        <div class="d-flex justify-content-center">
          <div class="card-home c3">
          </div>
        </div>
      </div>
      <div class="col-3">
        <p class="title text-center">Lançamentos mais populares</p>
        <div class="d-flex justify-content-center">
          <div class="card-home c4">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import '../assets/home.css';
export default {
name: 'HomeView'
}
</script>

<style scoped>

h1{
  font-weight: bold;
  margin-top: 70px;
  font-size: 96px;
}

.form-control{
  text-align: center;
}
.container{
  margin-top: 35px;
}

.card2{
  flex-wrap: all;
}
.card-home{
  width: 188px;
  height: 267px;
  cursor: pointer;
}

.title{
  font-weight: bold;
}

.row{
  margin-top: 8%;
}
</style>
