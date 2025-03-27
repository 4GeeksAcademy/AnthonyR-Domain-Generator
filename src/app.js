import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our', 'your', 'my', 'their', 'his', 'her'];
  let adj = ['great', 'big', 'Adorable', 'Aggressive', 'Athletic', 'Casual'];
  let noun = ['jogger', 'racoon', 'cat', 'dog', 'rabbit', 'son'];
  let domain = ['.com', '.net', '.us', '.io'];
  let domainList = document.getElementById(domainlist);

  

  for (let i = 0; i < pronoun.length; i++ ) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          domainlist.innerHTML +=  `<li>${pronoun[i]}${adj[j]}${noun[k]}${domain[l]}</li>`
        }
      }
    }
  }




  
};
