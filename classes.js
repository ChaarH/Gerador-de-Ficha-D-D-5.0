// Controle de Classes

var slcClass  = document.getElementById('slc-class');
var slcNivel  = document.getElementById('slc-nivel');
var dadoVida  = document.getElementById('dado-vida');
var totalVida = document.getElementById('vida-total');

function chkClass() {

    switch(slcClass.value) {

        case 'Bárbaro':
            // if(slcNivel.value = '1') {

                // totalVida.value = Math.floor(Math.random() * 12) + 1;

                dadoVida.innerHTML = 'd12'; // Aplicar + modificador de Força
                outrasHabilidades.innerHTML += arrBarbaro[0];
                //  outrasHabilidades.innerHTML += '\n\n-- Habilidades de Bárbaro:'
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
            // }

            // if(slcNivel.value = '2') {
                // alert('Teste');
                // dadoVida.value += Math.floor((Math.random() * 12));
            // }
                break;
        case 'Bardo':
            break;
        case 'Bruxo':
            break;
        case 'Clérigo':
            break;
        case 'Druida':
            break;
        case 'Feiticeiro':
            break;
        case 'Guerreiro':
            break;
        case 'Ladino':
            break;
        case 'Lutador':
            break;
        case 'Mago':
            break;
        case 'Monge':
            break;
        case 'Paladino':
            break;
        case 'Ranger':
            break;
    }










}