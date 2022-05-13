<template>
  <div class="container">
    <div class="center">
      <h1>Contate-nos</h1>
      <form action="" v-on:submit="checkForm">
        <div class="txt-field">
          <input autocomplete="off" type="text" name="nome" v-model="nome" ref="nome" required />
          <span></span>
          <label>Informe seu nome</label>
        </div>
        <div class="txt-field">
          <input autocomplete="off" type="text" name="email" v-model="email" ref="email" required/>
          <span></span>
          <label>Informe seu e-mail</label>
        </div>
        <select class="mb-2 form-select" aria-label="Default select example" name="select" v-model="select"> Assuntos
          <option value="0" selected>Assuntos</option>
          <option value="1">Dúvidas</option>
          <option value="1">Problemas com o site</option>
          <option value="1">Feedback</option>
        </select>
        <div>
          <label class="mb-2 " style="color: black;">Mensagem</label>
          <textarea type="text" class="msg" name="mensagem" v-model="mensagem"></textarea>
        </div>
        <button class="btn" @click.prevent="processValidation()">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>


export default {
  name: "ContactView",
  data() {
    return {
      nome: "",
      email: "",
      mensagem: "",
      select: "0",
    };
  },
  methods: {
    processValidation() {
      let emailValidation = new RegExp("[a-z0-9]+@[a-z]+[.]+[a-z]{2,3}")
      let res = emailValidation.test(this.email)
   
      if (this.nome == "") {
        alert("Informe o seu NOME!");
        this.$refs.nome.focus();
      } else if (this.email == "" || res == false) {
        alert("Informe seu EMAIL corretamente!");
        this.email = "";
        this.$refs.email.focus();
      } else if (this.mensagem == "") {
        alert("Preencha o campo com a sua MENSAGEM!");
        this.$refs.nome.focus();
      } else if (this.select != "1") {
        alert("Selecione um ASSUNTO");
        this.$refs.nome.focus();
      } else {
        alert("SUA MENSAGEM FOI ENVIADA COM SUCESSO!");
        this.nome = '';
        this.email = '';
        this.select = 0;
        this.mensagem = '';
        this.$refs.nome.focus();
      }
    },
  },
}
</script>

<style scoped>

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 500px;
  border-radius: 1 0px;
  background: rgba(234, 241, 241, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  background-size: cover;
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
  color:black;  
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
  background-color: rgb(15, 122, 158);
  transition: 0.5s;
}

.msg {
  display: flex;
  margin-bottom: 20px;
  height: 150px;
  width: 100%;
  border: none;
  padding: 5px;
}
</style>