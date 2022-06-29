const login = document.getElementById('username');
const senha = document.getElementById('password');
const botao = document.getElementById('btn')


botao.addEventListener('click',() =>{
    
    if(login.value == "admin" && senha.value == "admin"){
        alert("Logado com sucesso!")
    }else {
        alert("Usuario ou senha incorretos")
    }
    
})