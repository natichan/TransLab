let currentUser= ''; // variable global que contendra la id del usuario

window.onload = ()=>{
    firebase.auth().onAuthStateChanged((user)=>{ // callback a firebase
        if(user){
        currentUser = user.uid; // guardo la id del usuario
        emailUserPrint.innerHTML = // imprime el email de la persona logueada en el perfil
        `<h6 class='teal white darkgrey-text'>${user.email}</h6>`; 
        //console.log('User > '+JSON.stringify(user));
        } else {
            console.log('Usuario no logueado')
        }
     });   
};
    // guardando tarjeta bip
    saveNumberCardBip = () => {
        let numberCard = cardBip.value; // input para tomar el valor de las tarjetas que ingrese el usuario
        firebase.database().ref(`users/` + currentUser).child(`bip`).push(numberCard).key; // guardo la nueva llave de bip en los usuarios ya guardados en database
    };                
    
    // llamo a los datos de firebase para mostrarlos en pantalla
    const ref = firebase.database().ref(`users/` + currentUser) // importante llamar al uid del usuario
    ref.once('value').then((data) => {
            //console.log(Object.values(data.val()));
            let savedData = Object.values(data.val()); // me muestra los valores de la data, .val() es para obtener los valores
            let values = Object.values(savedData[0].bip);
            //console.log(savedData[0].bip);
            values.forEach(element => {
                bipSaved.innerHTML = 
                `<h6 class='teal white darkgrey-text'>${element}</h6>`+ bipSaved.innerHTML; 
                //console.log(element);                
            });
            //console.log(values);     
    }); 


