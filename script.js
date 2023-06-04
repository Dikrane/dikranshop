// Script for navigation bar
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');



function calculerPrix() {
    var quantite = document.getElementById("quantite").value;
    var prixUnitaire = 199;
    var total = quantite * prixUnitaire;
    if (quantite == 2) {
      total = total - (total * 0.1); // Réduction de 10% pour 2 quantités
    }
    document.getElementById("total").innerHTML = "total: $" + total;
  }

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
    if (close){
        close.addEventListener('click',()=>{
            nav.classList.remove('active');
        })
}


