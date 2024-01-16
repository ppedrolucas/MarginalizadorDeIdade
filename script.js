function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fulano = document.getElementById("txtano")
  var result = document.getElementById("result")

  if (fulano.value.length == 0 || fulano.value > ano) {
    alert("[ERRO] Digite o ano novamente")
  } else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fulano.value)
    var genero = ""
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    if (fsex[0].checked) {
      //Se o fsex na posição 0 estiver marcado, será homem ou mulher
      genero = "Homem"
      if (idade >= 0 && idade < 13) {
        //Criança
        img.setAttribute("src", "img/mlk.jpg")
      } else if (idade < 22) {
        //Jovem
        img.setAttribute("src", "img/boy-negao.jpg")
      } else if (idade < 55) {
        //Adulto
        img.setAttribute("src", "img/sigma.jpg")
      } else {
        //Idoso
        img.setAttribute("src", "img/idoso-men.jpg")
      }
    } else if (fsex[1].checked) {
      genero = "Mulher"
      if (idade >= 0 && idade < 13) {
        //Criança
        img.setAttribute("src", "img/kid-femea.jpg")
      } else if (idade < 22) {
        //Jovem
        img.setAttribute("src", "img/girljpg.jpg")
      } else if (idade < 55) {
        //Adulto
        img.setAttribute("src", "img/femea.jpg")
      } else {
        //Idoso
        img.setAttribute("src", "img/idoso-woman.jpg")
      }
    }
    result.style.textAlign = "center"
    result.innerHTML = `Detectamos a presença de ${genero} com ${idade} anos de idade.`
    result.appendChild(img)
  }
}
