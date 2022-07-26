let biblioteca = ['carro','brinquedo','arroz','academia','lutador','pescador','garimpeiro','macaco','azul']
const boneco = document.querySelector('.boneco')
let palavra = biblioteca[Math.round(Math.random()*biblioteca.length)]
let palavraTam = palavra.length
let letrasErradas;
let jogando;
let cxLetra;
let acertos;
let paLetra;

function defineLetras(){
    for(let i = 0; i <= 19; i ++){
        paLetra = document.getElementById("l"+i).innerHTML = '_'
        paLetra = document.getElementById("l"+i).style.display = 'none'
    }
    for(let i = 0; i < palavraTam; i++){
        paLetra = document.getElementById("l"+i).style.display='inline-block'
    }
}

function ativarEvento (){
    document.querySelector('.verificar').addEventListener('click',jogar)
}
function desativarEvento(){
    document.querySelector('.verificar').removeEventListener('click',jogar)
}
function inicia() {
    jogando = true
    acertos = 0
    letrasErradas = 0
    cxLetra = document.getElementById('letra-teste')
    cxLetra.value = ''
    cxLetra.focus()
    palavra = biblioteca[Math.round(Math.random()*biblioteca.length)]
    palavraTam = palavra.length
    boneco.src = './components/imgs/forcaVazia.png'
    defineLetras(palavraTam)
    ativarEvento()
}
window.addEventListener('load',inicia)
document.getElementById('nv-jogo').addEventListener('click',inicia)

const jogar = ()  => {
    if(cxLetra.value ==''){
        alert('Digite uma letra')
    }else{
        if(jogando){
            let letraTmp;
            let letra;
            let pesq;
            letra = cxLetra.value
            cxLetra.value = ''
            switch (letrasErradas){
                case 1: 
                    boneco.src ='./components/imgs/forca1.png'
                    break;
                case 2:
                    boneco.src = './components/imgs/forca2.png'
                    break;
                case 3:
                    boneco.src = './components/imgs/forca3.png'
                    break;
                case 4:
                    boneco.src = './components/imgs/forca4.png'
                    break;
                case 5:
                    boneco.src = './components/imgs/forca5.png'
                    break;
                case 6:
                    boneco.src = './components/imgs/forca6.png'
                    setTimeout(function endGame(){
                        boneco.src='./components/imgs/forcaFinal.png'
                    },3000)
                    break;
            }
            pesq = palavra.match(letra);
            if(pesq == null){
                letrasErradas++
            }else{
                while(pesq != ''){
                    letraTmp = palavra.search(letra)
                    paLetra = document.getElementById("l"+letraTmp).textContent = letra
                    palavra = palavra.replace(letra,'0')
                    acertos++
                    pesq =  palavra.match(letra)
                    if(acertos == palavraTam){
                        alert('Você ganhou!')
                        jogando = false
                        desativarEvento()
                    }
                }
            }
            if(letrasErradas == 7){
                alert('Você perdeu!')
                jogando = false
                desativarEvento()
            }
        }
    }
}

