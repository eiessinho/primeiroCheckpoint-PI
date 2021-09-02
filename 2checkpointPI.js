
function menu(prato, tempoInserido){
    let tempoPadrao;

    switch(prato){

        case 'pipoca' :
            tempoPadrao = 10;
            resposta(tempoPadrao, tempoInserido);
        break;  //Callback
    
        case 'macarrao' :
            tempoPadrao = 8;
            resposta(tempoPadrao, tempoInserido);
        break;  //Callback
    
        case 'carne' :
            tempoPadrao = 15;
            resposta(tempoPadrao, tempoInserido);
        break;  //Callback

        case 'feijao' :
            tempoPadrao = 12;
            resposta(tempoPadrao, tempoInserido);
        break;  //Callback

        case 'brigadeiro' :
            tempoPadrao = 8;
            resposta(tempoPadrao, tempoInserido);
        break;  //Callback 

    default:
        console.log('Prato inexistente!');
    }

    function resposta(tempoPadrao, tempoInserido){
        if(tempoInserido < tempoPadrao){
            console.log('Tempo insuficiente! ⏰')
        } else if(tempoInserido >= tempoPadrao *2 && tempoInserido < tempoPadrao *3){
            console.log('A comida queimou! 🔥')
        } else if(tempoInserido >= tempoPadrao *3){
            console.log('Kabuumm!!! 💥')
        } else{
            console.log('Prato pronto, bom apetite! 😋');
        }
    }
}

// Insira o PRATO e o TEMPO desejado
menu('macarrao', 10)