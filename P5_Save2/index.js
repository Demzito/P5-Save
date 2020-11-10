let imgIndex = document.getElementById("imgIndex");


var requete = new XMLHttpRequest();

requete.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);

        
        
        
        displayMiniBasket();
        createArticle(response);
        eventPanier();
        
        
        
        
    } 
};
requete.open("GET", "http://localhost:3000/api/cameras");
requete.send();



