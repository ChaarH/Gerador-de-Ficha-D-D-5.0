<html>

<head>
    <link rel="stylesheet" href="css/style.css">
    <link href='img/favicon.ico' rel='icon' type='image/x-icon'/>
    <link rel="stylesheet" type="text/css" href="/print.css" media="print" />
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    <title>Gerador de Ficha  D&D 5.0</title>
</head>

<body>

    <img src="img/dnd.png" title="Breath of Fire Baby!">

    <h1 title="Feito por Carlos Aires">Gerador de Ficha D&D 5.0</h1>
    <p>Versão 1.0.0</p>

    <form action="" method="POST"></form>
        <fieldset>
            <legend>Dados Principais</legend>
            Nome
            <input id="nomePersonagem" name="nomePersonagem" type="text" autofocus>

            Jogador
            <input id="nomeJogador" type="text">

            Raça
            <select name="" id="slc-race" onchange="chkRace()">
                <option value="" default>-- Selecione --</option>
                <option value="">----- Anão -----</option>
                <option value="Anão das Colinas">Anão das Colinas</option>
                <option value="Anão das Montanhas">Anão das Montanhas</option>
                <option value="">----- Elfo -----</option>
                <option value="Alto Elfo">Alto Elfo</option>
                <option value="Elfo da Floresta">Elfo da Floresta</option>
                <option value="Elfo Negro(Drow)">Elfo Negro(Drow)</option>
                <option value="">----- Halfing -----</option>
                <option value="Pés Leves">Pés Leves</option>
                <option value="Robusto">Robusto</option>
                <option value="">----- Humano -----</option>
                <option value="Humano">Humano</option>
                <option value="">----- Draconato -----</option>
                <option value="Draconato">Draconato</option>
                <option value="">----- Gnomo -----</option>
                <option value="Gnomo da Floresta">Gnomo da Floresta</option>
                <option value="Gnomo das Rochas">Gnomo das Rochas</option> -->
                <option value="">----- Meio-Elfo -----</option>
                <option value="Meio-Elfo">Meio-Elfo</option>
                <option value="">----- Meio-Orc -----</option>
                <option value="Meio-Orc">Meio-Orc</option>
                <option value="">----- Tiefling -----</option>
                <option value="Tiefling">Tiefling</option>
            </select>

            Classe
            <select name="" id="slc-class" onchange="chkClass()">
                <option value="" default>-- Selecione --</option>
                <option value="Bárbaro">Bárbaro</option>
                <option value="Bardo">Bardo</option>
                <option value="Bruxo">Bruxo</option>
                <option value="Clérigo">Clérigo</option>
                <option value="Druida">Druida</option>
                <option value="Feiticeiro">Feiticeiro</option>
                <option value="Guerreiro">Guerreiro</option>
                <option value="Ladino">Ladino</option>
                <option value="Lutador">Lutador</option>
                <option value="Mago">Mago</option>
                <option value="Monge">Monge</option>
                <option value="Paladino">Paladino</option>
                <option value="Ranger">Ranger</option>
            </select>

            Nível
            <select name="" id="slc-nivel" onchange="chkNivel()">
                <?php
                for($i=1;$i<=20;$i++) {
                    echo '<option value="'.$i.'">'.$i.'º Nível</option>';
                }
                ?>
            </select>

            Antecedentes
            <select name="" id="slc-antecedentes">
                <option value="" default>-- Selecione --</option>
                <option value="Acólito">Acólito</option>
                <option value="Animador">Animador</option>
                <option value="Artesão de Guilda">Artesão de Guilda</option>
                <option value="Charlatão">Charlatão</option>
                <option value="Criminoso">Criminoso</option>
                <option value="Eremita">Eremita</option>
                <option value="Forasteiro">Forasteiro</option>
                <option value="Herói do Povo">Herói do Povo</option>
                <option value="Marinheiro">Marinheiro</option>
                <option value="Nobre">Nobre</option>
                <option value="Órfão">Órfão</option>
                <option value="Sábio">Sábio</option>
                <option value="Soldado">Soldado</option>
            </select>

            Alinhamento
            <select name="" id="slc-align">
                <option value="" default>-- Selecione --</option>
                <option value="Leal/Bom">Leal/Bom</option>
                <option value="Bom/Neutro">Bom/Neutro</option>
                <option value="Bom/Caótico">Bom/Caótico</option>
                <option value="Leal/Neutro">Leal/Neutro</option>
                <option value="Neutro">Neutro</option>
                <option value="Caótico/Neutro">Caótico/Neutro</option>
                <option value="Leal/Maligno">Leal/Maligno</option>
                <option value="Neutro/Maligno">Neutro/Maligno</option>
                <option value="Caótico/Maligno">Caótico/Maligno</option>
                <option value="Caótico">Caótico</option>
            </select>
        </fieldset><br>

        <div class="central">
            <fieldset class="atr">
                <legend>Atributos</legend>

                <p>Força</p><span class="vlr-mod" id="for-mod">0</span> 
                <input id="for-atr" class="input-atr" type="text" onchange="chkMod(1)" value="" maxlength="2">

                <p>Destreza</p><span class="vlr-mod" id="des-mod">0</span>
                <input id="des-atr" class="input-atr" type="text" onchange="chkMod(2)" value="" maxlength="2">

                <p>Constituição</p><span class="vlr-mod" id="con-mod">0</span>
                <input id="con-atr" class="input-atr" type="text" onchange="chkMod(3)" value="" maxlength="2">

                <p>Inteligência</p><span class="vlr-mod" id="int-mod">0</span>
                <input id="int-atr" class="input-atr" type="text" onchange="chkMod(4)" value="" maxlength="2">

                <p>Sabedoria</p><span class="vlr-mod" id="sab-mod">0</span>
                <input id="sab-atr" class="input-atr" type="text" onchange="chkMod(5)" value="" maxlength="2">

                <p>Carisma</p><span class="vlr-mod" id="car-mod">0</span>
                <input id="car-atr" class="input-atr" type="text" onchange="chkMod(6)" value="" maxlength="2">
            </fieldset>

            <fieldset class="teste-resist">
                <legend>Testes de Resistência</legend>
                Força:<br>
                Destreza:<br>
                Constituição:<br>
                Inteligência:<br>
                Sabedoria:<br>
                Carisma:<br>

                <hr>
                <p>Perícias</p>

                <input class="radio" value="Acrobacia" type="radio">Acrobacia (DES)<br>
                <input class="radio" value="Arcanismo" type="radio">Arcanismo (INT)<br>
                <input class="radio" value="Atletismo" type="radio">Atletismo (FOR)<br>
                <input class="radio" value="Atuação" type="radio">Atuação (CAR)<br>
                <input class="radio" value="Blefar" type="radio">Blefar (CAR)<br>
                <input class="radio" value="Furtividade" type="radio">Furtividade (DES)<br>
                <input class="radio" value="História" type="radio">História (INT)<br>
                <input class="radio" value="Intimidação" type="radio">Intimidação (CAR)<br>
                <input class="radio" value="Investigação" type="radio">Investigação (INT)<br>
                <input class="radio" value="Lidar c/ Animais" type="radio">Lidar c/ Animais (SAB)<br>
                <input class="radio" value="Medicina" type="radio">Medicina (SAB)<br>
                <input class="radio" value="Natureza" type="radio">Natureza (INT)<br>
                <input class="radio" value="Percepção" type="radio">Percepção (SAB)<br>
                <input class="radio" value="Persuasão" type="radio">Persuasão (CAR)<br>
                <input class="radio" value="Prestidigitação" type="radio">Prestidigitação (DES)<br>
                <input class="radio" value="Religião" type="radio">Religião (INT)<br>
                <input class="radio" value="Sobrevivência" type="radio">Sobrevivência (SAB)<br>

            </fieldset><br>

            <fieldset class="info">
                    <legend>Informações</legend>
                    Classe de Armadura:<br>
                    <input id="vlr-shield" class="shield" type="text" title="10 + Modificador de Destreza + Bônus de Armadura"><br>

                    Iniciativa:<br>
                    <input type="text"><br>

                    Deslocamento:<br>
                    <input id="deslocamento" type="text"><br>
                    <hr>

                    Pontos de vidas atuais: <br>
                    <input type="text"><br>

                    Pontos de vida temporários: <br>
                    <input type="text">

                    <hr>

                    Total de vida: <br>
                    <input id="vida-total" type="text" value=""><br>

                    <hr>

                    Dado de vida: 
                    <!-- <select name="" id=-"dado-vida">
                        <option value="">-- Selecione --</option>
                        <option value="">d4</option>
                        <option value="">d6</option>
                        <option value="">d8</option>
                        <option value="">d10</option>
                        <option value="">d12</option>
                    </select> -->
                    <span id="dado-vida">Não definido</span>
            </fieldset>

            <fieldset class="atk-spell">
                <legend>Ataques e Magias</legend>
                <div class="atk">
                    <div>
                        Nome <input type="text"><br><br>
                        <input name="arma-1"type="text"><br><br>
                        <input name="arma-2"type="text"><br><br>
                        <input name="arma-3"type="text"><br><br>
                    </div>

                    <div>
                        Bônus <input type="text"><br><br>
                        <input name="bonus-1" type="text"><br><br>
                        <input name="bonus-2" type="text"><br><br>
                        <input name="bonus-3" type="text"><br><br>
                    </div>

                    <div>
                        Dano/Tipo <input type="text"><br><br>
                        <input name="dano-1" type="text"><br><br>
                        <input name="dano-2" type="text"><br><br>
                        <input name="dano-3" type="text"><br><br>
                    </div>
                </div>

                <hr>

                Magias<br>
                <textarea name="" id="" cols="50" rows="19" placeholder="Descrição de Magias..."></textarea>

            </fieldset>



            <fieldset class="">
                <legend>Descrições</legend>
                <br>

                <textarea name="" id="" cols="47" rows="7" placeholder="Traços de Personalidade..."></textarea><br><br>
                <textarea name="" id="" cols="47" rows="7" placeholder="Ideais..."></textarea><br><br>
                <textarea name="" id="ligacoes" cols="47" rows="7" placeholder="Ligações..."></textarea><br><br>
                <textarea name="" id="" cols="47" rows="7" placeholder="Defeitos..."></textarea><br>

            </fieldset>

        </div>

        <br>

        <div class="abaixo">
            <fieldset class="role">
                <legend>Idiomas e Outras Proficiências</legend>
                <textarea id="idiomas-proficiencias" name="" id="" cols="55" rows="20" placeholder="Idiomas e outros..."></textarea>
            </fieldset>
           

            <fieldset class="equi">
                <legend>Equipamentos</legend>
                <div class="mount-coins">
                    <textarea name="" id="" cols="25" rows="10" placeholder="Equipamentos..."></textarea><br><br>
                    PC: <input type="text"><br>
                    PP: <input type="text"><br>
                    PE: <input type="text"><br>
                    PO: <input type="text"><br>
                    PL: <input type="text"><br>
                </div>
            </fieldset>

            <fieldset class="outras-habilidades">
                <legend>Características e Outras Habilidades</legend>
                <textarea id="outras-habilidades" name="" id="" cols="86" rows="20" placeholder="Características e Outras Habilidades..."></textarea>
            </fieldset>
        </div>
        <input id="btn-submit" class="btn-submit" type="submit" value="Gerar PDF">
        <span class="feito-por">Envie sugestões: <a  href="https://www.facebook.com/profile.php?id=100002297930488" target="_blank">Desenvolvedor</a></span>
    </form>

    Ficha física para download: <a href="https://meublogderpg.files.wordpress.com/2014/07/ficha-de-personagem-dd-5e.pdf" target="_blank">Aqui</a><br>

    <!-- <input class="btn-print" type="button" value="Imprimir" onClick="window.print()"/> -->

<script src="js/geral.js"></script>
<script src="js/validacao.js"></script>
<script src="js/classes.js"></script>
<script src="js/nivel.js"></script>
<script src="js/arraysClasses.js"></script>
</body>

</html>