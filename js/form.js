function finalizarContato(event){
  event.preventDefault()
  let nome=document.querySelector("#nome")
  console.log(nome.value)
  localStorage.setItem("nome",nome.value)
  window.location.replace("agradecimento.html")
}

const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.cabecalho__navegacao')

botaoMenu.addEventListener('click', ()=>{ 
  menu.classList.toggle('cabecalho__navegacao--ativo')
})