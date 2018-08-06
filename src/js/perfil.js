window.onload = ()=>{
    firebase.auth().onAuthStateChanged((user)=>{ // callback a firebase
        if(user){
        emailUser.innerHTML = 
        `<h6 class='teal white darkgrey-text'>${user.email}</h6>`; 
        //console.log('User > '+JSON.stringify(user));
        } else {
            console.log('Usuario no logueado')
        }
    });
};
