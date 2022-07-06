(function( document , window ){ 
    'use strict'

const  $email = document.querySelector('[data-js="email"]');
const  $password = document.querySelector('[data-js="senha"]'); 
const  $button = document.querySelector('[data-js="button-logIn"]'); 
const  $contact = document.querySelector('[data-js="contact"]'); 
const  $button_contact = document.querySelector('[data-js="button-contact"]'); 
const  $inputEstate = document.querySelector('[data-js="ddd_state"]');  



$button.addEventListener( 'click' , submitButton , false );
$button_contact.addEventListener('click' , sendNumberContact, false );


function sendNumberContact() { 
  let state = $inputEstate.value ;  
  let DDD ;   
 switch (state) {
  case 'AM':
   DDD = '(92)'; 
   break;
  case 'PA' :
   DDD = '(96)'; 
   break;
  case 'AP': 
   DDD = '(91)';  
   break;  
   case  undefined:
  default:
    window.alert('Nao Encotramos Seu DDD'); 
    break;
 }
 $contact.value =  DDD + $contact.value;  
  
  DDD  ===  '(92)'? window.alert('entao voce é um manaurara... :) '): ''; 
}   

function submitButton () { 
  isSubmit(); 
  clearInputs();
}


function isSubmit() {
  $email.value === '' || $password.value === '' ||  $contact === '' ?  window.alert('Preenchar todas as informaçoes') : 
  window.alert(`Seu dados... Senha: (${$password.value}) email: ${$email.value} contact ${ $contact.value}`);
}


function clearInputs () { 
  $email.value = '';  
  $password.value = ''; 
}


})( document , window);
