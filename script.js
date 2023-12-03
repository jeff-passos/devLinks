function toggleMode() {
  const html = document.documentElement

  /* Função com lógica completa*/
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  /*ATALHO USANDO FUNÇÃO INTERNA TOGGLE
  ESSA FUNÇÃO ADICIONA A CLASSE SE TIVER E TIRA SE NÃO TIVER DE FORMA AUTOMATICA*/
  html.classList.toggle("light")

  /*TROCANDO A IMAGEM DO MYKE*/

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "imagem de Myke Brito, usando oculos de sol")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "imagem de Myke Brito")
  }
}
