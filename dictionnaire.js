


/*************************************************************************************************************************/
/************************************Copyright © 2023-2024 DreamBelieveMake By Sawda**************************************/
/*************************************************************************************************************************/



//******************************************************************************//
//*********************************addEventListener*****************************//
//******************************************************************************//

//******************************************************************************//
//************************************Fonctions*********************************//
//******************************************************************************//

//******************************************************************************//
//******************************Au chargement de la page************************//
//******************************************************************************//

let dictionnaire = [];
(function dicoStorage() {//mettre dans dictionnaire les données
    if (localStorage.getItem('num0') !== null) {
        i = 0;
        while (localStorage.getItem('num' + i) !== null) {
            let num = parseInt(i) + 1;
            $("#tdNum" + (num)).text(localStorage.getItem('num' + i));
            $("#tdMot" + (num)).text(localStorage.getItem('mot' + i));
            dictionnaire[i] = localStorage.getItem('mot' + i);
            i++;
        }
    } else {
        dictionnaire = [
            "Maison",
            "Chien",
            "Chat",
            "Livre",
            "École",
            "Ami",
            "Jeu",
            "Fleur",
            "Arbre",
            "Plante",
            "Fruit",
            "Couleur",
            "Bonbon",
            "Ciel",
            "Eau",
            "Feu",
            "Vent",
            "Soleil",
            "Lune",
            "Montagne",
            "Rivière",
            "Mer",
            "Île",
            "Nuage",
            "Pluie",
            "Neige",
            "Herbe",
            "Terre",
            "Pomme",
            "Banane",
            "Orange",
            "Carotte",
            "Tomate",
            "Pain",
            "Lait",
            "Beurre",
            "Fromage",
            "Œuf",
            "Riz",
            "Viande",
            "Poulet",
            "Gâteau",
            "Sucette",
            "Fraise",
            "Cerise",
            "Papillon",
            "Fourmi",
            "Araignée",
            "Oiseau",
            "Poisson",
            "Vache",
            "Mouton",
            "Lion",
            "Tigre",
            "Éléphant",
            "Girafe",
            "Hippopotame",
            "Serpent",
            "Crocodile",
            "Tortue",
            "Chèvre",
            "Singe",
            "Baleine",
            "Dauphin",
            "Requin",
            "Pingouin",
            "Panda",
            "Kangourou",
            "Koala",
            "Lapin",
            "Renard",
            "Ours",
            "Souris",
            "Loup",
            "Escargot",
            "Caméléon",
            "Grenouille",
            "Coccinelle",
            "Dragon",
            "Lumière",
            "Oxygène",
            "Musique",
            "Danse",
            "Chanson",
            "Théâtre",
            "Film",
            "Histoire",
            "Conte",
            "Poème",
            "Lecture",
            "Écriture",
            "Calcul",
            "Nombre",
            "Addition",
            "Soustraction",
            "Multiplication",
            "Division",
            "Figure",
            "Triangle",
            "Carré",
            "Cercle",
            "Rectangle",
            "Ovale",
            "Cœur",
            "Étoile",
            "Flèche",
            "Ligne",
            "Point",
            "Trait",
            "Courbe",
            "Angle",
            "Droite",
            "Gauche",
            "Haut",
            "Bas",
            "Dessus",
            "Dessous",
            "Devant",
            "Derrière",
            "Côté",
            "Entre",
            "Centre",
            "Coin",
            "Bord",
            "Surface",
            "Intérieur",
            "Extérieur",
            "Profond",
            "Peu",
            "Beaucoup",
            "Long",
            "Court",
            "Étroit",
            "Large",
            "Lourd",
            "Léger",
            "Dur",
            "Mou",
            "Chaud",
            "Froid",
            "Fort",
            "Faible",
            "Vite",
            "Brillant",
            "Sombre",
            "Clair",
            "Obscur",
            "Joyeux",
            "Triste",
            "Content",
            "Ennuyé",
            "Fatigué",
            "Heureux",
            "Fâché",
            "Aimable",
            "Méchant",
            "Amical",
            "Solitaire",
            "Amusant",
            "Sérieux",
            "Curieux",
            "Timide",
            "Câlin",
            "Aventureux",
            "Brave",
            "Fier",
            "Humble",
            "Généreux",
            "Égoïste",
            "Sincère",
            "Doux",
            "Frêle",
            "Juste",
            "Injuste",
            "Honnête",
            "Malhonnête",
            "Polir",
            "Impoli",
            "Propre",
            "Sale",
            "Rapide",
            "Lent",
            "Gros",
            "Maigre",
            "Jeune",
            "Vieux",
            "Neuf",
            "Bon",
            "Mauvais",
            "Cher",
            "Grand",
            "Rouge",
            "Bleu",
            "Jaune",
            "Vert",
            "Violet",
            "Rose",
            "Noir",
            "Blanc",
            "Gris",
            "Brun",
            "Beige",
            "Turquoise",
            "Indigo",
            "Marron"
        ];
    }
    for (let i in dictionnaire) {
        dictionnaire[i] = dictionnaire[i].toUpperCase();
    }
    dictionnaire = dictionnaire.sort();
})();


















