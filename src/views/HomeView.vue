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
    <div class="container filmes" v-else-if="this.posts.length > 0">
      <div class="row">
        <div class="col-12">
          Resultado da Pesquisa:
        </div>
      </div>
      <div class="filme" v-for="p in posts" :key="p.id">
      <div class="row">
        <div class="col-3">
           <button @click="$router.push(p.path)" class="filme-btn">
              <img :src="getImgUrl(p.capa)" alt="" class="img-fluid img-capa">
           </button>
        </div>
        <div class="col-9 info-filme">
          <p class="title">{{p.titulo}}</p>
          <p class="sec-text">{{p.data_lancamento}}</p>
          <p class="sec-text">{{p.genero}}</p>
          <p class="sec-text">{{p.produtora}}</p>
          <p class="sec-text">{{p.diretor}}</p>
          <p class="sec-text">{{p.roteiro}}</p>
        </div>
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
      posts: [],
      originalPosts: []

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
   getImgUrl(pet) {
    var img = require('@/' + pet)
    return img
  },
    async getPosts(){
        const req = await fetch("http://localhost:3000/posts/", {
          method: 'GET',
          headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(data => {
          this.posts = data;
          this.originalPosts = data;
        });

        return req;
    },
  },
  watch:{
   async search(){
      if(this.search == '' || !this.search){
        this.posts = this.originalPosts;
        return
      }
      this.posts = [];
       this.originalPosts.forEach((item) => {
        if(item.titulo.toLowerCase().includes(this.search.toLowerCase())){
          this.posts.push(item);
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
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

.img-capa{
  height: 324px;
}

.filme, .filmes{
  color: #fff;
  font-weight: bold;
  font-size: 22px;
  text-decoration: none;
  .info-filme{
    background: rgba(255,255,255, 0.5);
    border-radius: 8px;
    padding: 16px;
    color: #000;
  }
  .filme-btn{
    background: none;
    border: none;
  }

  .sec-text{
    font-size: 16px;
  }
}

.row {
  margin-top: 8%;
}
</style>
