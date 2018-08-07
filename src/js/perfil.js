let currentUser= '';

window.onload = ()=>{
    firebase.auth().onAuthStateChanged((user)=>{ // callback a firebase
        if(user){
        // Parameters
        currentUser = user.uid;
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
        let numberCard = cardBip.value;
        firebase.database().ref(`users/` + currentUser).child(`bip`).push(numberCard).key;
    };                
    
    const ref = firebase.database().ref(`users/` + currentUser)
    ref.once('value').then((data) => {
            //console.log(Object.values(data.val()));
            let savedData = Object.values(data.val());
            let values = Object.values(savedData[0].bip);
            //console.log(savedData[0].bip);
            values.forEach(element => {
                bipSaved.innerHTML = 
            `<h6 class='teal white darkgrey-text'>${element}</h6>`+ bipSaved.innerHTML; 
                console.log(element);                
            });
            //console.log(values);     
    }); 


