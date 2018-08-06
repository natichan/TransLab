window.onload = ()=>{
    firebase.auth().onAuthStateChanged((user)=>{ // callback a firebase
        if(user){
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
            // console.log('User > '+JSON.stringify(user.uid));
                        
           /*  bipSaved.innerHTML = // imprime el email de la persona logueada en el perfil
            `<h6 class='teal white darkgrey-text'>${user.uid}</h6>`; 
            // document.getElementById('saldoBip').value = "";     */
        };
    });   
};

const ref = database.ref('users')
    ref.on('value', gotData);

    function gotData(data){
        // console.log(data.val());
        let savedData = data.val();
        let keys = Object.keys(savedData);
        //console.log(keys);
        for (let i = 0; i < keys.length; i++){
            let k = keys[i];
            let first = savedData[k][0]
            console.log(first);
            
        }        
    }

