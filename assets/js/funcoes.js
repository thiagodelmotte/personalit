
//Validar Formuário de Contato
function checkForm()
{	
	if(document.contactform.name.value == ''){
		alert('Favor preencher seu nome!');
		document.contactform.name.focus();
	}
	else if(!checkEmail(document.contactform.email.value)){
		alert('Favor preencher seu email corretamente!');
		document.contactform.email.focus();
	}
	else if(document.contactform.phone.value == ''){
		alert('Favor preencher seu telefone!');
		document.contactform.phone.focus();
	}
	else if(document.contactform.message.value == ''){
		alert('Favor preencher sua mensagem!');
		document.contactform.message.focus();
	}
	else{
		document.contactform.action = 'includes/sendEmail.asp';
		document.contactform.submit();
	}
}

//Validar Email
function checkEmail(mail)
{
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    if(typeof(mail) == "string"){
        if(er.test(mail)){ return true; }
    }else if(typeof(mail) == "object"){
        if(er.test(mail.value)){ 
                    return true; 
                }
    }else{
        return false;
        }
}
