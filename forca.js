const letras = document.getElementsByClassName('letra')
let boneco = document.getElementById('boneco')
const msg = document.getElementById('msg')
const btn = document.getElementById('botao')
let biblioteca;
let palavra;
let paLetra;
let erros;
let acertos;
let pesq;
let botaoLetra;
const mostrarPalavra = () =>{
    for(let i =0; i<=19;i++){
        paLetra  = document.getElementById('l'+i).value = ''
        paLetra  = document.getElementById('l'+i).style.display='none'
    }
    for(let i =0; i<palavra.length;i++){
        paLetra  = document.getElementById('l'+i).style.display='inline-block'
    }
}
const ativarEvento = () =>{
    for(le of letras){
        le.addEventListener('click',jogar)
    }
}
const desativarEvento = () =>{
    for(le of letras){
        le.removeEventListener('click',jogar)
    }
}
const errou = (elemento)=>{
    elemento.style.backgroundColor ='red'
    elemento.style.color ='white'
    elemento.removeEventListener('click',jogar)
}
const acertou = (elemento)=>{
    elemento.style.backgroundColor='greenyellow'
    elemento.style.color ='white'
    elemento.removeEventListener('click',jogar)
}
const restaurarCoresBotoes = ()=>{
    const letra = document.getElementsByClassName('letra')
    for( le of letra){
        le.style.backgroundColor='aqua'
        le.style.color='black'
    }
}

const jogar = (event) =>{   
    let letra = event.target.textContent
    let index;
    botaoLetra = document.getElementById(event.target.id)
    pesq = palavra.match(letra)

    if( pesq == null){
        erros++
        montarBoneco()
        errou(botaoLetra)
        if(erros == 7){
            alert('Você Perdeu!')
            desativarEvento()
            msg.style.display='flex'
        }
    }else{
        while(pesq != null){
            index = palavra.search(letra)
            document.getElementById('l'+index).value = letra
            palavra = palavra.replace(letra,'0')
            acertos++
            acertou(botaoLetra)
            if(acertos == palavra.length){
                alert('Você Ganhou!')
                desativarEvento()
                msg.style.display='flex'
            }
        }
    }   
}

const montarBoneco = () =>{
    switch (erros){
        case 1: 
            boneco.src='./componentes/imgs/For1.png'
            break;
        case 2:
            boneco.src = './componentes/imgs/For2.png'
            break;
        case 3:
            boneco.src = './componentes/imgs/For3.png'
            break;
        case 4:
            boneco.src = './componentes/imgs/For4.png'
            break;
        case 5:
            boneco.src = './componentes/imgs/For5.png'
            break;
        case 6:
            boneco.src = './componentes/imgs/For6.png'
            break;
        case 7:
            boneco.src ='./componentes/imgs/forcaFinal.png'
            break;
    } 
}


const inicia = () =>{
    msg.style.display='none'
    biblioteca = ['yone','yasuo','draven','illaoi','anivia','camille','amumu','nasus','darius']
    palavra = biblioteca[Math.round(Math.random()*biblioteca.length)].toUpperCase()
    boneco.src = './componentes/imgs/EmptyFor.png'
    erros = 0
    acertos = 0
    restaurarCoresBotoes()
    mostrarPalavra()
    ativarEvento()
}
btn.addEventListener('click',inicia)
window.addEventListener('load',inicia)