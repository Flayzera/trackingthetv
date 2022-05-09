<template>
      <div class="container">
    <div class="row flex-d">
      <div class="img">
        <img src="../img/doctorstrange2.jpg" />
        <li>5 de maio de 2022 No cinema / 2h 06min / Fantasia, Ação, Aventura</li>
        <li>Direção: Sam Raimi</li>
        <li>Roteiro: Michael Waldron, Stan Lee</li>
        <li>Elenco: Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor</li>
        <li>Título original: Doctor Strange in the Multiverse of Madness</li>
      </div> 
      <div class="text">
        <p class="sinopse">
          <strong>SINOPSE:</strong>Em Doutor Estranho no Multiverso da Loucura, após derrotar Dormammu e enfrentar Thanos nos eventos de Vingadores: Ultimato, o Mago Supremo, Stephen Strange (Benedict Cumberbatch), e seu parceiro Wong (Benedict Wong), continuam suas pesquisas sobre a Joia do Tempo. Mas um velho amigo que virou inimigo coloca um ponto final nos seus planos e faz com que Strange desencadeie um mal indescritível, o obrigando a enfrentar uma nova e poderosa ameaça. O longa se conecta com a série do Disney+ WandaVision e tem relação também com Loki. O longa pertence a fase 4 do MCU onde a realidade do universo pode entrar em colapso por causa do mesmo feitiço que trouxe os vilões do Teioso para o mundo dos Vingadores e o Mago Supremo precisará contar com a ajuda de Wanda (Elizabeth Olsen), que vive isolada desde os eventos de WandaVision.</p>
        <p class="plataforma">PLATAFORMAS DISPONÍVEIS: </p>
        <p style="color: red; font-weight: bold" >Ainda não disponível nas plataformas!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'InfoDrEstranho'
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