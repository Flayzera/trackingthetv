<template>
  <div class="title text-center">
    <h1 class="text-align">QUEM SOMOS</h1>
  </div>
  <div class="about d-flex justify-content-center">
    <div class="container-box text-center">
      <div class="content-box">
        A tracking the TV veio para solucionar na hora da busca do que o usuário
        quer assistir, trazendo os catálogos das plataformas disponíveis onde o
        usuário poderá filtrar sua busca de acordo com a sua preferência naquele
        momento, encontrando todas as opções em um só lugar.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about {
  margin-top: 40px;
  min-height: 400px;
}

.container-box {
  width: 600px;
  height: 200px;
  background-color: rgb(0, 0, 0);
  color: #fff;
  border-radius: 5px;
}

.content-box {
  padding: 40px;
}

.title {
  margin-top: 80px;
}
</style>

