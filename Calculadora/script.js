const resultado = document.getElementById('valor');

function calcular(tipo, valor){
    if(tipo === 'acao'){

        if(valor === 'AC'){
            resultado.value = '';
        }else if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' || valor === '%'){
            resultado.value += valor;
        }else if(valor === '='){
            result = eval(resultado.value);
            resultado.value = result;
        }
    }else if(tipo === 'valor'){
        resultado.value += parseFloat(valor);
    }
}