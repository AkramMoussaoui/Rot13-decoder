function rot13(str) {
  let num = 0;
  let final = ""
  for (let i=0; i<str.length; i++)
  {
      num = str.charCodeAt(i)
      if(num > 64 && num < 91 )
      {
          num -= 13;
          if(num < 65)
            num += 26
      }
      final += String.fromCharCode(num)
  }
  document.getElementById("resultat").innerHTML = final;
}

let entrer = document.getElementById("entrer")
let chiffre = document.getElementById("chiffre")

entrer.addEventListener("click",() =>{
  rot13(chiffre.value)
  chiffre.value = ""
})
