//Registro
function registerWithFirebase(){
    const email = emailRegis.value;
    const password = passwordRegis.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=>{
            console.log("Usuario creado con éxito");
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}