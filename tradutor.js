// Criar o map

let myMap = new Map(); 
palavrasIngles.set('Viajar', 'Travel');
palavrasIngles.set('Passeio', 'Tour');
palavrasIngles.set('Hospedar', 'Stay');
palavrasIngles.set('Taxa', 'Fee');
palavrasIngles.set('Recepção', 'Reception');
palavrasIngles.set('Voos de Chegada','Arrivals');
palavrasIngles.set('Companhia Aérea', 'Airline');
palavrasIngles.set('Portão', 'Gate');
palavrasIngles.set('Bagagem', 'Luggage');
palavrasIngles.set('Padaria','Bakery');
palavrasIngles.set('Museu', 'Museum');
palavrasIngles.set('Igreja', 'Church');
palavrasIngles.set('Restaurante', 'Restaurant');
palavrasIngles.set('Ponto de Onibus', 'Bus Stop');
palavrasIngles.set('Livraria', 'Bookstore');

// Palavras Espanhol 

let palavrasEspanhol = new Map(); 
palavrasEspanhol.set('Viajar', 'Viajar');
palavrasEspanhol.set('Passeio', 'Recorrido');
palavrasEspanhol.set('Hospedar', 'anfitrión');
palavrasEspanhol.set('Passaporte', 'Passaporte');
palavrasEspanhol.set('Taxa', 'tasa');
palavrasEspanhol.set('Companhia Aérea', 'Aerolínea');
palavrasEspanhol.set('Portão', 'puerta');
palavrasEspanhol.set('', '');
palavrasEspanhol.set('', '');





// funcao para traduzir o texto 
function traduzir() {
    let traduzirTexto = document.getElementById('texto').value;
    let opcao = document.getElementById('idioma').value; 

// procure no Map a palavra dsigitada pelo usuário e exibe a traducao de acordo com a chave digitada 
if(opcao === 'Ingles') { 
    
// se a chave for encontrada no Map (dicionário), mostra a traducao da palavra
    for (const [key, value] of palavrasIngles) { 

        if(traduzirTexto.toLowerCase() === key) { 
            document.getElementById('caixa').innerHTML = value;
        
        }


    }

    }

    else if(opcao === 'Espanhol') {
    
        for (const [key, value] of palavrasEspanhol) { 
    
            if(traduzirTexto.toLowerCase() === key) { 
                document.getElementById('caixa').innerHTML = value;
                break
                }
    
    
    
    
    } 
    

        
    } // fim do bloco if principal 

} // fim do bloco if da function 
