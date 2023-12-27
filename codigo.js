let usuario = document.getElementById('usuario').style.display = 'none'
// document.getElementById('enviarEmail').style.display = 'none';
    

function validarEmail(){
    
    let email = document.getElementById("gmail");

        email.style.borderColor = '#ce1124';
        email.style.opacity = '1';
        email.style.backgroundColor = 'rgba(206, 17, 36, 0.1)';
    let validacion = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if(validacion.test(email.value)) {
        console.log("Bienvenido")
        } else {
        let error = document.getElementById('invalido')
        error.style.display = 'block'
        return false;

    }
}


const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('enviarEmail').style.display = 'none';
    document.getElementById('usuario').style.display = 'block';
 
    let correo = document.getElementById('gmail').value;
    document.getElementById('correoMostrado').textContent = correo;

})



