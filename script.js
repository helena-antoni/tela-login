const coisa = document.querySelector('#senha')

function togglePassWord(){
  document.querySelectorAll('.eye')
  .forEach ( eye => {
    eye.classList.toggle('hide')
  })
   const type =  coisa.getAttribute('type') == 'password' ? 'text': 'password'
  
   coisa.setAttribute("type", type)
}
