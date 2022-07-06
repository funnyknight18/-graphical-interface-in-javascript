(function( document , window ){ 
    'use strict'

const  $email = document.querySelector('[data-js="email"]');
const  $password = document.querySelector('[data-js="senha"]'); 
const  $button = document.querySelector('[data-js="button-logIn"]'); 
const  $contact = document.querySelector('[data-js="contact"]'); 
const  $button_contact = document.querySelector('[data-js="button-contact"]'); 
const  $inputEstate = document.querySelector('[data-js="ddd_state"]');  



$button.addEventListener( 'click' , Button_Of_Send , false );
$button_contact.addEventListener('click' , sendNumberContact, false );



function aceptUser() { 
   window.alert('Bem Vindo!');
}

aceptUser(); 


function isSubmit() {
  let email = $email.value; 
  let password = $password.value; 
  let contatc = $contact.value; 

 if(  email === '' || password === '' ||  contatc === ''){
   window.alert('Preenchar todas as informaçoes'); }
 else{ window.alert(`Seu dados... Senha: (${$password.value}) email: ${$email.value} contact ${ $contact.value}`);
 }     
}


function clearInputs () { 
  $email.value = '';  
  $password.value = ''; 
  $contact.value = ''; 
}

function  Button_Of_Send () { 
  isSubmit(); // testar se esta tudo preenchido 
  clearInputs(); // limpar logo apos o inputs 
}

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
 $contact.value =  DDD + ' ' +  $contact.value;  
  
 if( DDD === '(92)')
    window.alert('entao voce é um manaurara... :)');  

    isnumberTrue();  
}   

function isnumberTrue() { 
  var contato =  $contact.value; 

  if(contato.match(/\d+/g)){ 
    console.log('erro');
  } else { 
    console.log('great test'); 
  }   
}


function submitButton () { 
  isSubmit(); 
  clearInputs();
}


})( document , window);
