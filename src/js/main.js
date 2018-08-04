window.validateEmail = (email) => {
    if(email.indexOf('@') < 0){
        return false;
    }
    const symbols = email.split('@');
    if(symbols.length != 2){ //Verifica que el correo SÓLO tenga 2 partes, lo que está antes del arroba y después del arroba 
        return false; //Si es distinto de 2, será false
    }
    if(email.length == ''){
        return false;
    }
    if(symbols[1].indexOf('.') < 0){
        return false;
    }
    const dotSymbol = symbols[1].split('.');
    if(dotSymbol.length != 2){ //Verifica que el correo SÓLO tenga 2 partes, lo que está antes del punto y después del punto
        return false;
    }
    if(dotSymbol[0].length < 1){ // verifica que el largo del email sea mayor a uno
        return false
    }
    if(dotSymbol[1].length < 1){
        return false
    }
    
    return true;
}; 

window.validatePassword = (password) => {
    if(password.length <= 8)
    return true;

}
/* //Registro
function registerWithFirebase(){
    const email = email.value;
    const password = password.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=>{
            console.log("Usuario creado con éxito");
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
} */
//Login
function loginWithFirebase(){
    const email = email.value;
    const password = password.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            console.log("Usuario inició sesión con éxito");
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}


