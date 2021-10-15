var senhaAleatoria = ''

function gerarAleatorio(qtd_num, qtd_mai, qtd_min, qtd_simb){

    let numerico = '0123456789'
    for(let i  = 0; i < qtd_num; i++){
        senhaAleatoria+= Math.floor(Math.random() * numerico.length)
    }

    let maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i = 0; i < qtd_mai; i++ ){
        senhaAleatoria+= maiusculas.charAt((Math.floor(Math.random() * maiusculas.length)))
    }

    let minusculas = 'abcdefghijklmnopqrstuvwxyz'
    for(let i = 0; i < qtd_min; i++ ){
        senhaAleatoria+= minusculas.charAt((Math.floor(Math.random() * minusculas.length)))
    }
    let simbolos = '!@#$%?'
    for(let i = 0; i < qtd_simb; i++){
        senhaAleatoria+= simbolos.charAt((Math.floor(Math.random() * simbolos.length)))
    }
    console.log(senhaAleatoria)
    
}

function embaralharSenha(){
    var novaSenha = ''
    for(let i = 0; i < 10; i++){
        novaSenha+= senhaAleatoria.charAt(Math.floor(Math.random() * senhaAleatoria.length))
    }
    console.log(novaSenha)
}

gerarAleatorio(2,3,4,2)
embaralharSenha()
