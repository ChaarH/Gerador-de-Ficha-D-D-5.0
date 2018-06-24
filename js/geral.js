var slcRace = document.getElementById('slc-race');

// Variáveis dos atributos
var atrFor = document.getElementById('for-atr');
var atrDes = document.getElementById('des-atr');
var atrCon = document.getElementById('con-atr');
var atrInt = document.getElementById('int-atr');
var atrSab = document.getElementById('sab-atr');
var atrCar = document.getElementById('car-atr');

// Variáveis dos modificadores de atributos
var modForca        = document.getElementById('for-mod');
var modDestreza     = document.getElementById('des-mod');
var modConstituicao = document.getElementById('con-mod');
var modInteligencia = document.getElementById('int-mod');
var modSabedoria    = document.getElementById('sab-mod');
var modCarisma      = document.getElementById('car-mod');

// Informações
var vidaTotal     = document.getElementById('vida-total');
var deslocamento  = document.getElementById('deslocamento');
var classArmadura = document.getElementById('vlr-shield');

// Descrições
var ligacoes = document.getElementById('ligacoes');

// Idiomas e Proficiencias
var idiomasProficiencias = document.getElementById('idiomas-proficiencias');

// Outras Habilidades
var outrasHabilidades = document.getElementById('outras-habilidades');


function chkMod(str) {

    // 1 - Força
    // 2 - Destreza
    // 3 - Constituição
    // 4 - Inteligência
    // 5 - Sabedoria
    // 6 - Carisma

    var atrValor = ''; 
    var modValor = '';

    switch(str) {
        case 1:
            atrValor = document.getElementById('for-atr');
            modValor = modForca;
            break;
        case 2:
            atrValor = document.getElementById('des-atr');
            modValor = modDestreza;

            

            break;
        case 3:
            atrValor = document.getElementById('con-atr');
            modValor = modConstituicao;
            break;
        case 4:
            atrValor = document.getElementById('int-atr');
            modValor = modInteligencia;
            break;
        case 5:
            atrValor = document.getElementById('sab-atr');
            modValor = modSabedoria;
            break;
        case 6:
            atrValor = document.getElementById('car-atr');
            modValor = modCarisma;
            break;    
    }

    if(atrValor.value == 1) {
        modValor.innerHTML = '-5';
        modValor.style.color = '#f70909';
    }

    if(atrValor.value > 1 && atrValor.value < 4) {
        modValor.innerHTML = '-4';
        modValor.style.color = '#f70909';
    }

    if(atrValor.value > 3 && atrValor.value < 6) {
        modValor.innerHTML = '-3';
        modValor.style.color = '#f70909';
    }

    if(atrValor.value > 5 && atrValor.value < 8) {
        modValor.innerHTML = '-2';
        modValor.style.color = '#f70909';
    }

    if(atrValor.value > 7 && atrValor.value < 10) {
        modValor.innerHTML = '-1';
        modValor.style.color = '#f70909';
    }

    if(atrValor.value > 9 && atrValor.value < 12) {
        modValor.innerHTML = '0';
        modValor.style.color = '#FFF';
    }

    if(atrValor.value > 11 && atrValor.value < 14) {
        modValor.innerHTML = '+1';
        modValor.style.color = '#22c109';
    }

    if(atrValor.value > 13 && atrValor.value < 16) {
        modValor.innerHTML = '+2';
        modValor.style.color = '#22c109';
    }

    if(atrValor.value > 15 && atrValor.value < 18) {
        modValor.innerHTML = '+3';
        modValor.style.color = '#22c109';
    }

    if(atrValor.value > 17 && atrValor.value < 20) {
        modValor.innerHTML = '+4';
        modValor.style.color = '#22c109';
    }

    if(atrValor.value > 19 && atrValor.value < 22) {
        modValor.innerHTML = '+5';
        modValor.style.color = '#22c109';
    }

    if(atrValor.value > 21 && atrValor.value < 24) {
        modValor.innerHTML = '+6';
        modValor.style.color = '#22c109';
    }

    if(atrValor.value > 23 && atrValor.value < 26) {
        modValor.innerHTML = '+7';
        modValor.style.color = '#22c109';
    }

    if(atrValor.value > 25 && atrValor.value < 28) {
        modValor.innerHTML = '+8';
        modValor.style.color = '#22c109';
    }

    if(atrValor.value > 27 && atrValor.value < 30) {
        modValor.innerHTML = '+9';
        modValor.style.color = '#22c109';
    }

    if(atrValor.value == 30) {
        modValor.innerHTML = '+10';
        modValor.style.color = '#22c109';
    }

    var attValor     = modValor.innerHTML;

    // Trata se o valor do modificador é "-" ou "+"
    var trataMod     = attValor.split();
    alert('Res: '+trataMod);
    var vlrShield    = document.getElementById('vlr-shield');

    if(trataMod == '-5' || '-4' || '-3' || '-2' || '-1') {
        var trataMod     = attValor.split('-');
        alert('Menos: '+trataMod);
        var resultadoMod = parseInt(trataMod[1]);
        vlrShield.value  = 10 - resultadoMod;    
    } 
    
    else if(trataMod == '+1' || '+2' || '+3' || '+4' || '+5' || '+6' || '+7' || '+8' || '+9' || '+10') {
        var trataMod     = attValor.split('+');
        alert('Mais');
        var resultadoMod = parseInt(trataMod[1]);
        vlrShield.value  = 10 + resultadoMod;
    } else {
        alert('Zero');
        var resultadoMod = parseInt(trataMod[0]);
        vlrShield.value  = 10;   
    }
};



function chkRace() {

    switch(slcRace.value) {
        case '':
            // Zera todos os valores

            alert('Classe não atribuída');
            atrFor.value = '';
            atrDes.value = '';
            atrCon.value = '';
            atrInt.value = '';
            atrSab.value = '';
            atrCar.value = '';
            vidaTotal.value = '';
            deslocamento.value = '';
            vlrShield.value = '';

            // Modificadores
            modForca.innerHTML          = '0';
            modForca.style.color        = '';

            modDestreza.innerHTML       = '0';
            modDestreza.style.color     = '';

            modConstituicao.innerHTML   = '0';
            modConstituicao.style.color = '';

            modInteligencia.innerHTML   = '0';
            modInteligencia.style.color = '';

            modSabedoria.innerHTML      = '0';
            modSabedoria.style.color    = '';

            modCarisma.innerHTML        = '0';
            modCarisma.style.color      = '';

            outrasHabilidades.innerHTML = '';
            idiomasProficiencias.innerHTML = '';

            ligacoes.innerHTML = '';
            break;
        case 'Anão das Colinas':
            atrFor.value = '';
            atrDes.value = '';
            atrCon.value = '2';
            atrInt.value = '';
            atrSab.value = '1';
            atrCar.value = '';
            vidaTotal.value = '1';
            deslocamento.value = '7,5m';

            // Modificadores
            modForca.innerHTML          = '0';
            modForca.style.color        = '';

            modDestreza.innerHTML       = '0';
            modDestreza.style.color     = '';

            modConstituicao.innerHTML   = '-4';
            modConstituicao.style.color = '#f70909';

            modInteligencia.innerHTML   = '0';
            modInteligencia.style.color = '';

            modSabedoria.innerHTML      = '-5';
            modSabedoria.style.color    = '#f70909';

            modCarisma.innerHTML        = '0';
            modCarisma.style.color      = '';

            idiomasProficiencias.innerHTML = 'Idiomas: Anão e Comum. \n\nProficiência em Ferramentas: Um anão adquire proficiência em'
            +' uma ferramenta de artesão de sua escolha entre: ferramentas de '
            +'Ferreiro, Suprimentos de Cervejeiro ou ferramentas de Pedreiro.';

            outrasHabilidades.innerHTML = 'Vantagem em testes de resistência contra venenos, e resistência contra dano de veneno.'
            +'\n\nTreinamento de Combate dos Anões: O anão tem proficiência com o machado de guerra, machadinha, martelo de arremesso e martelo de guerra.'
            +'\n\n\Tenacidade Anã: Seu máximo de pontos de vida aumentam em 1, e cada vez que o anão da colina sobe um nível, ele recebe 1 ponto de vida adicional.';

            ligacoes.innerHTML = 'Ligação com Rochas: Sempre que um anão realizar um teste de Inteligência (História) relacionado com a origem de um trabalho em pedra,'
            +' ele é considerado Proficiente na Perícia História e adiciona o dobro do seu Bônus de Proficiência no teste, ao invés do seu bônus de proficiência normal.';
            break;

        case 'Anão das Montanhas':
            atrFor.value = '2';
            atrDes.value = '';
            atrCon.value = '2';
            atrInt.value = '';
            atrSab.value = '';
            atrCar.value = '';
            vidaTotal.value = '';
            deslocamento.value = '7,5m';

            // Modificadores
            modForca.innerHTML          = '-4';
            modForca.style.color        = '#f70909';

            modDestreza.innerHTML       = '0';
            modDestreza.style.color     = '';

            modConstituicao.innerHTML   = '-4';
            modConstituicao.style.color = '#f70909';

            modInteligencia.innerHTML   = '0';
            modInteligencia.style.color = '';

            modSabedoria.innerHTML      = '0';
            modSabedoria.style.color    = '';

            modCarisma.innerHTML        = '0';
            modCarisma.style.color      = '';

            idiomasProficiencias.innerHTML = 'Idioma: Anão e Comum. \n\nProficiência em Ferramentas: Um anão adquire proficiência em'
            +' uma ferramenta de artesão de sua escolha entre: ferramentas de '
            +'Ferreiro, Suprimentos de Cervejeiro ou ferramentas de Pedreiro.';

            outrasHabilidades.innerHTML = 'Vantagem em testes de resistência contra venenos, e resistência contra dano de veneno.'
            +'\n\nTreinamento de Combate dos Anões: O anão tem proficiência com o machado de guerra, machadinha, martelo de arremesso e martelo de guerra.'
            +'\n\nTreinamento Anão com Armaduras. Você adquire proficiência em armaduras leves e médias.';

            ligacoes.innerHTML = 'Ligação com Rochas: Sempre que um anão realizar um teste de Inteligência (História) relacionado com a origem de um trabalho em pedra,'
            +' ele é considerado Proficiente na Perícia História e adiciona o dobro do seu Bônus de Proficiência no teste, ao invés do seu bônus de proficiência normal.';
            break;
        case 'Alto Elfo':
            atrFor.value = '';
            atrDes.value = '2';
            atrCon.value = '';
            atrInt.value = '1';
            atrSab.value = '';
            atrCar.value = '';
            vidaTotal.value = '';
            deslocamento.value = '9m';

            // Modificadores
            modForca.innerHTML          = '0';
            modForca.style.color        = '';

            modDestreza.innerHTML       = '-4';
            modDestreza.style.color     = '#f70909';

            modConstituicao.innerHTML   = '0';
            modConstituicao.style.color = '';

            modInteligencia.innerHTML   = '-5';
            modInteligencia.style.color = '#f70909';

            modSabedoria.innerHTML      = '0';
            modSabedoria.style.color    = '';

            modCarisma.innerHTML        = '0';
            modCarisma.style.color      = '';

            idiomasProficiencias.innerHTML = 'Idiomas: Élfico e Comum.'
            +'\n\nTreinamento Élfico com Armas. Você possui proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.';

            outrasHabilidades.innerHTML = 'Sentidos Aguçados: O elfo tem proficiência na perícia Percepção.'
            +'\n\nAncestral Feérico: O elfo tem vantagem nos testes de resistência contra ser enfeitiçado e é imune a magias de sono.'
            +'\n\nTranse: Elfos não precisam dormir. Em vez disso eles meditam profundamente, permanecendo semi-consciente, durante 4 horas por dia.'
            +'\n\nTruque. Você conhece um truque, à sua escolha, da lista de truques do mago. Inteligência é a habilidade usado para conjurar este truque.'
            +'\n\nIdioma Adicional. Você pode falar, ler e escrever um idioma adicional à sua escolha.';

            ligacoes.innerHTML = '';
            break;

        case 'Elfo da Floresta':
            atrFor.value = '';
            atrDes.value = '2';
            atrCon.value = '';
            atrInt.value = '';
            atrSab.value = '1';
            atrCar.value = '';
            vidaTotal.value = '';

            deslocamento.value = '10,5m';

            // Modificadores
            modForca.innerHTML          = '0';
            modForca.style.color        = '';

            modDestreza.innerHTML       = '-4';
            modDestreza.style.color     = '#f70909';

            modConstituicao.innerHTML   = '0';
            modConstituicao.style.color = '';

            modInteligencia.innerHTML   = '0';
            modInteligencia.style.color = '';

            modSabedoria.innerHTML      = '-5';
            modSabedoria.style.color    = '#f70909';

            modCarisma.innerHTML        = '0';
            modCarisma.style.color      = '';

            idiomasProficiencias.innerHTML = 'Idiomas: Élfico e Comum.'
            +'\n\nTreinamento Élfico com Armas. Você possui proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.';

            outrasHabilidades.innerHTML = 'Sentidos Aguçados: O elfo tem proficiência na perícia Percepção.'
            +'\n\nAncestral Feérico: O elfo tem vantagem nos testes de resistência contra ser enfeitiçado e é imune a magias de sono.'
            +'\n\nTranse: Elfos não precisam dormir. Em vez disso eles meditam profundamente, permanecendo semi-consciente, durante 4 horas por dia.'
            +'\n\nPés Ligeiros. Seu deslocamento base de caminhada aumenta para 10,5 metros.'            
            +'\n\nMáscara da Natureza. Você pode tentar se esconder mesmo quando você está apenas levemente obscurecido por folhagem, chuva forte,'
            +'neve caindo, névoa ou outro fenômeno natural.';

            ligacoes.innerHTML = '';
            break;

        case 'Elfo Negro(Drow)':
            atrFor.value = '';
            atrDes.value = '2';
            atrCon.value = '';
            atrInt.value = '';
            atrSab.value = '';
            atrCar.value = '1';
            vidaTotal.value = '';

            deslocamento.value = '9m';

            // Modificadores
            modForca.innerHTML          = '0';
            modForca.style.color        = '';

            modDestreza.innerHTML       = '-4';
            modDestreza.style.color     = '#f70909';

            modConstituicao.innerHTML   = '0';
            modConstituicao.style.color = '';

            modInteligencia.innerHTML   = '0';
            modInteligencia.style.color = '';

            modSabedoria.innerHTML      = '';
            modSabedoria.style.color    = '';

            modCarisma.innerHTML        = '-5';
            modCarisma.style.color      = '#f70909';

            idiomasProficiencias.innerHTML = 'Idiomas: Élfico e Comum.'
            +'\n\nTreinamento Drow com Armas. Você possui proficiência com rapieiras, espadas curtas e bestas de mão.';

            outrasHabilidades.innerHTML = 'Visão no Escuro Superior: Sua visão no escuro tem alcance de 36 metros de raio.'
            +'\n\nSensibilidade à Luz Solar: Você possui desvantagem nas jogadas de ataque e testes de Sabedoria(Percepção)'
            +'\n\n relacionados a visão quando você, o alvo do seu ataque, ou qualquer coisa que você está tentando perceber, esteja sob luz solar direta.';

            ligacoes.innerHTML = '';

            // Verificar habilidades de nível
            break;

        case 'Pés Leves':
            atrFor.value = '';
            atrDes.value = '2';
            atrCon.value = '';
            atrInt.value = '';
            atrSab.value = '';
            atrCar.value = '1';
            vidaTotal.value = '';

            deslocamento.value = '7,5m';

            // Modificadores
            modForca.innerHTML          = '0';
            modForca.style.color        = '';

            modDestreza.innerHTML       = '-4';
            modDestreza.style.color     = '#f70909';

            modConstituicao.innerHTML   = '0';
            modConstituicao.style.color = '';

            modInteligencia.innerHTML   = '0';
            modInteligencia.style.color = '';

            modSabedoria.innerHTML      = '0';
            modSabedoria.style.color    = '';

            modCarisma.innerHTML        = '-5';
            modCarisma.style.color      = '#f70909';

            idiomasProficiencias.innerHTML = 'Idiomas: Halfing e Comum.';

            outrasHabilidades.innerHTML = 'Sorte: Quando o halfling rolar um 1 natural em uma jogada de ataque, a teste de atributo ou teste de resistência, ele pode jogar'
            +'novamente o dado mas deve utilizar a nova rolagem.'
            +'\n\nBravura: O Halfling têm vantagem em testes de resistência contra ficar amedrontado.'
            +'\n\nAgilidade Halfling: O Halfling pode mover-se através do espaço de qualquer criatura que for de um tamanho maior que o seu.'
            +'\n\nFurtividade Natural: Você pode tentar se esconder mesmo quando possuir apenas a cobertura de uma criatura que for no mínimo um tamanho maior que o seu';

            ligacoes.innerHTML = '';
            break;
        case 'Robusto':
            atrFor.value = '';
            atrDes.value = '2';
            atrCon.value = '1';
            atrInt.value = '';
            atrSab.value = '';
            atrCar.value = '';
            vidaTotal.value = '';
            deslocamento.value = '7,5m';

            // Modificadores
            modForca.innerHTML          = '0';
            modForca.style.color        = '';

            modDestreza.innerHTML       = '-4';
            modDestreza.style.color     = '#f70909';

            modConstituicao.innerHTML   = '-5';
            modConstituicao.style.color = '#f70909';

            modInteligencia.innerHTML   = '0';
            modInteligencia.style.color = '';

            modSabedoria.innerHTML      = '0';
            modSabedoria.style.color    = '';

            modCarisma.innerHTML        = '0';
            modCarisma.style.color      = '';

            idiomasProficiencias.innerHTML = 'Idiomas: Halfing e Comum.';

            outrasHabilidades.innerHTML = 'Sorte: Quando o halfling rolar um 1 natural em uma jogada de ataque, a teste de atributo ou teste de resistência, ele pode jogar'
            +'novamente o dado mas deve utilizar a nova rolagem.'
            +'\n\nBravura: O Halfling têm vantagem em testes de resistência contra ficar amedrontado.'
            +'\n\nAgilidade Halfling: O Halfling pode mover-se através do espaço de qualquer criatura que for de um tamanho maior que o seu.'
            +'\n\nResiliência dos Robustos. Você tem vantagem em testes de resistência contra veneno e tem resistência contra dano de veneno.';

            ligacoes.innerHTML = '';
            break;
        case 'Humano':
            atrFor.value = '1';
            atrDes.value = '1';
            atrCon.value = '1';
            atrInt.value = '1';
            atrSab.value = '1';
            atrCar.value = '1';
            vidaTotal.value = '';

            deslocamento.value = '9m';

            // Modificadores
            modForca.innerHTML          = '-5';
            modForca.style.color        = '#f70909';

            modDestreza.innerHTML       = '-5';
            modDestreza.style.color     = '#f70909';

            modConstituicao.innerHTML   = '-5';
            modConstituicao.style.color = '#f70909';

            modInteligencia.innerHTML   = '-5';
            modInteligencia.style.color = '#f70909';

            modSabedoria.innerHTML      = '-5';
            modSabedoria.style.color    = '#f70909';

            modCarisma.innerHTML        = '-5';
            modCarisma.style.color      = '#f70909';

            idiomasProficiencias.innerHTML = 'Idiomas: Comum e outro da escolha do jogador.';

            outrasHabilidades.innerHTML = '';
            ligacoes.innerHTML = '';
            break;
        case 'Draconato':
            atrFor.value = '2';
            atrDes.value = '0';
            atrCon.value = '0';
            atrInt.value = '0';
            atrSab.value = '0';
            atrCar.value = '1';
            vidaTotal.value = '';

            deslocamento.value = '9m';

            // Modificadores
            modForca.innerHTML          = '-4';
            modForca.style.color        = '#f70909';

            modDestreza.innerHTML       = '0';
            modDestreza.style.color     = '';

            modConstituicao.innerHTML   = '0';
            modConstituicao.style.color = '';

            modInteligencia.innerHTML   = '0';
            modInteligencia.style.color = '';

            modSabedoria.innerHTML      = '0';
            modSabedoria.style.color    = '';

            modCarisma.innerHTML        = '-5';
            modCarisma.style.color      = '#f70909';

            idiomasProficiencias.innerHTML = 'Idiomas: Dracônico e Comum.';

            outrasHabilidades.innerHTML = 'Ancestral Dracônico: Você possui um ancestral dracônico. Escolha um tipo de dragão da tabela Ancestral'
            +'Dracônico. Sua arma de sopro e resistência a dano são determinadas pelo tipo de dragão, como mostrado na'
            +'tabela.'
            +'\n\nArma de Sopro: Você pode usar uma ação para exalar energia destrutiva. Seu ancestral dracônico determina o tamanho, formado e tipo de dano que você expele.'
            +'Quando você usa sua arma de sopro, cada criatura na área exalada deve realizar um teste de resistência, o tipo'
            +'do teste é determinado pelo seu ancestral dracônico. A CD do teste de resistência é 8 + seu modificador de Constituição + seu bônus de proficiência. Uma criatura'
            +'sofre 2d6 de dano num fracasso e metade desse dano num sucesso. O dano aumenta para 3d6 no 6° nível, 4d6 no 11° nível e 5d6 no 16° nível.'
            +'Depois de usar sua arma de sopro, você não poderá utilizá-la novamente até completar um descanso curto ou longo.'
            +'\n\nResistência a Dano: Você possui resistência ao tipo de dano associado ao seu ancestral dracônico.';

            ligacoes.innerHTML = '';
            break;

        case 'Gnomo da Floresta':
            atrFor.value = '0';
            atrDes.value = '1';
            atrCon.value = '0';
            atrInt.value = '2';
            atrSab.value = '0';
            atrCar.value = '0';
            vidaTotal.value = '';

            deslocamento.value = '7,5m';

            // Modificadores
            modForca.innerHTML          = '0';
            modForca.style.color        = '';

            modDestreza.innerHTML       = '-5';
            modDestreza.style.color     = '#f70909';

            modConstituicao.innerHTML   = '0';
            modConstituicao.style.color = '';

            modInteligencia.innerHTML   = '-4';
            modInteligencia.style.color = '#f70909';

            modSabedoria.innerHTML      = '0';
            modSabedoria.style.color    = '';

            modCarisma.innerHTML        = '0';
            modCarisma.style.color      = '';

            idiomasProficiencias.innerHTML = 'Idiomas: Gnômico e Comum.';

            outrasHabilidades.innerHTML = 'Visão no Escuro: Acostumado à vida subterrânea, você tem uma visão superior no escuro e na penumbra.'
            +'Você enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você'
            +'não pode discernir cores no escuro, apenas tons de cinza.'
            +'\n\nEsperteza Gnômica: Você possui vantagem em todos os testes de resistência de Inteligência, Sabedoria e Carisma contra magia.'
            +'\n\nIlusionista Nato: Você conhece o truque ilusão menor. Inteligência é a sua habilidade usada para conjurá-la.'
            +'\n\nFalar com Bestas Pequenas: Através de sons e gestos, você pode comunicar ideias simples para Bestas pequenas ou menores. Gnomos da floresta amam os'
            +'animais e normalmente possuem esquilos, doninhas, coelhos, toupeiras, pica-paus e outras criaturas como amados animais de estimação.';

            ligacoes.innerHTML = '';
            break;

        case 'Gnomo das Rochas':
            atrFor.value = '0';
            atrDes.value = '0';
            atrCon.value = '1';
            atrInt.value = '2';
            atrSab.value = '0';
            atrCar.value = '0';
            vidaTotal.value = '';

            deslocamento.value = '7,5m';

            // Modificadores
            modForca.innerHTML          = '0';
            modForca.style.color        = '';

            modDestreza.innerHTML       = '-5';
            modDestreza.style.color     = '#f70909';

            modConstituicao.innerHTML   = '0';
            modConstituicao.style.color = '';

            modInteligencia.innerHTML   = '-4';
            modInteligencia.style.color = '#f70909';

            modSabedoria.innerHTML      = '0';
            modSabedoria.style.color    = '';

            modCarisma.innerHTML        = '0';
            modCarisma.style.color      = '';

            idiomasProficiencias.innerHTML = 'Idiomas: Gnômico e Comum.';

            var arrayMecanismo = new Array(
                'Brinquedo Mecânico: Esse brinquedo é um animal, monstro ou pessoa mecânica, como um sapo, rato, pássaro, dragão ou soldado. Quando colocado no chão,'
                +'o brinquedo se move 1,5 metro pelo chão em cada um dos seus turnos em uma direção aleatória. Ele faz barulhos apropriados a criatura que ele representa.',

                'Isqueiro Mecânico: O mecanismo produz uma miniatura de chama, que você pode usar para acender uma vela, tocha ou fogueira. Usar o mecanismo requer sua ação.',

                'Caixa de Música: Quando aberta, essa caixa de música toca uma canção a um volume moderado. A caixa para de tocar quando alcança o fim da música ou quando é fechada.'
            );

            var contArray = arrayMecanismo.length;
            var rand = Math.floor((Math.random() * contArray));
            var tipoMecanismo = arrayMecanismo[rand];

            outrasHabilidades.innerHTML = 'Visão no Escuro: Acostumado à vida subterrânea, você tem uma visão superior no escuro e na penumbra.'
            +'Você enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você'
            +'não pode discernir cores no escuro, apenas tons de cinza.'
            +'\n\nConhecimento de Artífice: Toda vez que você fizer um teste de Inteligência (História) relacionado a itens mágicos, objetos alquímicos ou mecanismos tecnológicos,'
            +'você pode adicionar o dobro do seu bônus de proficiência, ao invés de qualquer bônus de proficiência que você normalmente use.'
            +'\n\nEngenhoqueiro: Você possui proficiência com ferramentas de artesão (ferramentas de engenhoqueiro). Usando essas ferramentas, você pode gastar 1 hora e 10'
            +'PO em materiais para construir um mecanismo Miúdo (CA 5, 1 pv). O mecanismo para de funcionar após 24 horas (a não ser que você gaste 1 hora reparando-o para manter o mecanismo funcionando), ou quando você usa sua ação'
            +' para desmantelá-lo; nesse momento, você pode recuperar o material usado para criá-lo. Você pode ter até três desses mecanismos ativos ao mesmo tempo.'

            +'\n\nO mecanismo abaixo foi escolhido aleatoriamente:'
            // Exibe(abaixo) o Mecanismo que veio do Arrray
            +'\n\n'+tipoMecanismo + '\n\n';

            ligacoes.innerHTML = '';
            break;

        case 'Meio-Elfo':
        // alert('Exceto o Carisma, os demais atributos da raça Meio-Efo foram atribuídas aleatoriamente!');
            atrFor.value = '0';
            atrDes.value = '0';
            atrCon.value = '0';
            atrInt.value = '0';
            atrSab.value = '0';
            atrCar.value = '0';
            vidaTotal.value = '';

            var arrayAtributos = new Array (
                document.getElementById('for-atr'),
                document.getElementById('des-atr'),
                document.getElementById('con-atr'),
                document.getElementById('int-atr'),
                document.getElementById('sab-atr')
            );
            
            // var array = new Array('Forca', 'Constituicao', 'Inteligencia', 'Carisma');
            var conta = arrayAtributos.length;
            var rand = Math.floor((Math.random() * conta));
            
            for(i=0;i<2;i++) {
                var res = arrayAtributos[rand];
                res.value = 1;
                arrayAtributos.splice(res,1);
            }

            atrCar.value = '2';

            // Implementar seleção de 1 ponto para dois atributos distintos sem se repetir

            var contaArrayAtributos = arrayAtributos.length;
            var randArrayAtributos = Math.floor((Math.random() * contaArrayAtributos));
            
            deslocamento.value = '9m';

            // Modificadores

            if(atrFor.value == '1') {
                modForca.innerHTML   = '-5';
                modForca.style.color = '#f70909';   
            } else {
                modForca.innerHTML          = '0';
                modForca.style.color        = '';
            }

            if(atrDes.value == '1') {
                modDestreza.innerHTML   = '-5';
                modDestreza.style.color = '#f70909';   
            } else {
                modDestreza.innerHTML       = '0';
                modDestreza.style.color     = '';
            }

            if(atrCon.value == '1') {
                modConstituicao.innerHTML   = '-5';
                modConstituicao.style.color = '#f70909';   
            } else {
                modConstituicao.innerHTML   = '0';
                modConstituicao.style.color = '';
            }

            if(atrInt.value == '1') {
                modInteligencia.innerHTML   = '-5';
                modInteligencia.style.color = '#f70909';   
            } else {
                modInteligencia.innerHTML   = '0';
                modInteligencia.style.color = '';
            }

            if(atrSab.value == '1') {
                modSabedoria.innerHTML   = '-5';
                modSabedoria.style.color = '#f70909';   
            } else {
                modSabedoria.innerHTML      = '0';
                modSabedoria.style.color    = '';
            }

            modCarisma.innerHTML        = '-4';
            modCarisma.style.color      = '#f70909';

            idiomasProficiencias.innerHTML = 'Idiomas: Élfico, Comum e outro adicional à escolha do jogador.'
            +'\n\nVersatilidade em Perícia. Você ganha proficiência em duas perícias, à sua escolha.';

            outrasHabilidades.innerHTML = 'Visão no Escuro: Graças ao seu sangue élfico, você tem uma visão superior no escuro e na penumbra. Você'
            +' enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.'
            +'\n\nAncestral Feérico: Você possui vantagem em testes de resistência contra encantamento e magia não pode colocar você pra dormir.';

            ligacoes.innerHTML = '';
            break;
        case 'Meio-Orc':
            atrFor.value = '2';
            atrDes.value = '0';
            atrCon.value = '1';
            atrInt.value = '0';
            atrSab.value = '0';
            atrCar.value = '0';
            vidaTotal.value = '';

            deslocamento.value = '9m';

            // Modificadores
            modForca.innerHTML          = '-4';
            modForca.style.color        = '#f70909';

            modDestreza.innerHTML       = '0';
            modDestreza.style.color     = '';

            modConstituicao.innerHTML   = '-5';
            modConstituicao.style.color = '#f70909';

            modInteligencia.innerHTML   = '0';
            modInteligencia.style.color = '';

            modSabedoria.innerHTML      = '0';
            modSabedoria.style.color    = '';

            modCarisma.innerHTML        = '0';
            modCarisma.style.color      = '';

            idiomasProficiencias.innerHTML = 'Idiomas: Orc e Comum.';

            outrasHabilidades.innerHTML = 'Visão no Escuro: Graças ao seu sangue orc, você uma visão superior no escuro e na penumbra. Você'
            +' enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.'
            +'\n\nAmeaçador: Você adquire proficiência na perícia Intimidação.'
            +'\n\nResistência Implacável: Quando você é reduzido a 0 pontos de vida mas não é completamente morto, você pode voltar para 1 ponto de vida. Você não pode usar essa'
            +' característica novamente até completar um descanso longo.'
            +'\n\nAtaques Selvagens: Quando você atinge um ataque crítico com uma arma corpo-a-corpo, você pode rolar um dos dados de dano da arma mais uma vez e adicioná-lo ao'
            +' dano extra causado pelo acerto crítico.';

            ligacoes.innerHTML = '';
            break;

        case 'Tiefling':
            atrFor.value = '0';
            atrDes.value = '0';
            atrCon.value = '0';
            atrInt.value = '1';
            atrSab.value = '0';
            atrCar.value = '2';
            vidaTotal.value = '';

            deslocamento.value = '9m';

            // Modificadores
            modForca.innerHTML          = '0';
            modForca.style.color        = '';

            modDestreza.innerHTML       = '0';
            modDestreza.style.color     = '';

            modConstituicao.innerHTML   = '0';
            modConstituicao.style.color = '';

            modInteligencia.innerHTML   = '-5';
            modInteligencia.style.color = '#f70909';

            modSabedoria.innerHTML      = '0';
            modSabedoria.style.color    = '';

            modCarisma.innerHTML        = '-4';
            modCarisma.style.color      = '#f70909';

            idiomasProficiencias.innerHTML = 'Idiomas: Infernal e Comum.';

            outrasHabilidades.innerHTML = 'Visão no Escuro: Graças a sua herança infernal, você tem uma visão superior no escuro e na penumbra. Você'
            +' enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.'
            +'\n\nResistência Infernal: Você possui resistência a dano de fogo.'
            +'\n\nLegado Infernal: Você conhece o truque taumaturgia. Quando você atingir o 3° nível, você poderá conjurar a magia repreensão infernal uma vez por dia'
            +' como uma magia de 2° nível. Quando você atingir o 5° nível, você também poderá conjurar a magia escuridão. Você precisa terminar um descanso longo para poder usar'
            +' as magias desse traço novamente. Sua habilidade de conjuração para essas magias é Carisma.';
            
            ligacoes.innerHTML = '';
            break;
    }

    var caValor      = document.getElementById('des-mod');
    var attValor     = caValor.innerHTML;

    // Trata se o valor do modificador é "-" ou "+"
    var trataMod     = attValor.split();
    
    var vlrShield    = document.getElementById('vlr-shield');

    
    if(trataMod == '-5' || '-4' || '-3' || '-2' || '-1') {
        var trataMod = attValor.split('-');
        var resultadoMod = parseInt(trataMod[1]);
        vlrShield.value  = 10 - resultadoMod;    
        
    } else {
        var trataMod = attValor.split('+');
        var resultadoMod = parseInt(trataMod[1]);
        vlrShield.value  = 10 + resultadoMod;
    }
    
    if(trataMod == '0') {
        var resultadoMod = parseInt(trataMod[0]);
        vlrShield.value = 10;   
    }
};





// Checar script que limpa todo os valores quando n for selecionado nenhuma classe