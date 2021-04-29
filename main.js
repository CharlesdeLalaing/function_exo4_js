// ### Exercice 1
// - créer une fonction qui va renvoyer via un console.log "bonjour"
// - appelle la fonction

// function bonjour(text) {
//     return console.log(text)
// }
// bonjour("Bonjour");

// ### Exercice 2
// - créer une fonction qui va faire le calcule " 5 + 5 " et va retourner le résultat de ce calcul via un console.log
// - appelle la fonction

// function calcul() {
//     return console.log(5 + 5);
// }
// calcul();

// ### Exercice 3
// - créer une fonction qui va prendre un parametre "prenom", la fonction consiste à retourner via un console.log "bonjour + prenom"
// - appelle la fonction

// function name(prenom) {
//     return (`Bonjour ` + prenom)
// }
// console.log(name("Charles"));

// ### Exercice 4 
// - créer une fonction qui prendre trois parametres. 
// - elle va retourner via un console.log les types des éléments passer en parametres. 
// - appelle la fonction

// function type(element1, element2, element3) {
//     return console.log(typeof element1, typeof element2, typeof element3);
// }
// type(17,"charle",true);

// ## Exercice logique 
// #### Exercice 1
// - Créé une fonction qui va choisir un nombre au hasard entre 1 et 20. Le joueur a 5 essais pour trouver le nombre.
// - Si le joueur est a 5 unités de plus que la réponse, la fonction doit renvoyer "Froid".
// - Si le joueur est à 5 unités ou moins de la bonne réponse alors la fonction doit renvoyer "tiède".
// - Si le joueur est à 2 unités = "chaud".
// - Si le joueur est à 1 unités = "Burlant".
// - Si le joueur échoue à trouver le nombre au bout de 5essaies, la fonction indique que la partie est terminée.
// - Si le joueur trouve la bonne réponse, la boucle s'arrette et la fonction indique que le joueur a gagné





// function hasard() {

//     let reponse;
//     let diff;
//     let aleatoire = Math.ceil(Math.random()*20);
//     let index = 5;

//     while (index > 0 && reponse != aleatoire) {
//         reponse = +prompt("chiffre");
//         diff = Math.abs(aleatoire - reponse);
//         if (diff == 0) {
//             index = 5;
//         } else if (diff == 1) {
//             index--;
//             alert(`Brulant, encore! Il te reste ${index} chance`);
//         } else if (diff == 2) {
//             index--;
//             alert(`Chaud, encore! Il te reste ${index} chance`);
//         } else if (diff <= 5) {
//             index--;
//             alert(`Tiède, encore! Il te reste ${index} chance`);
//         } else if (diff > 5) {
//             index--;
//             alert(`Froid, encore! Il te reste ${index} chance.`);
//         }
//     }
//     if (reponse == aleatoire) {
//         alert("BRAVO");
//     } else {
//         alert("tu as dépaser tes 5 essais... Dommage.");
//     }  
// }
// hasard();


// #### Exercice 2
// - Créer un tableau avec différents elements dedans(String,integer,Boolean)
// - Créer une fonction qui :
//   - met la premier lettre des strings en majuscule et le reste en minuscule.(peu importe comment les noms sont ecris)
//   - retourne le carré des integers.
//   - retourne le contraire du boolean.

// let tableau = ["charLes", 22, true];

// function mix(tab) {
//     tab.forEach((element, index) => {
//         switch (typeof element) {
//         case "string":
//             return tab[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase(); //substr fonctionne aussi ! pour slice
//         case "number":
//             return tab[index] = Math.pow(element,2);
//         case "boolean":
//             if (element == true) {
//                 tab[index] = false;
//             } else {
//                 tab[index] = true;
//             }
//         default:
//             break;
//     }
//     });
// };
// mix(tableau);
// console.log(tableau);



// #### Exerice 3 
// - Créer une fonction avec deux paramètres (prenom, salaire) qui demande à l'utilisateur de classer différents types de personne en fonction de leurs salaires.
// - Créér trois tableaux :
//     - "moinMoyenne" pour les salaires en dessous de la moyenne(<1600 euro)
//     - "moyenne" pour les salaires dans la moyenne (entre 1600 et 1800 euro)
//     - "plusMoyenne" pour les salaires au-dessus de la moyenne (>1800)
// - Trie les prénoms des personnes en fonction des salaires et affiche les tableaux.

// let moinMoyenne = [];
// let moyenne = [];
// let plusMoyenne = [];

// function charles(prenom, salaire) {
//     if (salaire < 1600) {
//         moinMoyenne.push(prenom);
//     } else if (salaire > 1800) {
//         plusMoyenne.push(prenom);
//     } else {
//         moyenne.push(prenom);
//     }
// }

// charles("charles", 1650);
// console.log(moinMoyenne);
// console.log(moyenne);
// console.log(plusMoyenne);


// #### Exercice 4
// - Créer une fonction qui va prendre deux paramètres (prenom, age). Pour un concert, vérifie si les personnes, souhaitant participer, sont majeurs. 
// - Si OUi, vous les mettez dans un tableau(vide) du nom de 'concert'. Attention le concert est limité à 7 personnes, cause de covid. :( 
// - Si NON, elle ne rentre pas. 
// - Affichez via une console.log, toutes les personnes présentes au concert avec leur 1er lettre de leurs prénom en majuscule. 

let tableau = [];
let prenom;
let age;
let add;

function concert(prenom, age) {
    add = confirm("tu veux entrer?")
    while (add != false) {
        prenom = prompt("nom");
        age = prompt("age");
        if (age >= 18) {
        tableau.push(prenom.charAt(0).toUpperCase()+prenom.substr(1).toLowerCase())
        } else {
        alert(`sorry ${prenom}, but you're to young.`)
        }
        if (tableau.length > 7) {
        alert(`la sale est pleine ${prenom}, merci de bien vouloir degager.`);
        tableau.splice(prenom,1)
        }
        add = confirm("tu veux entrer?")
    }
    
}
concert();
console.log(tableau);

