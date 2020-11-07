function validar(form) {
    let usu = form.usuario.value;
    let pass = form.clave.value; 
    if (usu == " " || usu.indexOf('@',0) == -1) 
    {
        alert("El usuario no puede estar vacio y debe contener @ zaraza");
        return false;
    } else {
        if (pass.length == 0){
            document.getElementById ("clave").focus();   
            alert ("Debe ingresar la clave");
        }
        else {
            console.log ("Usuario: "+ usu + " /  Password: "+ pass+" /  Largo Password: "+ pass.length);
        }
    }
}

