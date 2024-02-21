


/*************************************************************************************************************************/
/************************************Copyright © 2023-2024 DreamBelieveMake By Sawda**************************************/
/*************************************************************************************************************************/




//******************************************************************************//
//******************************Au chargement de la page************************//
//******************************************************************************//

$("#pAjoutMotDic").hide();
$("#pSuppMotDic").hide();
$("#erreurChiffre").hide();
$("#erreurExiste").hide();
$("#erreurExistePas").hide();
$("#nbMotsDic").text(dictionnaire.length);
(function dicoTable() {//Tableau pour afficher la liste des mots dans le dictionnaire
    let divOrigine = $("#tableDico");
    let table = $("<table></table>");
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
        tr.attr("id", "trMots" + index);
        table.append(tr);
        let td1 = $("<td></td>");
        td1.attr("id", "tdNum" + index);
        tr.append(td1);
        td1.text(index + 1);
        td1.css("backgroundColor", "rgb(239, 76, 166)");
        td1.css("color", "black");
        let td2 = $("<td></td>");
        td2.attr("id", "tdMot" + index);
        tr.append(td2);
        td2.text(dictionnaire[index]);
    }
})();
(function dataStorage() {
    if (typeof (localStorage.getItem("item")) !== "undefined") {
        $("#alerte").text(localStorage.getItem("item"));
        localStorage.removeItem("item");
    }
})();






//******************************************************************************//
//*********************************addEventListener*****************************//
//******************************************************************************//

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
        let i = 0;
        while (localStorage.getItem('mot' + i) !== null) {
            localStorage.removeItem('mot' + i);
            localStorage.removeItem('num' + i);
            i++;
        }
        location.reload();
    }
});
$('#suppDic').on({//supprimer un mot du dictionnaire
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
        $("#pSuppMotDic").show();
    }
});
$("#suppMotDic").change(function (event) {
    let motASuppDic = ($(this).val()).toUpperCase();
    motASuppDic = motASuppDic.trim();
    if (dictionnaire.includes(motASuppDic)) {
        dictionnaire.splice(dictionnaire.indexOf(motASuppDic), 1);
        let item = "Le mot " + motASuppDic + " a bien été supprimé";
        miseAJourDico(item);
        $("#pSuppMotDic").hide();
    } else {
        $("#erreurExistePas").show();
    }
});
$('#ajoutDic').on({//ajouter un mot dans le dictionnaire
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
        $("#pAjoutMotDic").show();
    }
});
$("#ajoutMotDic").change(function (event) {
    let motAAjoutDic = ($(this).val()).toUpperCase();
    motAAjoutDic = motAAjoutDic.trim();
    motAAjoutDic = motAAjoutDic.replace(/[\s'-]/g, '');
    /* /[\s'-]/g correspond à tous les espaces (\s), apostrophes (') et traits d'union (-) dans 
    la chaîne de caractères. La méthode replace() est ensuite utilisée pour remplacer toutes les 
    occurrences de ces caractères par une chaîne vide ''. /g : C'est un indicateur global, qui 
    signifie que la recherche doit être effectuée de manière globale dans toute la chaîne, et pas 
    seulement à la première occurrence.*/
    if (parseInt(motAAjoutDic)) {
        $("#erreurExiste").hide();
        $("#attention").hide();
        $("#erreurChiffre").show();
    } else {
        let motExiste = false;
        if (dictionnaire.includes(motAAjoutDic)) {
            $("#erreurChiffre").hide();
            $("#attention").hide();
            $("#erreurExiste").show();
            motExiste = true;
        }
        if (!motExiste) {
            dictionnaire.push(motAAjoutDic);
            let item = "Le mot " + motAAjoutDic + " a bien été ajouté";
            miseAJourDico(item);
            $("#pAjoutMotDic").hide();
        }
    }
});





//******************************************************************************//
//************************************Fonctions*********************************//
//******************************************************************************//

function miseAJourDico(item) {//fonction pour mettre à jour la liste des mots du dictionnaire
    dictionnaire.sort();
    for (let i in dictionnaire) {
        //mettre à jour le dictionnaire
        let num = parseInt(i) + 1;
        $("#tdNum" + (num)).text(num);
        $("#tdMot" + (num)).text(dictionnaire[num - 1]);
        //mettre à jour le localStorage
        localStorage.setItem('num' + i, num);
        localStorage.setItem('mot' + i, dictionnaire[num - 1]);

    }
    if (typeof (localStorage.getItem('mot' + dictionnaire.length)) !== "undefined") {
        i = dictionnaire.length;
        while (localStorage.getItem('mot' + i) !== null) {
            localStorage.removeItem('mot' + i);
            localStorage.removeItem('num' + i);
            i++;
        }
    }
    localStorage.setItem("item", item);
    location.reload();
}