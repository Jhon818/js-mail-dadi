// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var giocatore = Math.floor(Math.random() * 6);
var computer = Math.floor(Math.random() * 6);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (giocatore > computer){
    alert("Player win")
}

else {
    alert("Computer win")
}