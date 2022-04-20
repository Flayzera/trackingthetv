<template>
    <div class="container">
    <div class="center">
    <h1>Contate-nos</h1>
    <form method="post">
        <div class="txt-field">
            <input type="text" required>
            <span></span>
            <label>Informe seu nome</label>
        </div>
        <div class="txt-field">
            <input type="text" required>
            <span></span>
            <label>Informe seu e-mail</label>
        </div>
        <div>
        <label class="mb-2">Mensagem</label>
          <textarea type="text" class="msg"></textarea>            
        </div>
        
        <button class="btn">Enviar</button>
    </form>
    </div>
</div>
</template>

<script>
export default {
    name: 'ContactView'
}
</script>

<style scoped>
   .container{
       margin: 0;
       padding: 0;
       height: 100vh;
       overflow: hidden;
       float: left;
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
        width: 100%;
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
    
    .msg{
        display: flex;
        margin-bottom: 20px;
        height: 150px;
        width: 100%;
        border: 2px solid black;
        padding: 5px;
    }

   
</style>