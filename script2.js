



/*************************************************************************************************************************/
/************************************Copyright © 2023-2024 DreamBelieveMake By Sawda**************************************/
/*************************************************************************************************************************/




//******************************************************************************//
//******************************Au chargement de la page************************//
//******************************************************************************//

let motSaisiMachine; //mot choisi par l'humain
let tailleMotSaisiMachine; //taille du mot choisi par l'humain
let tableMotSaisiMachine; //table contenant les lettres du mot saisi par l'humain
let dicReduitMachine = []; //dicReduitMachine contient tous les mots de dictionnaire qui ont la taille du mot choisi par l'humain
let dicReduit2Machine = []; //sert au fur et à mesure pour mettre dans dicReduitMachine les mots qui correspondent aux critères
let randMachineMachine; //choix d'un entier aléatoire pour tirer un mot aléatoirement dans dicReduitMachine
let motMachineMachine; //mot tirer aléatoirement dans dicReduitMachine
let tablemotMachineMachine; //table contenant les lettres du mot choisi aléatoirement dans dicReduitMachine
let randMachine2Machine; //choix d'un entier aléatoire pour tirer un mot aléatoirement dans tablemotMachineMachine
let lettreMachineMachine; //lettre tirer aléatoirement dans tablemotMachineMachine
let penaliteMachine = 0; //le nombre de pénalité
let comptPenaliteMachine = 0;
let tabLettresMachine = []; //Tabeau regroupant l'ensemble des lettres choisi lors d'une partie
let lettreDejaChoisiMachine; //Vaut vrai ou faux
let penaliteTMachine = 0; //score total de la machine
let gainTMachine = 0; //score total de la machine
let perteTMachine = 0; //score total de la machine
$("#perteMachine").hide();
$("#gainMachine").hide();
$("#lestirets").hide();
$("#imgMachine").hide();
$("#replay").hide();
$("#erreur").hide();
(function tablescoreMachine() {//Table du score
    let divTable = $("#scoreMachineTable");
    let table = $("<table></table>");
    divTable.append(table);
    let caption = $("<caption></caption>");
    caption.text("Score total de la machine");
    table.append(caption);
    let tr1 = $("<tr></tr>");
    table.append(tr1);
    let th0 = $("<th></th>");
    tr1.append(th0);
    th0.text("Nombre d'erreurs");
    th0.attr("id", "nbpen2");
    let th1 = $("<th></th>");
    tr1.append(th1);
    th1.text("Nombre de mots trouvés");
    th1.attr("id", "nbgain2");
    let th2 = $("<th></th>");
    tr1.append(th2);
    th2.text("Nombre de mots non trouvés");
    th2.attr("id", "nbperte2");
    let trscoreMachine = $("<tr></tr>");
    trscoreMachine.attr("id", "trscoreMachine");
    table.append(trscoreMachine);
    let tdpenaliteTMachine = $("<td></td>");
    tdpenaliteTMachine.attr("id", "tdpenaliteTMachine");
    trscoreMachine.append(tdpenaliteTMachine);
    tdpenaliteTMachine.text(".........");
    let tdgainTMachine = $("<td></td>");
    tdgainTMachine.attr("id", "tdgainTMachine");
    trscoreMachine.append(tdgainTMachine);
    tdgainTMachine.text(".........");
    let tdperteTMachine = $("<td></td>");
    tdperteTMachine.attr("id", "tdperteTMachine");
    trscoreMachine.append(tdperteTMachine);
    tdperteTMachine.text(".........");
})();
(function dicoTable() {//Table du dictionnaire
    let divOrigine = $("#idTableDico");
    let table = $("<table></table>")
    divOrigine.append(table);
    let caption = $("<caption></caption>");
    caption.text("Dictionnaire");
    table.append(caption);
    let tr1 = $("<tr></tr>");
    table.append(tr1);
    let th1 = $("<th></th>");
    tr1.append(th1);
    th1.text("N°");
    let th2 = $("<th></th>");
    tr1.append(th2);
    th2.text("Mot");
    for (let index = 0; index < dictionnaire.length; index++) {
        let tr = $("<tr></tr>");
        table.append(tr);
        let td1 = $("<td></td>");
        tr.append(td1);
        td1.text(index + 1);
        td1.css("backgroundColor", "rgb(239, 76, 166)");
        td1.css("color", "black");
        let td2 = $("<td></td>");
        tr.append(td2);
        td2.text(dictionnaire[index]);
    }
})();
(function dataStorage() {//Données du localStorage
    if (localStorage.getItem('penaliteTMachine') != null) {
        $("#tdpenaliteTMachine").text(localStorage.getItem('penaliteTMachine'));
        penaliteTMachine = parseInt(localStorage.getItem('penaliteTMachine'));
    }
    if (localStorage.getItem('gainTMachine') != null) {
        $("#tdgainTMachine").text(localStorage.getItem('gainTMachine'));
        gainTMachine = parseInt(localStorage.getItem('gainTMachine'));
    }
    if (localStorage.getItem('perteTMachine') != null) {
        $("#tdperteTMachine").text(localStorage.getItem('perteTMachine'));
        perteTMachine = parseInt(localStorage.getItem('perteTMachine'));
    }
})();






//******************************************************************************//
//*********************************addEventListener*****************************//
//******************************************************************************//
//const boutonValider = document.getElementById("validerMot");

$('#replay').on({//Rejouer
    mouseenter: function () {
        $(this).css("background-color", "rgb(24, 197, 82)");
        $(this).css("color", "black");
    },
    mouseleave: function () {
        $(this).css("background-color", "rgb(238, 241, 241)");
        $(this).css("color", "rgb(196, 81, 81)");
    },
    click: function () {
        $(this).css("background-color", "yellow");
        $(this).css("color", "black");
        location.reload();
    }
});
$('#refresh').on({//Réinitialiser le dictionnaire
    mouseenter: function () {
        $(this).css("background-color", "rgb(24, 197, 82)");
        $(this).css("color", "black");
    },
    mouseleave: function () {
        $(this).css("background-color", "rgb(238, 241, 241)");
        $(this).css("color", "rgb(196, 81, 81)");
    },
    click: function () {
        $(this).css("background-color", "yellow");
        $(this).css("color", "black");
        if (localStorage.getItem('penaliteTMachine') != null) {
            localStorage.removeItem('penaliteTMachine');
        }
        if (localStorage.getItem('gainTMachine') != null) {
            localStorage.removeItem('gainTMachine');
        }
        if (localStorage.getItem('perteTMachine') != null) {
            localStorage.removeItem('perteTMachine');
        }
        location.reload();
    }
});
$('#jouerMachine').on({//CSS Bouton
    mouseenter: function () {
        $(this).css("background-color", "rgb(24, 197, 82)");
        $(this).css("color", "black");
    },
    mouseleave: function () {
        $(this).css("background-color", "rgb(238, 241, 241)");
        $(this).css("color", "rgb(196, 81, 81)");
    }
});
$("#motSaisiHom").change(function (event) { //Lorsque l'utilisateur choisi un mot
    let ismotSaisiMachine = false;
    motSaisiMachine = ($(this).val()).toUpperCase();
    motSaisiMachine = motSaisiMachine.trim();
    if (dictionnaire.includes(motSaisiMachine)) {
        ismotSaisiMachine = true;
    }
    if (!ismotSaisiMachine) {
        $("#erreur").show();
    } else {
        $("#erreur").hide();
        $("#lestirets").show();
        $("#imgMachine").show();
        $("#motSaisiHom").prop('disabled', 'disabled');
        imageMachine();
        tableMotSaisiMachine = motSaisiMachine.split('');
        tailleMotSaisiMachine = motSaisiMachine.length;
        choixHommeMachine();
        for (let i in dictionnaire) {
            if (dictionnaire[i].length == tailleMotSaisiMachine) {
                dicReduitMachine.push(dictionnaire[i])
            }
        }
    }
});
$("#jouerMachine").click(function (event) {//Lorsqu'on clique sur le bouton HTML jouerMachine
    $(this).css("background-color", "yellow");
    $(this).css("color", "black");
    comptPenaliteMachine = 0;
    randMachineMachine = entierAleatoire(0, dicReduitMachine.length - 1);
    motMachineMachine = dicReduitMachine[randMachineMachine];
    console.log("motMachineMachine.split", motSaisiMachine, randMachineMachine, dicReduitMachine, motMachineMachine)
    //Le mot choisi est le bon
    if (motMachineMachine == motSaisiMachine && penaliteMachine <= 6) { //La machine gagne 
        gainMachine(); //lancer la fonction gainMachine
    }
    //Le mot choisi n'est pas le bon et le nombre de pénalités n'a pas atteint 7
    if (motMachineMachine != motSaisiMachine && penaliteMachine <= 6) {
        tablemotMachineMachine = motMachineMachine.split(''); //La liste des lettres du mot choisi
        lettreDejaChoisiMachine = true;
        while (lettreDejaChoisiMachine != false) { //La machine cherche une lettre a proposé
            lettreDejaChoisiMachine = false;
            randMachine2Machine = entierAleatoire(0, tablemotMachineMachine.length - 1);
            lettreMachineMachine = tablemotMachineMachine[randMachine2Machine]; // La lettre choisie
            if (tabLettresMachine.length != 0) {
                if (tabLettresMachine.includes(lettreMachineMachine)) {
                    lettreDejaChoisiMachine = true;
                }
            }
        }
        tabLettresMachine.push(lettreMachineMachine); //ranger la lettre dans la table des lettres déjà choisie
        for (let i in tableMotSaisiMachine) {
            if (tableMotSaisiMachine[i] == lettreMachineMachine) {//La lettre choisie a une correspondance avec les lettres du mot saisi par l'utilisateur
                let positionMachine = i;
                //cacher trait
                $("#spanTraitMachine" + i).hide();
                //afficher lettre
                $("#spanLettreMachine" + i).show();
                for (let i in dicReduitMachine) { //Conserver uniquement les mots qui ont une lettre à cette place
                    let tableMachine = dicReduitMachine[i].split(''); //table contenant les lettres du mot dicReduitMachine[i]
                    if (tableMachine[positionMachine] == lettreMachineMachine) {
                        dicReduit2Machine.push(dicReduitMachine[i])
                    }
                }
                dicReduitMachine = []
                dicReduitMachine = dicReduit2Machine; //mettre dicReduitMachine à jour
                dicReduit2Machine = []

            } else { //le lettre choisie n'a aucune correspondance
                comptPenaliteMachine++;
            }
        }
    }
    if (comptPenaliteMachine == tailleMotSaisiMachine && penaliteMachine <= 6) {
        penaliteMachine++; //incrémenté la variable qui compte les pénalités
        $("#gainMachine").text("La machine a gagné! Elle a comptabilisé " + penaliteMachine + " erreur.s");
        dicReduitMachine.splice(randMachineMachine, 1); //supprimer le mot choisi du tableau
        imageMachine(); //mettre à jour le pendu
    }
    if (penaliteMachine > 6) {
        perteMachine(); //lancer la fonction perteMachine
    }
});







//******************************************************************************//
//************************************Fonctions*********************************//
//******************************************************************************//

function entierAleatoire(min, max) {//Pour choisir un entier aléatoire
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function imageMachine() {//Pour changer l'image selon l'évolution du jeu
    $("#imgMachine").attr('src', 'image' + penaliteMachine + '.png');
}
function choixHommeMachine() {//Pour mettre les tirets
    for (let i in tableMotSaisiMachine) {
        let spanTraitMachine = $("<span></span>");
        spanTraitMachine.attr('id', 'spanTraitMachine' + i);
        spanTraitMachine.text(' - ');
        $("#divMotMachine").append(spanTraitMachine);
        let spanLettreMachine = $("<span></span>");
        spanLettreMachine.attr('id', 'spanLettreMachine' + i);
        spanLettreMachine.text(tableMotSaisiMachine[i]);
        spanLettreMachine.hide();
        $("#divMotMachine").append(spanLettreMachine);
    }
}
function perteMachine() {//Définir ce qui se passe lorsque la machine perd
    let imgMachine = $("#imgMachine");
    imgMachine.attr('src', 'image7.png');
    for (let i in tableMotSaisiMachine) {
        //cacher trait
        $("#spanTraitMachine" + i).hide();
        //afficher mot
        $("#spanLettreMachine" + i).show();
    }
    $("#perteMachine").show();
    $("#replay").show();
    penaliteTMachine = penaliteTMachine + 7;
    perteTMachine++;
    listscoreMachine();
    $("#jouerMachine").prop('disabled', 'disabled');
}
function gainMachine() {//Définir ce qui se passe lorsque la machine gagne
    let img = $("#imgMachine");
    img.attr('src', 'imageGain.png');
    for (let i in tableMotSaisiMachine) {
        //cacher trait
        $("#spanTraitMachine" + i).hide();
        //afficher mot
        $("#spanLettreMachine" + i).show();
    }
    $("#gainMachine").show();
    $("#replay").show();
    penaliteTMachine = penaliteTMachine + penaliteMachine;
    gainTMachine++;
    listscoreMachine();
    $("#jouerMachine").prop('disabled', 'disabled');
}
function listscoreMachine() {
    //mettre à jour le tableau des scoreMachines
    $("#tdpenaliteTMachine").text(penaliteTMachine);
    $("#tdgainTMachine").text(gainTMachine);
    $("#tdperteTMachine").text(perteTMachine);
    //mettre à jour le localStorage
    localStorage.setItem('penaliteTMachine', penaliteTMachine);
    localStorage.setItem('gainTMachine', gainTMachine);
    localStorage.setItem('perteTMachine', perteTMachine);
};






