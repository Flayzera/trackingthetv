<template>
      <div class="container">
    <div class="row flex-d">
      <div class="img">
        <img src="../img/kimetsu.jpg" />
        <li>Desde 2019 / min / Fantasia, Ação, Animação</li>
        <li>Título original : Kimetsu no Yaiba</li>
        <li>Criado por: Koyoharu Gotouge</li>
        <li>Elenco: Natsuki Hanae, Akari Kito, Hiro Shimono</li>
        <li>Nacionalidade: Japão</li>
      </div> 
      <div class="text">
        <p class="sinopse">
          <strong>SINOPSE:</strong> Em Kimetsu no Yaiba, Tanjiro, um bondoso jovem que ganha a vida vendendo carvão descobre que sua família foi massacrada por um demônio. E, para piorar, Nezuko, sua irmã mais nova e única sobrevivente, também acabou transformada em um demônio. Arrasado com essa sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana e para destruir o demônio que matou seus entes queridos.
        </p>
        <p class="plataforma">PLATAFORMAS DISPONÍVEIS: </p>
        <a href="https://www.netflix.com/br/title/81091393#:~:text=Demon%20Slayer%3A%20Kimetsu%20no%20Yaiba%20%7C%20Netflix"><img class="png" src="../img/netflix.jpg"></a>
        <a href="https://www.crunchyroll.com/pt-br/demon-slayer-kimetsu-no-yaiba"><img class="png" src="../img/crunchyroll.jpg"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'InfoKimetsu'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');
.png{
  width: 90px;
  height: 90px;
  margin: 10px;
  border-radius: 5px;
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