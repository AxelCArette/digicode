// les variables qu(on déclare 

let numero = document.querySelectorAll('.nombre');
let keybord = document.querySelector('.clavier');
let textesurecran = document.querySelector('p');
let codesecret= "1234"
let chiffres = [];
let nombreAleatoire;

// la fonction nous permet de créer et générer des chiffres aléatoire jusque 9
let temp=0
function rand() {
  for  (let x=1; chiffres.length <9;x++) {
        temp = Math.floor(Math.random() * (10 - 1) + 1);
      if (chiffres.includes(temp) ===false) 
      {
        chiffres.push(temp);
        }
  }

}

// Utilisation de la variable 
rand()
for (let i=0;i<numero.length;i++){
  numero[i].innerHTML = chiffres[i];
    numero[i].addEventListener("click",function touche(){
      chiffres=[] 
      rand()
      textesurecran.innerHTML +=numero[i].innerHTML
      for (let index = 0; index < chiffres.length; index++) {
        numero[index].innerHTML = chiffres[index];
      }
      if (textesurecran.innerHTML === codesecret && textesurecran.innerHTML.length >=4 ) {
            textesurecran.innerHTML = "correct";
            textesurecran.style.backgroundColor ="green"
          } 
          else if(textesurecran.innerHTML != codesecret && textesurecran.innerHTML.length >=4 ){
          textesurecran.innerHTML = "incorrect";
          textesurecran.style.backgroundColor ="red"
          }
})
}