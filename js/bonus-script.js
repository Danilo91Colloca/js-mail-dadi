//..............INSERIMENTO DATI E WELCOME MSG..............

//il prompt richiede la mail

var insMail = prompt('inserisci la tua mail: suggerimento(tuonome@boolean.com)');

// array contenente le mail valide

var mailValide = ['enrico@boolean.com', 'alfredo@boolean.com', 'ottavio@boolean.com'];

// cerco nell'array la corrispondenza tra le mail

var mailChecked = false;

for (var i = 0; i < mailValide.length; i++) {
  if (insMail === mailValide[i]) {
    mailChecked = true;
  }

}

if (!mailChecked) { //se mailChecked è diverso dalla lista
  alert('Errore la mail inserita non è valida!')
  //se la mail non corrisponde appare "error msg" e il gioco non funziona
  document.getElementById('button').innerHTML = 'game over'

}else {
  /* se la mail corrisponde, il msg di benvenuto è personalizzato con il nome utente e il bottone nell'HTML è abilitato */

  if (insMail === mailValide[0]) {
    document.getElementById('welcome-msg').innerHTML = 'Ciao Enrico iniziamo a giocare!'
  }
  if (insMail === mailValide[1]) {
    document.getElementById('welcome-msg').innerHTML = 'Ciao Alfredo iniziamo a giocare!'
  }if (insMail === mailValide[2]) {
    document.getElementById('welcome-msg').innerHTML = 'Ciao Ottavio iniziamo a giocare!'
  }

  //.......................GAME SECTION................
  //abilito la funzione onclick
  function myFunction() {
    //generatore di numeri randomici tra compresi tra 1 e 6

    var dadoUser = Math.floor((Math.random() * 6) + 1);
    document.getElementById('user').innerText = 'user: ' + dadoUser;

    var dadoPc = Math.floor((Math.random() * 6) + 1);
    document.getElementById('pc').innerText = 'pc: ' + dadoPc;


    //variabili dei risultati possibili

    var winner = dadoUser > dadoPc;
    var equal = dadoUser === dadoPc;
    var loose = dadoUser < dadoPc;

    //messaggi all'utente in base ai risultati precedenti+

    if (winner) {
      document.getElementById('result').innerHTML = 'HAI VINTO!!!'
    }
    if (equal) {
      document.getElementById('result').innerHTML = 'SIAMO PARI!!!'
    }
    if (loose) {
      document.getElementById('result').innerHTML = 'HAI PERSO!!!'
    }
  }
}
