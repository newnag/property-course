function open_acc_menu(){
  document.querySelector('.acc-menu').classList.toggle('active')
}

function open_menu(){
  document.querySelector('header nav').classList.toggle('active')
  document.querySelector('header .hamburger').classList.toggle('active')
}

window.onscroll = function(e){
  if(window.pageYOffset > 0){
    document.querySelector('header').classList.add('scroll')
  }
  else{
    document.querySelector('header').classList.remove('scroll')
  }
}

function icon_selectBank(that){
  let val = that.options[that.selectedIndex].getAttribute('data-icon')
  console.log(val)

  document.getElementById('iconIMG').src = val
}