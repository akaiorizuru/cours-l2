const anagrammes = (stringA, stringB) => {
   //replace permet de garder juste les élément qui suive
  stringA=stringA.replace(/[^a-zA-Z]/g,'');
  stringB=stringB.replace(/[^a-zA-Z]/g,'');
  
  stringA=stringA.toUpperCase();
  stringB=stringB.toUpperCase();

  let tabA = stringA.split("");
  let tabB =stringB.split("");

  //Mettre dans l'ordre alphabétique
  tabA = tabA.sort();
  tabB = tabB.sort();

  let x = true;

  tabA.forEach((el, indice) => {
    if(tabA[indice]!=tabB[indice]){
      //console.log(tabA[indice],tabB[indice])
      x = false;
    }
  })
  return x;
  /**
   * stringA est égale à stringB si et seulement s'ils partagent les mêmes
   * caractères alphabétiques dans la même quantité.
   * La case n'est pas pris en compte
   *
   * Exemples :
   *
   * anagrams('rail safety', 'fairy tales') === true
   * anagrams('RAIL! SAFETY!', 'fairy tales') === true
   * anagrams('Hi there', 'Bye there') === false
   */

};


class Stack {
  constructor(){
    this.tab = [];
  }


  push(val) {
    this.tab[this.tab.length] = val;
  }

  pop(){
    let a = this.tab[this.tab.length-1];
    this.tab.splice(this.tab.length-1, 1);
    return a;
  }

  peek(){
    return this.tab[0];
  }
/**
 * Créer une structure d'empilement. La structure doit être
 * une classe contenant les méthodes :
 *  - `push`: pour ajouter un élément au bout de l'empilement,
 *  - `pop` pour retirer le dernier élément et le retourner;
 *  - et `peek` pour récupérer le premeier élément.
 *
 * Exemples :
 *
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.push(3);
 * s.pop(); // returns 3
 * s.pop(); // returns 2
 * s.peek(); // returns 1
 */
};


const fizzBuzz = (n) => {
  let i =1;
  for(i=1; i<=n; i++){
    if(i%3==0 && i%5==0){
      console.log( 'fizzbuzz')
    }else{
      if(i%3==0){
        console.log('fizz');
      }else{
        if(i%5==0 ){
          console.log('buzz');
        }else{
          console.log(i);
        }
      }
    }
    
    
  }
  
/**
 * Affiche les nombres de 1 à n, en remplaçant les multiples de 3 par fizz et 
 * les multiples de 5 par buzz
 *
 * Exemple :
 *
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

};



const spirale = (n) => {
  let result = new Array(n).fill().map(() => new Array(n).fill('')); 
  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startCol <= endCol && startRow <= endRow) {
      for (let i = startCol; i <= endCol; i++) {
          result[startRow][i] = counter;
          counter++;
      }
      startRow++;
      for (let j = startRow; j <= endRow; j++) {
          result[j][endCol] = counter;
          counter++;
      }

      endCol--;

      for (let i = endCol; i >= startCol; i--) {
          result[endRow][i] = counter;
          counter++;
      }

      endRow--;
      for (let i = endRow; i >= startRow; i--) {
          result[i][startCol] = counter;
          counter++;
      }

      startCol++;

  }

  return result;

  
/**
 * Retourne une matrice spirale de taille n x n.
 *
 * Exemples :
 *
 * matrix(2) = [[1, 2],
 *              [4, 3]]
 *
 * matrix(3) = [[1, 2, 3],
 *              [8, 9, 4],
 *              [7, 6, 5]]
 *
 * matrix(4) = [[1,   2,  3, 4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10,  9,  8, 7]]
 */

};


const puissance4 = (grid) => {
  let count = 0;
  let x = false;
///////////////En ligne////////////////////////////
  grid.forEach((el, i) => {
    grid[i].forEach((el,j) =>{
      while(j>0 ){
        if(grid[i][j]==grid[i][j-1]){
          count = count+1;
          // return vrai si count == 4
          //Il faut reset le count après chaque ligne
          if(count==4){
            x = true;
          }
          if(j==grid.length){
            count=0;
          }
        }else{
          count=0;
        }
      }
    })
  })
  
/////////////En colonne///////////////////
  //on considère ici que chaque ligne possède le même nombre de colomne
  for(let k=0;k<grid[0].length;k++){ // grid[0].length désigne le nombre de colonne disponible
    //grid.length désign le nombre de ligne 
    for(let l=0;l<grid.length-1;l++){
      if(grid[l][k]==grid[l+1][k]){
        count=count+1;
        if(count==4){
          x =true;
        }
        //Il faut reset le count après chaque colonne
        if(l==grid.length){//A changer 
            count=0;
          }
      }else{
        count=0;
      }
    }
  }
  
//////////Diagonal1//////////////////
   if(grid[l][k]==grid[l+1][k+1]){
        count=count+1;
        //Il faut reset le count
      }
/////////////////////Diagonal 2//////////////////
   if(grid[l][k]==grid[l+1][k-1]){
        count=count+1;
        //Il faut reset le count 
      }

////////////Résultat////////////
  //return () => count==4;
  return x;
  
/**
 * Vérifie si un joueur a gagné au puissance 4,
 * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
 *
 * Exemples :
 *
 * puissance4(
 *  [[ 1, 0, 0, 0 ],
 *   [ 2, 1, 0, 0 ],
 *   [ 2, 1, 1, 2 ],
 *   [ 2, 1, 1, 2 ]]
 *   ) = 1
 * )
 *
 * puissance4(
 *  [[ 1, 1, 0, 0, 0 ],
 *   [ 2, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 *
 * puissance4(
 *  [[ 1, 2, 0, 0, 0 ],
 *   [ 1, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 */
}

module.exports = {
  fizzBuzz,
  puissance4,
  spirale,
  anagrammes,
  Stack
}
