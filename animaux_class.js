function Animal (nom,couleur, espece, nbpattes, bVole) {

 var nom1  = nom;
 var couleur1 = couleur;
 var espece1 = espece;
 var nbpattes1 = nbpattes;
 var bVole1= bVole;


    this.setNom = function(nom) {
        if (!nom) throw new Error("ce n'est pas un animal");
        if (nom.length < 2) throw new Error("Ce n'est pas un animal");
        nom = nom;
    };

this.setNom = function(couleur) {
        if (!couleur) throw new Error("mettez lui de la couleur!");
        if (couleur.length < 2) throw new Error("mettez lui de la couleur!");
        couleur = couleur;
    };










    this.toString = function() {
    return nom + " " + couleur + " "  + espece + " " + nbpattes + " " + bVole;
    }
}














