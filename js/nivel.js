// Controle de Níveis

var slcNivel = document.getElementById('slc-nivel');

function chkNivel() {

    switch(slcNivel.value) {

        case '1':
            if(slcClass.value == 'Bárbaro') {
                totalVida.value = Math.floor(Math.random() * 12) + 1;

                dadoVida.innerHTML = 'd12'; // Aplicar + modificador de Força
                 outrasHabilidades.innerHTML += arrBarbaro[0];
                //  '\n\n-- Habilidades de Bárbaro:'
                // +'\n\nFúria: Em batalha, você luta com uma ferocidade primitiva. No seu turno, você pode entrar em fúria com uma ação'
                // +' bônus. Enquanto estiver em fúria, você recebe os seguintes benefícios se você não estiver vestindo uma armadura pesada:'
                // +'\n\n-- Você tem vantagem em testes de Força e testes de resistência de Força.'
                // +'\n\nNúmero de Fúrias: 2 | DANO DE FÚRA +2'
                // +'\n\n-- Quando você desferir um ataque com arma corpo-acorpo usando Força, você recebe um bônus nas jogadas de dano que aumenta à medida que você adquire'
                // +' níveis de bárbaro, como mostrado na coluna Dano de Fúria na tabela O Bárbaro.'
                // +'\n\n-- Você possui resistência contra dano de concussão, cortante e perfurante.'
                // +'\n\nSe você for capaz de conjurar magias, você não poderá conjurá-las ou se concentrar nelas enquanto estiver em fúria.'
                // +' Sua fúria dura por 1 minuto. Ela termina prematuramente se você cair inconsciente ou se seu turno acabar e você não tiver atacado nenhuma criatura hostil'
                // +' desde seu último turno ou tiver sofrido dano nesse período. Você também pode terminar sua fúria no seu turno com uma ação bônus.'
                // +' Quando você tiver usado a quantidade de fúrias mostrada para o seu nível de bárbaro na coluna Fúrias da tabela O Bárbaro, você precisará terminar um descanso'
                // +' longo antes de poder entrar em fúria novamente.'
                // +'\n\nDefesa sem Armadura: Quando você não estiver vestindo qualquer armadura, sua Classe de Armadura será 10 + seu modificador de Destreza + seu modificador de Constituição. Você pode'
                // +' usar um escudo e continuar a receber esse benefício.';
            }
        break;
        case '2':
            if(slcClass.value == 'Bárbaro') {
                totalVida.value = '';
                outrasHabilidades.innerHTML += '';
                for(i=0;i<=1;i++) {
                    totalVida.value += Math.floor(Math.random() * 12) + 1; 
                    outrasHabilidades.innerHTML += arrBarbaro[i];
                }
                outrasHabilidades.innerHTML = arrBarbaro[0] + arrBarbaro[1];
                // '\n\nAtaque Descuidado: Você pode desistir de toda preocupação com sua defesa para atacar com um'
                // +' desespero feroz. Quando você fizer o seu primeiro ataque no turno, você pode decidir atacar descuidadamente. Fazer isso lhe concede vantagem nas jogadas de ataque'
                // +' com armas corpo-a-corpo usando Força durante seu turno, porém, as jogadas de ataques feitas contra você possuem vantagem até o início do seu próximo turno.'
                // +'\n\nSentido de Perigo: Você adquire um sentido sobrenatural de quando as coisas próximas não estão como deveriam, concedendo a você uma chance maior quando estiver'
                // +' evitando perigos. Você possui vantagem em testes de resistência de Destreza contra efeitos que você possa ver, como armadilhas e magias. Para receber esse benefício você não'
                // +' pode estar cego, surdo ou incapacitado.';
            }

            if(slcClass.value == 'Bardo') {
                outrasHabilidades.innerHTML = 'Bardo';
            }
            break;
        case '3':
            if(slcClass.value == 'Bárbaro') {
                totalVida.value = '';
                outrasHabilidades.innerHTML += '';
                for(i=0;i<=2;i++) {
                    totalVida.value += Math.floor(Math.random() * 12) + 1; 
                    outrasHabilidades.innerHTML += arrBarbaro[i];
                }
                outrasHabilidades.innerHTML += '\n\nCaminho Primitivo.';
            }
            break;
        case '4':
            if(slcClass.value == 'Bárbaro') {
                totalVida.value = '';
                outrasHabilidades.innerHTML += '';
                for(i=0;i<=3;i++) {
                    totalVida.value += Math.floor(Math.random() * 12) + 1; 
                }
                outrasHabilidades.innerHTML += arrBarbaro[3];
            }
            break;
        case '5':
            if(slcClass.value == 'Bárbaro') {
                totalVida.value = '';
                outrasHabilidades.innerHTML += '';
                for(i=1;i<=5;i++) {
                    totalVida.value += Math.floor(Math.random() * 12) + 1; 
                }
                outrasHabilidades.innerHTML += '\n\nAtaque Extra.'
                +'\n\nMovimento Rápido.';
            }

            alert('Incremento de Habilidade: \n\nVocê pode aumentar um valor de habilidade, à sua escolha, em 2 ou você pode aumentar dois valores de'
            +' habilidade, à sua escolha em 1. Como padrão, você não'
            +' pode elevar um valor de habilidade acima de 20 com essa'
            +' característica.');
            break;
        case '6':
            break;
        case '7':
            break;
        case '8':
            break;
        case '9':
            break;
        case '10':
            break;
        case '11':
            break;
        case '12':
            break;
        case '13':
            break;
        case '14':
            break;
        case '15':
            break;
        case '16':
            break;
        case '17':
            break;
        case '18':
            break;
        case '19':
            break;
        case '20':
            break;

    }
}