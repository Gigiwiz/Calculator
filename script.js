// Fonction pour additionner

function addition(nombreA, nombreB) {
    
    return nombreA + nombreB
}

// Fonction pour multiplier

function multiplication(nombreA, nombreB) {
    
    return nombreA * nombreB
}

// Fonction pour soustraire

function soustraction(nombreA, nombreB) {
    
    return nombreA - nombreB
}

// Fonction pour diviser

function division(nombreA, nombreB) {

    if (nombreB==0) {
        
        throw new Error("Vous ne pouvez pas diviser par 0")
    }
    
    return nombreA / nombreB
}

let restart=false
do{

do {
    
    var operations=Number(prompt("Quelle opération souhaitez-vous faire? \n\n 1 - Addition\n 2 - Multpilication\n 3 - Soustraction\n 4 - Division\n "))

} while (operations==0 || operations==null || operations>4);


do {
    
    var nombrePremier=Number(prompt("Rentrez votre premier nombre: "))
    var nombreDeuxieme=Number(prompt("Rentrez votre deuxième nombre: "))

} while (isNaN(nombrePremier && nombreDeuxieme) );


try{
switch (operations) {
   
    case 1:
        
    var resultat=addition(nombrePremier,nombreDeuxieme)
       break;


    case 2:
        
    var resultat=multiplication(nombrePremier,nombreDeuxieme)
       break;

    case 3:
        
    var resultat=soustraction(nombrePremier,nombreDeuxieme)
       break;


    case 4:
        
    var resultat=division(nombrePremier,nombreDeuxieme)
       break;

   default: 

        throw new Error("Une erreur est survenue")
}
alert("Votre résultat est égal à " + resultat)
}
catch(error){

    alert(error)
}
restart = confirm("Souhaitez-vous recommencer un calcul ?"); 
}
while(restart)
