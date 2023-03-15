let inputAdulto = document.querySelector('#adulto')
let inputCrianca = document.querySelector('#crianca')
let inputDuracao = document.querySelector('#duracao')
let resultado = document.querySelector('#res')




calcular = (event) =>{
    event.preventDefault()   
    let adultos = inputAdulto.value
    let criancas = inputCrianca.value
    let duracao = inputDuracao.value


    if(adultos < 0 || criancas < 0 || duracao < 0){
        return alert('Valor muito baixo.')
    }
    
    
    let qtdCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas) 
    function carnePP(duracao){
        if(duracao >= 6){
            return 900
        }else{
            return 700
        }
    }
    resultado.innerHTML = (`Sera: ${Math.round(qtdCarne/1000)}Kg de Carne`)


    let qtdCerveja = 1500 * adultos
    function cervejaPP(duracao){
        if(duracao >= 6){
            return 4000
        }else{
            return 1500
        }
    }
    resultado.innerHTML +=`<p>Sera: ${Math.round(qtdCerveja/355)} Latas de Cerveja</p>`


    let qtdRefrigerante = refriPP(duracao) * adultos + (refriPP(duracao)/2 * criancas)
    function refriPP(duracao){
        if(duracao >= 6){
            return 1500
        }else{
            return 1000
        }
    }
    resultado.innerHTML += `<p>Sera: ${Math.round(qtdRefrigerante/2000)} Pets de 2L</p>`
    console.log('ok...')
    }
    
    

    

