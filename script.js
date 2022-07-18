(function( document , window ){ 
    'use strict'; 

const  $email = document.querySelector('[data-js="email"]');
const  $password = document.querySelector('[data-js="senha"]'); 
const  $contact = document.querySelector('[data-js="contact"]'); 
const  $button_login_finish = document.querySelector('[data-js="button-login"]'); 


$button_login_finish.addEventListener('click' ,  click_button  , false ); 



//  essa é a 2  interaçaõ, para ve se o usuario preencheu todas as informaçoes... 


function clearButtonLogin () { 
  const $button_login =  document.querySelector('[data-js="header-button"]');
  $button_login.innerHTML = ''; 
  $button_login.insertAdjacentHTML('afterbegin', '<h2> </h2>'); 
  $button_login.insertAdjacentHTML('beforeend', '<a href="segondPage.html"><button class="button_new">NEXT</button></a>'); 
}


function click_button(event) {
  event.preventDefault();
 if( $email.value === '' || $password.value === '' || $contact.value === ''){
  return window.alert('preencha todas as informaçoes');  
} 
  clearInputs();
  clearButtonLogin(); 
} 

function clearInputs () { 
  $email.value = ''; 
  $password.value = ''; 
  $contact.value = ''
}

})( document , window);

