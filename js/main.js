// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
// When the user clicks the button, close the modal 
btn.onclick = function() {
  modal.style.display = "none";
}


/*-----------------------------------------------------------------ajax------------------------------------------------*/




function loadContent() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        let ajaxContent = document.getElementById("securMsg");
        // Quand la réponse du serveur a été reçue
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // Si la réponse est valide
            if (httpRequest.status === 200) {

                let data = httpRequest.responseText;
                ajaxContent.innerText = data;
            } 
            // Si une erreur est survenue (exemple un fichier qui n'existe pas)
            else {
                ajaxContent.innerText = "Nous n'avons pas réussi à récupérer le contenu";
            }
        } 
        // Le serveur n'a pas encore répondu
        else {
            ajaxContent.innerText = "Requête en cours";
        }
    }
    httpRequest.open('GET', 'security-rule.txt', true);
    httpRequest.send();
};
 
       