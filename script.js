// FAZ COM QUE O MOUSE MUDE PARA POINTER AO PASSAR EM CIMA DO BOTÃO

const botao = document.querySelector("#switch button")

botao.addEventListener("mouseover", function () {
  botao.style.cursor = "pointer"
})

botao.addEventListener("mouseout", function () {
  botao.style.cursor = "default"
})

document.getElementsByName(botao).style.cursor = pointer

//ABAIXO ESTÃO OS PASSOS QUE DÃO FUNÇÃO AO BOTÃO.

function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")}

  // As funções acima podem ser resumidas em:

  html.classList.toggle("light")
}
