(function( document , window ){ 
    'use strict'

const  $email = document.querySelector('[data-js="email"]');
const  $password = document.querySelector('[data-js="senha"]'); 
const  $button = document.querySelector('[data-js="button-logIn"]'); 
const  $contact = document.querySelector('[data-js="contact"]'); 
const  $button_contact = document.querySelector('[data-js="button-contact"]'); 
const  $inputEstate = document.querySelector('[data-js="ddd_state"]');  
const $button_finsh = document.querySelector('[data-js="button-finsh"]'); 



$button.addEventListener( 'click' , Button_Of_Send , false );
$button_contact.addEventListener('click' , clickNumber, false );
$button_finsh.addEventListener('click' , twoModule , false ); 



function isSubmit() {
  let email = $email.value; 
  let password = $password.value; 

 if(  email === '' || password === '' )
   window.alert('Preenchar todas as informaçoes');    
   
  console.log('senha:' , password , 'email:', email  );   
}


function clearInputs () { 
  $email.value = '';  
  $password.value = ''; 
}

function  Button_Of_Send () { 
  isSubmit(); // testar se esta tudo preenchido 
  clearInputs(); // limpar logo apos o inputs 
}



//  essa é a 2  interaçaõ, para ve se o usuario preencheu todas as informaçoes... 




function isVeryficInputNumber() {  // verificar se os inputs estam preenchidos... 
  let DDD =  $inputEstate.value; 
  let contatc = $contact.value; 
DDD === '' || contatc === '' ?  window.alert('Preenchar todas as informaçoes'): 'contato prenechido'; 
}



function sendNumberContact() { // saber qual regiao do usuario... 
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
  case 'RJ': 
   DDD = '(21)'; 
   break;
  case 'AC' : 
   DDD = '(68)'
   case  undefined:
  default:
    window.alert('Nao Encotramos Seu DDD'); 
    break;
 }
 $contact.value =  DDD + ' ' +  $contact.value;  
}   


function clickNumber() { 
  sendNumberContact(); 
  isVeryficInputNumber();  
}



 function twoModule() { 
   var divCenter = document.querySelector('[data-js="center"]'); 
   var divContact = document.querySelector('[data-js="contact-center"]'); 
     
    divCenter.innerHTML += '<h1>Deu certo </h1>'; 
    divContact.innerHTML = '<h2>deu certo o outro modulo</h2>'
}


})( document , window);



