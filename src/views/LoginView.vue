<template>
  <div class="container">
    <div class="center">
      <h1>Login</h1>
      <form @submit="checkForm">
        <div class="txt-field">
          <input autocomplete="off" type="text" name="usuario" v-model="usuario" ref="username" required/>
          <span></span>
          <label>Usuário</label>
        </div>
        <div class="txt-field">
          <input type="password" name="senha" v-model="senha" required />
          <span></span>
          <label>Informe sua senha</label>
        </div>
        <button class="btn" @click.prevent="processLogin()">Login</button>
        <router-link to="/register" class="btn">Cadastre-se</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "LoginView",
  data() {
    return {
      usuario: null,
      senha: null
    };
  },
  methods: {
    ...mapActions(['invertLogged']),
    async getUsers(){
        const req = await fetch("http://localhost:3000/users", {
          method: 'GET'
        })
        .then(response => response.json())
        .then(data => data);

        return req;
    },
    async processLogin() {
      let users = await this.getUsers()
      let logged = false;
      users.forEach((item) => {
        if(this.usuario == item.usuario && this.senha == item.senha){
          logged = true;
        }
      })
      if (logged) {
        this.$router.push("/");
        this.invertLogged();
      } else {
        alert("Usuário ou Senha incorretos");
        this.usuario = "";
        this.senha = "";
        this.$refs.username.focus();
      }
    },
  },
  computed: {
    ...mapState(['logged',])
  },
  mounted() {
    if (this.logged) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: black;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 1 0px;
}

.center h1 {
  text-align: center;
  padding: 0 0 20px 0;
  border-bottom: 1px solid black;
}

.center form {
  padding: 0 40px;
  box-sizing: border-box;
}

form .txt-field {
  position: relative;
  border-bottom: 2px solid black;
  margin: 30px 0;
}
.txt-field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}

.txt-field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: black;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}

.txt-field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
}

.txt-field input:focus ~ label,
.txt-field input:valid ~ label {
  top: -5px;
  color: black;
}

.btn {
  width: 100%;
  height: 50px;
  border: 1px solide;
  background: black;
  border-radius: 25px;
  font-size: 18px;
  color: #fff;
  margin: 5px;
  cursor: pointer;
  outline: none;
}
.btn:hover {
  background-color: rgb(3, 73, 94);
  transition: 0.5s;
}
</style>