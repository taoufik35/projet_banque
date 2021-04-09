function blog(){
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        // Quand la réponse du serveur a été reçue
        let scardheader = document.getElementsByClassName("card-header");
        let cardtitle = document.getElementsByClassName("card-title");
        let scardtext = document.getElementsByClassName("card-text");
    
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            // Si la réponse est valide
            if(httpRequest.status === 200){
                let data = JSON.parse(httpRequest.responseText);
                 for(i=0; i < data.length; i++){
                    scardheader[i].innerText = data[i].id;
                    cardtitle[i].innerText = data[i].titre;
                    scardtext[i].innerText = data[i].contenu;
                }    
            } 
            // Si une erreur est survenue (exemple un fichier qui n'existe pas)
            else {
                scardheader.innerText = "Nous n'avons pas réussi à récupérer le contenu";
            }
        } 
        // Le serveur n'a pas encore répondu
        else {
            scardheader.innerText = "Requête en cours";
        }
    }

    httpRequest.open('GET','https://oc-jswebsrv.herokuapp.com/api/articles', true);
    httpRequest.send();
};
 
       