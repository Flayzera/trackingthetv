<template>
  <div>
    <h1 class="text-center">Tracking the TV</h1>
    <div class="container">
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping"
          ><i class="bi bi-search"></i
        ></span>
        <input type="text" v-model="search" class="form-control" placeholder="Pesquisar" aria-label="Pesquisar"/>
      </div>
    </div>
    <div class="container" v-if="!search || search==''">
      <div class="row">
        <div class="col-3">
          <p class="title text-center">Séries mais populares</p>
          <div class="d-flex justify-content-center">
            <div class="card-home c1" @click="$router.push('/info1')"></div>
          </div>
        </div>
        <div class="col-3">
          <p class="title text-center">Filmes mais populares</p>
          <div class="d-flex justify-content-center">
            <div class="card-home c2" @click="$router.push('/info2')"></div>
          </div>
        </div>
        <div class="col-3">
          <p class="title text-center">Animes mais populares</p>
          <div class="d-flex justify-content-center">
            <div class="card-home c3" @click="$router.push('/info3')"></div>
          </div>
        </div>
        <div class="col-3">
          <p class="title text-center">Lançamentos mais populares</p>
          <div class="d-flex justify-content-center">
            <div class="card-home c4" @click="$router.push('/info4')"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <div class="row">
        <div class="col-12">
          Resultado da Pesquisa:
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          imagem
        </div>
        <div class="col-6">
          texto
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/home.css";
export default {
  name: "HomeView",
  data() {
    return {
      search: null,
      posts: []
    }
  },
  async mounted() {
    if (!this.logged && (this.$route.name != 'login')) {
      this.$router.push("/login");
    }
    this.getPosts()
  },
  computed:{
   logged(){
     return this.$store.state.logged
   }
  },
  methods:{
    async getPosts(){
        const req = await fetch("http://localhost:3000/posts/", {
          method: 'GET',
          headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(data => {
          this.posts = data;
        });

        return req;
    },
  },
  watch:{
   async search(){
      console.log(this.posts)
    }
  }
};
</script>

<style scoped>
.container{
  margin: 100px;
}
h1 {
  font-weight: bold;
  margin-top: 30px;
  font-size: 96px;
  color: black;
}

.form-control {
  text-align: center;
}
.container {
  margin-top: 35px;
}

.card2 {
  flex-wrap: all;
}
.card-home {
  width: 188px;
  height: 267px;
  cursor: pointer;
}

.title {
  font-weight: bold;
  color: black;
}

.row {
  margin-top: 8%;
}
</style>
