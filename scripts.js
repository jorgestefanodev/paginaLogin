// função para validação de login
function login() {
    let usuario = document.getElementById('user').value
    let senha = document.getElementById('password').value
    if (usuario == 'stefano' && senha == 1234){
        //alert('Login autorizado')  
        window.location.href = "index.html"
    } else if (usuario == '' || senha == ''){
        alert('Preencha os dados corretamente')
    } else {
        alert('Usuario ou senha incorreto')
    }
}
