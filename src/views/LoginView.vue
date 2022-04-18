<template>
<div class="container">
    <div class="center">
    <h1>Login</h1>
    <form method="post">
        <div class="txt-field">
            <input type="text" required>
            <span></span>
            <label>Usuário</label>
        </div>
        <div class="txt-field">
            <input type="text" required>
            <span></span>
            <label>Informe sua senha</label>
        </div>
        <button class="btn" @click="$router.push('/')">Login</button>
        <router-link to='/register' class="btn">Cadastre-se</router-link>
    </form>
    </div>
</div>

</template>

<script>
export default {
    name: 'LoginView'
}
</script>

<style scoped>
   .container{
       margin: 0;
       padding: 0;
       height: 100vh;
       overflow: hidden;
   }

    .center{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        background: #fff;
        border-radius: 1 0px;
    }

    .center h1{
        text-align: center;
        padding: 0 0 20px 0;
        border-bottom: 1px solid black;
    }

    .center form{
        padding: 0 40px;
        box-sizing: border-box;
    }

    form .txt-field{
        position: relative;
        border-bottom: 2px solid #adadad;
        margin: 30px 0;
    }
    .txt-field input{
        widows: 100%;
        padding: 0 5px;
        height: 40px;
        font-size: 16px;
        border: none;
        background: none;
        outline: none;
    }

    .txt-field label{
        position: absolute;
        top: 50%;
        left: 5px;
        color: #adadadad;
        transform: translateY(-50%);
        font-size: 16px;
        pointer-events: none;
        transition: .5s;
    }
    
    .txt-field span::before{
        content: '';
        position: absolute;
        top: 40px;
        left: 0;
        width: 0%;
        height: 2px;
        background: black;
        transition: .5s;
    }

    .txt-field input:focus ~ label,
    .txt-field input:valid ~ label{
     top: -5px;   
     color: black;
    }
    .txt-field input:focus ~ span::before,
    .txt-field input:valid ~ span::before{
     width: 100%;
    }
    
    .btn{
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
    .btn:hover{
        border-color: #adadad;
        transition: .5s;
    }
    
</style>