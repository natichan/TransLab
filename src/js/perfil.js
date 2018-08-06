currentUser= '';
currentUserEmail = '';

window.onload = ()=>{
    firebase.auth().onAuthStateChanged((user)=>{ // callback a firebase
        if(user){
        currentUser = user.uid; // obtengo id
        currentUserEmail = user.email; //obtengo email
        console.log(currentUser);
        console.log(currentUserEmail);

        emailUser.innerHTML = // imprime el email de la persona logueada en el perfil
        `<h6 class='teal white darkgrey-text'>${user.email}</h6>`; 
        //console.log('User > '+JSON.stringify(user));
        } else {
            console.log('Usuario no logueado')
        }
        // guardando tarjeta bip
        saveNumberCardBip = () => {
            let numberCard = cardBip.value;
            firebase.database().ref(`users/` + user.uid).child(`bip`).push(numberCard);
            // document.getElementById('saldoBip').value = "";    
        };
    });   
};

