
<template>
  <div class="container">
    <div class="center">
      <h1>Registre-se</h1>
      <form method="POST" @submit="processRegister">
        <div class="txt-field">
          <input autocomplete="off" type="text" name="nome" v-model="nome" ref="nome" required />
          <span></span>
          <label>Nome Completo</label>
        </div>
        <div class="txt-field">
          <input autocomplete="off" type="text"  v-model="email" ref="email" required />
          <span></span>
          <label>E-mail</label>
        </div>
        <div class="txt-field">
          <input autocomplete="off" type="text" name="usuario" v-model="usuario" ref="usuario" required />
          <span></span>
          <label>Usuário</label>
        </div>
        <div class="txt-field">
          <input type="password" name="senha" v-model="senha" ref="senha" required />
          <span></span>
          <label>Senha</label>
        </div>
        <button class="btn" type="submit">Cadastre-se</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data(){
    return{
      nome: null,
      email: null,
      usuario: null,
      senha: null
    }
  },
  methods: {
    processRegister(e){
      e.preventDefault();
      /* eslint-disable */
      let emailValidation = new RegExp("[a-zA-Z0-9]+@[a-z]+[.]+[a-z]{2,3}")
      let passwordValidation = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
      let resEmail = emailValidation.test(this.email)
      let resPassword = passwordValidation.test(this.senha)

   
      if (this.nome == "") {
        alert("Informe o seu NOME!");
        this.$refs.nome.focus();
      } else if (this.email == "" || resEmail == false) {
        alert("Informe seu EMAIL corretamente!");
        this.email = "";
        this.$refs.email.focus();
      } else if (this.usuario == "") {
        alert("INforme o seu USUÁRIO");
        this.$refs.usuario.focus();
      } else if (this.senha == "" || resPassword == false) {
        alert("Sua deve conter no mínimo 8 caracteres, dentre eles pelo menos 1 letra maiúscula e 1 número");
        this.senha = "";
        this.$refs.senha.focus();
      }else{
        this.createUsers();
        alert("Cadastro realizado com sucesso!");
        this.$router.push('/login');
        
      } 
    },
    async createUsers(){
        
      const data = {
        nome: this.nome,
        email: this.email,
        usuario: this.usuario,
        senha: this.senha
      }
      const dataJson = JSON.stringify(data);
      const req = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: dataJson
      });
      const res = await req.json()
      
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 1 0px;
  margin-top: 50px;
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
  border-bottom: 2px solid;
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
  background: black;
  transition: 0.5s;
}

.txt-field input:focus ~ label,
.txt-field input:valid ~ label {
  top: -5px;
  color: black;
}
.txt-field input:focus ~ span::before,
.txt-field input:valid ~ span::before {
  width: 100%;
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