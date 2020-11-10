var requete = new XMLHttpRequest();


let url = new URL(window.location);

let params = url.searchParams;

let idProduct = params.get('id');

requete.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

        let response = JSON.parse(this.responseText);
        



        displayProducts(response);
        
        displayMiniBasket();

        eventPanier();
    }
}
   if(idProduct != null){            
    requete.open("GET", "http://localhost:3000/api/cameras/" + idProduct);
   }
   else {
    requete.open("GET", "http://localhost:3000/api/cameras/");
   }


requete.send();