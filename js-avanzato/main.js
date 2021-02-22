const scontoUnder = 20;
const scontoOver = 40;
const costoKm = 0.21;

var kmUtente;
var anniUtente;
var costoBiglietto; 
var scontoApplicato;

kmUtente = prompt("Quanti km vuole percorrere? ");




scontoApplicato = "0%";

while (isNaN(kmUtente)) {
    alert("La preghiamo d'inserire un valore numerico valido");
    kmUtente = prompt("Quanti km vuole percorrere? ");
}
costoBiglietto = kmUtente * costoKm;

anniUtente = prompt("Inserisca la sua età per calcolare un eventuale sconto: ");

while (isNaN(anniUtente) || (anniUtente > 120)) {
    alert("La preghiamo d'inserire un valore numerico valido");
    anniUtente = prompt("Inserisca la sua età per calcolare un eventuale sconto: ");
}

if (anniUtente < 18) {
    scontoApplicato = scontoUnder + "%";
    costoBiglietto -= (costoBiglietto * scontoUnder / 100);
} 
else if (anniUtente > 65) {
    scontoApplicato = scontoOver + "%";
    costoBiglietto -= (costoBiglietto * scontoOver / 100);
}

costoBiglietto = Math.round(costoBiglietto * 100) / 100;

document.getElementById('my_id').innerHTML = 
"Le è stato applicato uno sconto del " + scontoApplicato + ", quindi il costo del suo biglietto è: " + costoBiglietto + "€";


