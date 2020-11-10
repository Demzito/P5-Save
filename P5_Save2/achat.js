var requete = new XMLHttpRequest();


let url = new URL(window.location);




let firstname = url.searchParams.get("firstname");
let lastname = url.searchParams.get("lastname");
let adresse = url.searchParams.get("adresse");
let city = url.searchParams.get("city");
let email = url.searchParams.get("email");
 


requete.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

        let response = JSON.parse(this.responseText);
        

        displayAchats(firstname, lastname, adresse, city, email);
        console.log("params Url", firstname, lastname, adresse, city, email);

    }
}

requete.open("GET", "http://localhost:3000/api/cameras/");
requete.send();