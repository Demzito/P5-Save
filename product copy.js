var requete = new XMLHttpRequest();

requete.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

        let response = JSON.parse(this.responseText);




        console.log("Statuts", response);
        


        function displayProducts() {
            let i = 0;

            let allArticles = "";
            let imgProduct = document.getElementById('imgProduct');


            let allName = "";
            let nameProduct = document.getElementById('nameProduct');

            console.log("i", i);
            let test = 6;
            alert(test);
            if(i == 0){


                let article ='<img class=img-responsive src="'+ response[i].imageUrl +'">' 
                    
                               
                allArticles += article;

                imgProduct.innerHTML = allArticles;








                let name = '<p>'+ response[i].name+'</p>' 
                    
                               
                allName += name;

                nameProduct.innerHTML = allName;
            }
            else {
                
            }
            
        }
        

        displayProducts();
        
        displayMiniBasket();

        // addToBasket(response);

    }
}
        
        
requete.open("GET", "http://localhost:3000/api/cameras");



requete.send();