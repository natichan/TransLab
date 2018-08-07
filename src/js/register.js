window.validateEmail = (email) => {
    if(email.indexOf('@') < 0 && email.length === ''){
        return false;
    }
    const symbols = email.split('@');
    if(symbols.length != 2 || symbols[1].indexOf('.') < 0){ //Verifica que el correo SÓLO tenga 2 partes, lo que está antes del arroba y después del arroba 
        return false; //Si es distinto de 2, será false
    }
    const dotSymbol = symbols[1].split('.');
    if(dotSymbol.length != 2 && dotSymbol[0].length < 1 && dotSymbol[1].length < 1){
        return false
    }
    return true;
};
//Registro
window.registerWithFirebase = () => {
    const email = emailRegis.value;
    const password = passwordRegis.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user)=> {
            firebase.database().ref(`users/${user.user.uid}`).set({
                emailUser: email,
            })
              console.log("Usuario creado con éxito");
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
    }
