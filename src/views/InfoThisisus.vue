<template>
  <div class="container">
    <div class="row flex-d">
      <div class="img">
        <img src="../img/thisisus.jpg" />
        <li>2016 - 2022 / min / Drama</li>
        <li>Criado por: Dan Fogelman</li>
        <li>Elenco: Milo Ventimiglia, Mandy Moore, Sterling K. Brown</li>
        <li>Nacionalidade: EUA</li>
      </div> 
      <div class="text">
        <p class="sinopse">
          <strong>SINOPSE:</strong> This is Us, série dramática criada por Dan
          Fogelman, acompanha o cotidiano da família Pearson durante várias
          linhas do tempo diferentes. Depois da morte de um dos seus trigêmeos
          durante o parte, o casal Rebecca (Mandy Moore) e Jack (Milo
          Ventimiglia) decidem adotar um recém nascido que acabara de ser
          resgatado pelos bombeiros. Durante os episódios, a série apresenta os
          problemas e dilemas dos Pearsons enquanto uma família e também a vida
          particular de seus filhos depois de adultos: Randall (Sterling K.
          Brown) um advogado lidando com a volta de seu pai biológico, Kevin
          (Justin Hartley), um belo ator de televisão buscando novas
          oportunidades no teatro e Kate (Chrissy Metz), uma mulher tentando
          lidar com seu peso e superar traumas da infância.
        </p>
        <p class="plataforma">PLATAFORMAS DISPONÍVEIS: </p>
        <a href="https://www.primevideo.com/detail/amzn1.dv.gti.4ebab3d2-c824-3f30-c1d9-50a2a12069fb?ref_=dvm_pds_tit_br_dc_s_g_mkw_svYXGjUTq-dc_pcrid_476391961563&mrntrk=slid__pgrid_112816236952_pgeo_9101518_x__ptid_kwd-297775399091"><img class="png" src="../img/primevideo.png"></a>
        <a href="https://www.starplus.com/pt-br/series/this-is-us/2aoqr1oEavrr"><img class="png" src="../img/starplus.png"></a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "InfoThisIsUs",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');

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
  color: black;
}

.text{
  flex: 1;
  margin-top: 100px;
  color: black;
  text-align: justify;
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