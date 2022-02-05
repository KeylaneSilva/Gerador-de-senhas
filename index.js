let sliderElement1 = document.querySelector("#slider1")
let sliderElement2 = document.querySelector("#slider2")
let sliderElement3 = document.querySelector("#slider3")
let sliderElement4 = document.querySelector("#slider4")

let buttonElement = document.querySelector("#button")

let tamanhoSenha1 = document.querySelector("#valor1")
let tamanhoSenha2 = document.querySelector("#valor2")
let tamanhoSenha3 = document.querySelector("#valor3")
let tamanhoSenha4 = document.querySelector("#valor4")

let senha = document.querySelector("#senha")

let containerSenha = document.querySelector("#container-senha")

let novaSenha = ''

tamanhoSenha1.innerHTML = sliderElement1.value;
sliderElement1.oninput = function(){
    tamanhoSenha1.innerHTML = this.value
}

tamanhoSenha2.innerHTML = sliderElement2.value;
sliderElement2.oninput = function(){
    tamanhoSenha2.innerHTML = this.value
}

tamanhoSenha3.innerHTML = sliderElement3.value;
sliderElement3.oninput = function(){
    tamanhoSenha3.innerHTML = this.value
}

tamanhoSenha4.innerHTML = sliderElement4.value;
sliderElement4.oninput = function(){
    tamanhoSenha4.innerHTML = this.value
}

function gerarSenha(){
    containerSenha.classList.remove("hide")

    var senhaAleatoria = []
    var rec = ''

    let numerico = '0123456789'
    for(let i  = 0; i < sliderElement1.value; i++){
        senhaAleatoria.push(Math.floor(Math.random() * numerico.length))
        console.log('Atum' + senhaAleatoria[i])
    }

    let maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i = 0; i < sliderElement2.value; i++ ){
        senhaAleatoria.push(maiusculas.charAt((Math.floor(Math.random() * maiusculas.length))))
    }

    let minusculas = 'abcdefghijklmnopqrstuvwxyz'
    for(let i = 0; i < sliderElement3.value; i++ ){
        senhaAleatoria.push(minusculas.charAt((Math.floor(Math.random() * minusculas.length))))
    }
    let simbolos = '!@#$%?'
    for(let i = 0; i < sliderElement4.value; i++){
        senhaAleatoria.push(simbolos.charAt((Math.floor(Math.random() * simbolos.length))))
    }

    
    function embaralharSenha(){
        var p,n, tmp
        for(p = senhaAleatoria.length; p;){
            n = Math.random() * p-- | 0;
            tmp = senhaAleatoria[n]
            senhaAleatoria[n] = senhaAleatoria[p]
            senhaAleatoria[p] = tmp
        }
        for(let i = 0; i < senhaAleatoria.length; i ++){
            rec += senhaAleatoria[i]
            // console.log(senhaAleatoria[i])
        }   
    }
    // console.log("Rec: " + rec)
    embaralharSenha()
    senha.innerHTML = rec
    novaSenha = rec
    
}

function copySenha(){
    alert('Senha copiada: ' + novaSenha)
    navigator.clipboard.writeText(novaSenha)
}

