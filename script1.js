


/*************************************************************************************************************************/
/************************************Copyright © 2023-2024 DreamBelieveMake By Sawda**************************************/
/*************************************************************************************************************************/




//******************************************************************************//
//******************************Au chargement de la page************************//
//******************************************************************************//

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", //Tableau contenant les lettres de l'alphabet
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "À", "Â", "Ä", "É", "È", "Ê", "Œ", "Ë", "Î", "Ï", "Ô", "Ö", "Ù", "Û", "Ü", "Ÿ", "Ç"]
let tabJoueurs = []; //Déclaration du tableaux tabJoueurs qui stockera les 10 meilleurs joueurs avec leur nom
let nbJoueurs = 0; //Variable pour compter le nombre de joueurs ayant joué
let rangJoueur; //Variable pour récupérer le rang du joueur
let penaliteT = 0;
let gainT = 0;
let perteT = 0;
let nom; //Variable pour récupérer le nom du joueur s'il fait parti des 10 premiers
let penalite = 0; //Variable pour récupérer le nombre de penalité du joueur
let rand = entierAleatoire(0, dictionnaire.length - 1); //choix d'un entier aléatoire pour tirer un mot aléatoirement dans dictionnaire
let motMachine = dictionnaire[rand].toUpperCase(); //mot tirer aléatoirement dans dictionnaire
let tailleMotMachine = motMachine.length; // taille mot tirer aléatoirement dans dictionnaire
$("#motADeviner").text('Il y a ' + tailleMotMachine + ' lettres dans le mot à deviner :');
let tableMotMachine = motMachine.split(''); //table contenant les lettres du mot choisi aléatoirement dans dictionnaire
let motHomme = 0; //Variable permettant de compter le nombre de lettres vraies que le joueur a eu
let tabLettres = []; //Tabeau regroupant l'ensemble des lettres choisi lors d'une partie
let lettreDejaChoisi; //Vaut vrai ou faux
console.log("dictionnaire", dictionnaire, motMachine)
$("#perte").hide();
$("#gain").hide();
$("#nom").hide();
$("#textNom").hide();
$("#replay").hide();
$("#motADevinerNonTrouver").hide();
$("#motADevinerTrouver").hide();
image();
function Joueurs(nom, penalite, nbJoueurs) {//Construction de l'objet joueurs composé du nom, penalite et secondes écoulées
    this.nom = nom;
    this.penalite = penalite;
    this.numJoueur = nbJoueurs + 1; //Je construis un numéro de joueurs pour chaque joueurs pour pouvoir départagé les 
    //joueurs ayant meme penalite
}
(function tableScore() {//Tableau de score
    let divTable = $("#scoreTable");
    let table = $("<table></table>");
    divTable.append(table);
    let caption = $("<caption></caption>");
    caption.text("Votre score total");
    table.append(caption);
    let tr1 = $("<tr></tr>");
    table.append(tr1);
    let th0 = $("<th></th>");
    tr1.append(th0);
    th0.text("Nombre d'erreurs");
    th0.attr("id", "nbpen1");
    let th1 = $("<th></th>");
    tr1.append(th1);
    th1.text("Nombre de mots trouvés");
    th1.attr("id", "nbgain1");
    let th2 = $("<th></th>");
    tr1.append(th2);
    th2.text("Nombre de mots non trouvés");
    th2.attr("id", "nbperte1");
    let trScore = $("<tr></tr>");
    trScore.attr("id", "trScore");
    table.append(trScore);
    let tdpenaliteT = $("<td></td>");
    tdpenaliteT.attr("id", "tdpenaliteT");
    trScore.append(tdpenaliteT);
    tdpenaliteT.text(".........");
    let tdgainT = $("<td></td>");
    tdgainT.attr("id", "tdgainT");
    trScore.append(tdgainT);
    tdgainT.text(".........");
    let tdperteT = $("<td></td>");
    tdperteT.attr("id", "tdperteT");
    trScore.append(tdperteT);
    tdperteT.text(".........");
})();
(function tableJoueurs() {//Tableau des joueurs
    let divTable = $("#joueurTable");
    let table = $("<table></table>");
    divTable.append(table);
    let caption = $("<caption></caption>");
    caption.text("Liste des 10 premiers joueurs sur cet appareil");
    table.append(caption);
    let tr1 = $("<tr></tr>");
    table.append(tr1);
    let th0 = $("<th></th>");
    tr1.append(th0);
    th0.text("N°");
    let th1 = $("<th></th>");
    tr1.append(th1);
    th1.text("Nom / Pseudo");
    let th2 = $("<th></th>");
    tr1.append(th2);
    th2.text("Nombre d'erreurs");
    for (let index = 1; index < 11; index++) {
        let trJoueurs = $("<tr></tr>");
        trJoueurs.attr("id", "trJoueurs" + index);
        table.append(trJoueurs);
        let tdrang = $("<td></td>");
        tdrang.attr("id", "tdrang" + index);
        trJoueurs.append(tdrang);
        tdrang.text(index);
        tdrang.css("backgroundColor", "rgb(239, 76, 166)");
        tdrang.css("color", "black");
        let tdnom = $("<td></td>");
        tdnom.attr("id", "tdnom" + index);
        trJoueurs.append(tdnom);
        tdnom.text(".........");
        let tdpenalite = $("<td></td>");
        tdpenalite.attr("id", "tdpenalite" + index);
        trJoueurs.append(tdpenalite);
        tdpenalite.text(".........");
    }
})();
(function boutonAlphabet() {//fonction pour créer nos boutons avec les lettres de l'alphabet
    let divBouton = $("#divBouton");
    for (let i in alphabet) {
        let bouton = $("<button></button>");
        bouton.attr('id', 'bouton' + alphabet[i]);
        bouton.addClass('classBouton');
        bouton.html(alphabet[i]);
        divBouton.append(bouton);
    }
})();
(function choixMachine() {//fonction pour mettre les tirets
    let divMot = $("#divMot");
    for (let i in tableMotMachine) {
        let spanTrait = $("<span></span>");
        spanTrait.attr('id', 'spanTrait' + i);
        spanTrait.text(' - ');
        divMot.append(spanTrait);
        //récupérer les lettres du mot choisi par la machine
        let spanLettre = $("<span></span>");
        spanLettre.attr('id', 'spanLettre' + i);
        spanLettre.text(tableMotMachine[i]);
        spanLettre.hide();
        divMot.append(spanLettre);
    }
})();
(function dataStorage() {//récupérer les données qui sont dans le local storage
    if (localStorage.getItem('nbJoueurs') > 1 && localStorage.getItem('nbJoueurs') != null) { //s'il y a des joueurs dans localStorage
        nbJoueurs = localStorage.getItem('nbJoueurs'); //remettre dans nbJoueurs le nombre de joueurs dans localStorage
    } else { //sinon
        localStorage.setItem('nbJoueurs', 1); //considérer que c'est le premier joueur
        nbJoueurs = 1; //considérer que c'est le premier joueur
    }
    i = 0;
    while (localStorage.getItem('nom' + i) != null) {
        let rang = parseInt(i) + 1;
        $("#tdnom" + (rang)).text(localStorage.getItem('nom' + i));
        //tabJoueurs[i].nom=localStorage.getItem('nom'+i);
        $("#tdpenalite" + (rang)).text(localStorage.getItem('penalite' + i));
        tabJoueurs[i] = (new Joueurs(localStorage.getItem('nom' + i),
            parseInt(localStorage.getItem('penalite' + i)),
            parseInt(localStorage.getItem('numJoueur' + i)) - 1));
        i++;
    }
    if (localStorage.getItem('penaliteT') != null) {
        $("#tdpenaliteT").text(localStorage.getItem('penaliteT'));
        penaliteT = parseInt(localStorage.getItem('penaliteT'));
    }
    if (localStorage.getItem('gainT') != null) {
        $("#tdgainT").text(localStorage.getItem('gainT'));
        gainT = parseInt(localStorage.getItem('gainT'));
    }
    if (localStorage.getItem('perteT') != null) {
        $("#tdperteT").text(localStorage.getItem('perteT'));
        perteT = parseInt(localStorage.getItem('perteT'));
    }
})();




//******************************************************************************//
//*********************************addEventListener*****************************//
//******************************************************************************//

$('#refreshScore').on({//Réinitialiser le score
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
        if (localStorage.getItem('penaliteT') != null) {
            localStorage.removeItem('penaliteT');
        }
        if (localStorage.getItem('gainT') != null) {
            localStorage.removeItem('gainT');
        }
        if (localStorage.getItem('perteT') != null) {
            localStorage.removeItem('perteT');
        }
        location.reload();
    }
});
$('#refreshJoueurs').on({//Réinitialiser le classement
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
        if (localStorage.getItem('nbJoueurs') > 1 && localStorage.getItem('nbJoueurs') != null) {
            localStorage.removeItem('nbJoueurs');
        }
        i = 0;
        while (localStorage.getItem('nom' + i) != null) {
            localStorage.removeItem('nom' + i);
            localStorage.removeItem('penalite' + i);
            localStorage.removeItem('numJoueur' + i);
            i++;
        }
        location.reload();
    }
});
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
        //Avant de rafraichir la page vérifier
        if (localStorage.getItem('nbJoueurs') != null) { //s'il y a des joueurs dans localStorage
            if (motHomme > 0 || penalite > 0) { //puis si un utilisateur a tenté de jouer
                localStorage.setItem('nbJoueurs', localStorage.getItem('nbJoueurs') + 1); //incrémenter le nombre de joueur à 1
            }
        }
        //Puis Recharger la page
        location.reload();
    }
});





//******************************************************************************//
//************************************Fonctions*********************************//
//******************************************************************************//

function list10Joueurs() {//Mettre les données des joueurs à jour et dans le local storage
    //Trier le tableau tabJoueurs 
    tabJoueurs.sort(
        function (a, b) {
            if (a.penalite != b.penalite)
                return a.penalite - b.penalite; //par ordre croissant selon le penalite
            if (a.penalite == b.penalite)
                return a.numJoueur - b.numJoueur; //par ordre croissant selon le numéro de joueur
        }
    );
    for (let i in tabJoueurs) {
        //mettre à jour le tableau des 10 premiers joueurs
        let rang = parseInt(i) + 1;
        $("#tdnom" + (rang)).text(tabJoueurs[rang - 1].nom.toUpperCase());
        $("#tdpenalite" + (rang)).text(tabJoueurs[rang - 1].penalite);
        //mettre à jour le localStorage
        localStorage.setItem('nom' + i, tabJoueurs[rang - 1].nom.toUpperCase());
        localStorage.setItem('penalite' + i, tabJoueurs[rang - 1].penalite);
        localStorage.setItem('numJoueur' + i, tabJoueurs[rang - 1].numJoueur);
    }
}
function listScore() {//Mettre les données de score à jour et dans le local storage
    //mettre à jour le tableau des scores
    $("#tdpenaliteT").text(penaliteT);
    $("#tdgainT").text(gainT);
    $("#tdperteT").text(perteT);
    //mettre à jour le localStorage
    localStorage.setItem('penaliteT', penaliteT);
    localStorage.setItem('gainT', gainT);
    localStorage.setItem('perteT', perteT);
};
function ajoutJoueur(i) {//fonction qui va nous permettre de rajouter un joueur dans le tableau des 10 premiers
    $("#gain").hide();
    $("#nom").show();
    $("#textNom").show();
    $("#nom").change(function (event) {
        nom = $(this).val();
        nom = nom.trim();
        tabJoueurs[i] = (new Joueurs(nom, penalite, nbJoueurs));
        $(this).hide();
        $("#textNom").hide();
        //Pour mettre à jour le tableau des 10 premiers jours
        list10Joueurs();
    });
}
function entierAleatoire(min, max) {//fonction pour choisir un entier aléatoire
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function image() {//fonction pour changer l'image selon l'évolution du jeu
    let img = $("#img");
    img.attr('src', 'image' + penalite + '.png');
}
function clickBoutonAlphabet() {//fonction à faire lorsque le joueur clique sur un des boutons de l'alphabet
    for (let index in alphabet) {
        let leBouton = $("#bouton" + alphabet[index]);
        leBouton.on({
            mouseenter: function () {
                $(this).css("background-color", "rgb(24, 197, 82)");
                $(this).css("color", "black");
            },
            mouseleave: function () {
                $(this).css("background-color", "rgb(100, 8, 65)");
                $(this).css("color", "white");
            },
            click: function () {
                $(this).css("background-color", "yellow");
                $(this).css("color", "black");
            }
        });
        leBouton.click(
            function (event) {
                lettreDejaChoisi = false;
                if (tabLettres.includes(leBouton.html())) {
                    lettreDejaChoisi = true;
                }
                let comptPenalite = 0;
                if (motHomme != tailleMotMachine && penalite <= 6 && lettreDejaChoisi == false) {
                    tabLettres.push(leBouton.html());
                    for (let i in tableMotMachine) {
                        if (leBouton.html() == tableMotMachine[i]) {
                            //cacher trait
                            $("#spanTrait" + i).hide();
                            //afficher mot
                            $("#spanLettre" + i).show();
                            motHomme++;
                        } else {
                            comptPenalite++;
                        }
                    }
                    if (comptPenalite == tailleMotMachine && penalite <= 6) {
                        penalite++;
                        $("#gain").text("Vous avez gagné! Vous avez comptabilisé " + penalite + " erreur.s");
                        image();
                    }
                }

                if (motHomme == tailleMotMachine) {
                    gain();
                }

                if (penalite > 6) {
                    perte();
                }

                $("#bouton" + leBouton.html()).hide();
            }
        )
    }
}
function perte() {//fonction pour définir ce qui se passe lorsqu'un joueur perd
    let img = $("#img");
    img.attr('src', 'image7.png');
    $("#motADeviner").hide();
    $("#motADevinerNonTrouver").show();
    for (let i in tableMotMachine) {
        //cacher trait
        $("#spanTrait" + i).hide();
        //afficher mot
        $("#spanLettre" + i).show();
    }
    $("#perte").show();
    $("#replay").show();
    $("#divBouton").hide();
    penaliteT = penaliteT + 7;
    perteT++;
    listScore();
}
//window.localStorage.clear();
function gain() {//fonction pour définir ce qui se passe lorsqu'un joueur gagne
    let img = $("#img");
    img.attr('src', 'imageGain.png');
    $("#motADeviner").hide();
    $("#motADevinerTrouver").show();
    for (let i in tableMotMachine) {
        //cacher trait
        $("#spanTrait" + i).hide();
        //afficher mot
        $("#spanLettre" + i).show();
    }
    $("#replay").show();
    ajoutJoueurRangInf11();
    $("#gain").show();
    $("#divBouton").hide();
    penaliteT = penaliteT + penalite;
    gainT++;
    listScore();
}
function ajoutJoueurRangInf11() {//Fonction permettant de déterminer si le joueur est dans les 10 premiers et l'ajouter au tableau tabJoueurs
    let rang;
    if (tabJoueurs.length == 0) { //S'il n'y a encore aucune valeur dans tabJoueurs
        rang = 1;
        ajoutJoueur(0);
        return rang;
    }
    else { //S'il y a déjà une ou plusieurs valeurs dans tabJoueurs
        tabJoueurs.sort(//Trier le tableau par ordre croissant 
            function (a, b) {
                if (a.penalite != b.penalite)
                    return a.penalite - b.penalite; //selon le penalite
                if (a.penalite == b.penalite)
                    return a.numJoueur - b.numJoueur; //selon le numéro de joueur
            }
        );
        let dernierIndice = tabJoueurs.length - 1; //Récupérer le dernier indice du tableau
        //Les différents cas possible s'il y a déjà une ou plusieurs valeurs dans tabJoueurs
        if (penalite >= tabJoueurs[dernierIndice].penalite && dernierIndice <= 8) {
            rang = dernierIndice + 2;
            ajoutJoueur(dernierIndice + 1);
            return rang;
        }
        else if (penalite >= tabJoueurs[dernierIndice].penalite && dernierIndice == 9) {
            return 11;
        }
        else {
            for (let index = 0; index < tabJoueurs.length; index++) {
                if (penalite < tabJoueurs[index].penalite && dernierIndice == 9) {
                    tabJoueurs[dernierIndice] = tabJoueurs[index];
                    rang = index + 1;
                    ajoutJoueur(index);
                    return rang;
                }
                else if (penalite < tabJoueurs[index].penalite && dernierIndice <= 8) {
                    tabJoueurs[dernierIndice + 1] = tabJoueurs[index];
                    rang = index + 1;
                    ajoutJoueur(index);
                    return rang;
                }
            }
        }
    }
}





















