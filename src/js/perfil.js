window.onload = ()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        emailUser.innerHTML = 
        `<h6 class='teal white darkgrey-text'>${user.email}</h6>`; 
        //console.log("User > "+JSON.stringify(user));
    });
};