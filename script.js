function myFunction(){
    document.getElementById('demo').innerHTML = Number(100) ;

}



let eingabe = document.getElementById("vorname").value;
let startPos = 0,
    endPos = eingabe.length - 1,
    entfernt, restlaenge, ergebnis;

while (startPos <= endPos && eingabe[startPos] == ' ') {
   startPos++;
}
if (endPos > startPos) {
   while (eingabe[endPos] == ' ') {
      endPos--;
   }
}
restlaenge = endPos+1 - startPos;
entfernt = eingabe.length - restlaenge;
ergebnis = eingabe.substr(startPos, restlaenge);

// Setze den Antwortsatz zusammen
let antwort = "Ich habe aus '" + eingabe + "' " + entfernt +
              " unnötige Leerstellen entfernt, '" + ergebnis + "'";

// Schreibe die Antwort in das p Element mit der id="ergebnis"
document.getElementById("ergebnis").textContent = antwort;





