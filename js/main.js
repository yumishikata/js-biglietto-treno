const scontoUnder = 20;
const scontoOver = 40;
const costoKm = 0.21;

var kmUtente;
var anniUtente;
var costoBiglietto; 
var scontoApplicato;

kmUtente = prompt("Quanti km vuole percorrere? ");

anniUtente = prompt("Inserisca la sua età per calcolare un eventuale sconto: ");

costoBiglietto = kmUtente * costoKm;
scontoApplicato = "0%";

if (isNaN(anniUtente)) {
    alert("La preghiamo d'inserire un valore numerico.");
    
}

else {

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

}
