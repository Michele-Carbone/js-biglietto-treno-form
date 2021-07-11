/*Quali campi inserire nel form:
Una casella di testo per il form del passeggero
Una casella numerica per i km
Una tendina per selezionare la fascia d'età (Maggiorenne, Minorenne, Over65)
NON E' NECESSARIA ALCUNA VALIDAZIONE
Come calcolare  il prezzo:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
Cosa stampare sul biglietto:
Nome passeggero
Codice treno (inseriamo una stringa a caso, per ora)
Numero carrozza (randomizziamo una carrozza da 1 a 12)
Prezzo (stampato con due decimali)
Tariffa applicata all'utente (Tariffa minori, Tariffa ordinaria, Tariffa Over65)
Per la parte grafica
Facciamola solo se tutto il resto della logica è funzionante, vi allego uno screen dell'esercizio fatto in classe senza stile e una da prendere come esempio per la parte visiva. Sentitevi liberi di personalizzare ulteriormente la grafica se vi va.
Bonus
Nascondiamo la sezione del biglietto se non è ancora stato generato il biglietto stesso.
Aggiungiamo una funzione che ci permetta di resettare i campi del form ai valori originali.*/


/*
1 - Chiedere all'utente i chilometri che vuole percorrere
2 - Chiedere all'utente quanti anni ha
3 - Il costo del biglietto è definito in base ai km (0.21 € al km)
4 - Verificare l'età se è minore di 18 anni (sconto 20%)
5 - Verificare l'età se è maggiore di 65 anni (sconto 40%)
6 - Verificare l'età se è compresa tra 18 e 65 (nessuno sconto)
7 - Stampare il costo del biglietto con un massino di due cifre decimali
*/

/*
1- raccogliere i dati inseriti dall utente (Nome Cognome, km da percorrere, fascia d'età)
2- calcolo il prezzo del biglietto in base ai km
3- Inserire gli opportuni controlli sui dati che l'utente dovra inserire
4- applicare lo sconto sul biglietto in base alla età dell'utente
5- Calcolare il prezzo finale dell'utente ed arrotondarlo fino a due decimali dopo la virgola
6- stampare tutti i dati raccolti
*/


//section FORM elementi da stampare in HTML
var userName = document.getElementById('name');
var userKms = document.getElementById('kms');
var userAge = document.getElementById('age');
var button = document.getElementById('generate-ticket');


//section TICKET elementi da stampare in HTML
var passengerNameElement = document.getElementById('passenger-name');
var discountElement = document.getElementById('discount');
var carElement = document.getElementById('car');
var trainCodeElement = document.getElementById('train-code');
var priceElement = document.getElementById('price');
var ticketSection = document.getElementById('hidden');
var resetButton = document.getElementById('reset');

//un evento al click del mio bottone

button.addEventListener('click', function () {


    var nameValue = userName.value;
    var kmsValue = userKms.value;
    var ageValue = userAge.value;

    //calcolo biglietto in base ai kms
    var price = 0.21 * kmsValue;
    var discountDisplay = 'Tariffa ordinaria';
    //verifico l età
    if (ageValue === 'min') {
        //sconto del 20%;
        price = price * 0.8;
        discountDisplay = 'Tariffa minori';
    }
    //verifico l età: è over 65?
    if (ageValue === 'over65') {
        //sconto del 40%;
        price = price * 0.6;

        discountDisplay = 'Tariffa Over 65';
    }




    //prezzo da stampare
    price = 'Euro ' + price.toFixed(2);

    //random il numero car
    var carNumber = Math.floor(Math.random() * 12) + 1;


    //CODICE DEL TRENO
    var trainCodeNumber = Math.floor(Math.random() * (4 - 2)) + 2;



    //Stampiamo gli elementi in pagina
    passengerNameElement.innerHTML = nameValue;
    discountElement.innerHTML = discountDisplay;
    carElement.innerHTML = carNumber;
    trainCodeElement.innerHTML = trainCodeNumber;
    priceElement.innerHTML = price;


});



//resettiamo i dati inseriti
resetButton.addEventListener('click', function () {


    //svuotiamo i dati raccolti per il biglietto
    passengerNameElement.innerHTML = '';
    discountElement.innerHTML = '';
    carElement.innerHTML = '';
    trainCodeElement.innerHTML = '';
    priceElement.innerHTML = '';

});



