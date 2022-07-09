(function( document , window ){ 
    'use strict'; 

const  $email = document.querySelector('[data-js="email"]');
const  $password = document.querySelector('[data-js="senha"]'); 
const  $button = document.querySelector('[data-js="button-logIn"]'); 
const  $contact = document.querySelector('[data-js="contact"]'); 
const  $button_contact = document.querySelector('[data-js="button-contact"]'); 
const  $inputEstate = document.querySelector('[data-js="ddd_state"]');  
const $button_finsh = document.querySelector('[data-js="button-finsh"]'); 



$button.addEventListener( 'click' , Button_Of_Send , false );
$button_contact.addEventListener('click' , clickNumber, false );
$button_finsh.addEventListener('click' ,  nexPage  , false ); 



function  Button_Of_Send () { 
  isSubmit(); // testar se esta tudo preenchido 
  // clearInputs();; // limpar os inputs 
  // isSubmitNextPage(); // testar para ir para a proxima page
}

function isSubmit() {
  let email = $email.value; 
  let password = $password.value; 

 if(  email === '' || password === '' )
   return window.alert('Preenchar todas as informaçoes'); 

  return clearInputs();    
}

function clearInputs() { 
  $email.value = '';  
  $password.value = ''; 
  console.log(':) goood job!!!'); 
}


//  essa é a 2  interaçaõ, para ve se o usuario preencheu todas as informaçoes... 


function isVeryficInputNumber() {  // verificar se os inputs estam preenchidos... 
  let DDD =  $inputEstate.value; 
  let contatc = $contact.value; 
DDD === '' || contatc === '' ?  window.alert('Preenchar todas as informaçoes'): console.log('deu certinho os dados...'); 
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


 function nexPage () { 
  let email = $email.value; 
  let password = $password.value; 
  let contact = $contact.value;
  let DDD =  $inputEstate.value;

  if( email === '' ||  password  ===  '' || contact === '' || DDD === '' ){
    window.alert('Informaçoes precisam ser preencidas'); 
  } 
  else { twoModule() + console.log('proxima vase');     
  }    
 }


 function twoModule() { 
   var $divCenter = document.querySelector('[data-js="center"]'); 
   var $divContact = document.querySelector('[data-js="contact-center"]');  
   
    $divCenter.innerHTML = '<header data-js="header-js"><h1>Formulario de Banco de dados</h1> <h2>País</h2><input type="text" placeholder="Qual seu país" data-js="input_coutry"><h2>Estado</h2><input type="text" data-js="input_state" placeholder="Qual seu estado"><h2>Cidade</h2><input type="text" data-js="input_city" placeholder="Qual sua cidade"></header>';
    $divContact.innerHTML = '<header data-js="header-js"><h2>Bairro</h2><input type="text" placeholder="Qual seu Bairro" data-js="input_Bairro"><h2>CEP</h2><input type="text" data-js="input_cep" placeholder="Qual o numero do CEP"><h2>Numero da casa</h2><input type="text" data-js="input_number_home" placeholder="Qual o numero da casa"><button data-js="button-logIn">Cadastrar</button></header>'; 
}
})( document , window);






div_contantc = { /*
 
<header data-js="header-js">
<h2>Bairro</h2><input type="text" placeholder="Qual seu Bairro" data-js="input_Bairro">
<h2>CEP</h2><input type="text" data-js="input_cep" placeholder="Qual o numero do CEP">
<h2>Numero da casa</h2><input type="text" data-js="input_number_home" placeholder="Qual o numero da casa">
</header>';
 
*/ }




 div_center = {/*     <h1 data-js="h1-header">Cadastro de Login</h1>
            <h2 data-js="h2-email"> Email</h2>
            <input type="email" placeholder="coloque seu Email" data-js="email">
            <h2 data-js="h2-password">Senha</h2>
            <input type="password" data-js="senha" placeholder="coloque sua senha">
            <button data-js="button-logIn">log in</button>*/ 
          }


