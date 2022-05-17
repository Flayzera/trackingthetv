<template>
    <div class="container">
    <div class="row flex-d">
      <div class="img">
        <img src="../img/aeradogelo.jpg" class="img-capa" />
        <li>22 de Março de 2002</li>
        <li>Direção: Chris Wedge, Carlos Saldanha</li>
        <li>Roteiro: Mike Thurmeier, Galen T. Chu</li>
      </div> 
      <div class="text">
        <p class="sinopse">
          <strong>SINOPSE:</strong>Vinte mil anos atrás, num mundo coberto de gelo, o mamute Manfred e a preguiça Sid resgatam um bebê humano órfão. Agora, os dois vão enfrentar muitas aventuras até devolver o filhote de gente à sua tribo, que migrou para um novo acampamento.
        </p>
        <p class="plataforma">PLATAFORMAS DISPONÍVEIS: </p>
        <a href="https://www.disneyplus.com/"><img class="png" src="../img/starplus.png"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'InfoEraDoGelo'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');
.img-capa{
    height: 478px;
}
.png{
  width: 90px;
  height: 90px;
  margin: 10px;
  border-radius: 10px;
}
li{
  margin-top: 10px;
  list-style-type: none; 
  color: black;
}

.plataforma{
  font-size: 17pt;
  font-weight: bold;
}

.text{
  flex: 1;
  margin-top: 100px; 
  text-align: justify;
  color: black;
}

.img{
  flex: 0.4;
  margin-left: 124px;
}

.flex-d{
  display: flex;
  flex-direction: row;
  margin: 36px;
}

</style>