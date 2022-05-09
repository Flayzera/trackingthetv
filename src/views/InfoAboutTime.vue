<template>
    <div class="container">
    <div class="row flex-d">
      <div class="img">
        <img src="../img/abouttime.jpg" />
        <li>20 de dezembro de 2013 No cinema / 2h 03min / Romance</li>
        <li>Direção: Richard Curtis</li>
        <li>Roteiro: Richard Curtis</li>
        <li>Elenco: Domhnall Gleeson, Bill Nighy, Rachel McAdams</li>
        <li>Título original: About Time</li>
      </div> 
      <div class="text">
        <p class="sinopse">
          <strong>SINOPSE:</strong> Ao completar 21 anos, Tim (Domhnall Gleeson) é surpreendido com a notícia dada por seu pai (Bill Nighy) de que pertence a uma linhagem de viajantes no tempo. Ou seja, todos os homens da família conseguem viajar para o passado, bastando apenas ir para um local escuro e pensar na época e no local para onde deseja ir. Cético a princípio, Tim logo se empolga com o dom ao ver que seu pai não está mentindo. Sua primeira decisão é usar esta capacidade para conseguir uma namorada, mas logo ele percebe que viajar no tempo e alterar o que já aconteceu pode provocar consequências inesperadas.
        </p>
        <p class="plataforma">PLATAFORMAS DISPONÍVEIS: </p>
        <a href="https://www.primevideo.com/detail/0FJWBCL8OMLZ4BIHT7RYH54Z97/ref=atv_dp?language=pt_BR"><img class="png" src="../img/primevideo.png"></a>
        <a href="https://www.starplus.com/pt-br/series/this-is-us/2aoqr1oEavrr"><img class="png" src="../img/starplus.png"></a>
        <a href="https://tv.apple.com/br/movie/questao-de-tempo/umc.cmc.2vfd635fg0hxxlsqcetlzw8mp"><img class="png" src="../img/apletv.jpeg"></a>
        <a href="https://play.google.com/store/movies/details/Quest%C3%A3o_de_Tempo?id=-r94X8AwZhg"><img src="../img/google-play-movies.jpg"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'InfoAboutTime'
}
</script>

<style scoped>
.png{
  width: 90px;
  height: 90px;
  padding: 5px;
}
li{
   margin-top: 10px;
   list-style-type: none;
}

.plataforma{
  font-size: 17pt;
  font-weight: bold;
}

.text{
  flex: 1;
  margin-top: 100px;
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

.sinopse{
  text-align: justify;
}
</style>