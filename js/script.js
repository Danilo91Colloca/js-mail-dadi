
//il prompt richiede la mail
var insMail = prompt('inserisci la tua mail: suggerimento(tuonome@boolean.com)');

// array contenente le mail valide
var mailValide = ['enrico@boolean.com', 'alfredo@boolean.com', 'ottavio@boolean.com'];

// cerco nell'array la corrispondenza tra le mail
for (var i = 0; i < mailValide.length; i++) {
  if (insMail != mailValide[i]) {
    document.getElementById('errormsg').innerHTML = 'Errore la mail inserita non è valida!' //se la mail non corrisponde error msg

  }
  
  //se la mail corrisponde msg di benvenuto con nome utente personalizzato
  if (insMail === mailValide[0]) {
    document.getElementById('errormsg').innerHTML = 'Ciao Enrico!'
  }
  if (insMail === mailValide[1]) {
    document.getElementById('errormsg').innerHTML = 'Ciao Alfredo!'
  }if (insMail === mailValide[2]) {
    document.getElementById('errormsg').innerHTML = 'Ciao Ottavio!'
  }
}
