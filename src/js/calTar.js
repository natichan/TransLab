getBipSaldoForBalance = () => {
    let numTarjeta = saldoBip.value
    url=`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numTarjeta}` ;
    fetch(url)
        .then(response => response.json()
        ).then(data => {
            calculateBalance(data);
            //console.log(data);            
   });
};

calculateBalance = (data) => {
    const inputCardBip = rates.value  // select con valores de tarifa
    console.log(inputCardBip);    
    let dataBip = Object.values(data)
    let resultTarjeta = dataBip[2]; // saldo bip
    const balanceBipCardWithoutSymbols = Number(resultTarjeta.replace(/[$,.]+/g, "")); // lo convierte en número y le quita el signo peso más el número
    const balanceMinusSelectOptionRate = balanceBipCardWithoutSymbols - inputCardBip;
    console.log(balanceMinusSelectOptionRate);
    //document.getElementById("balance").innerHTML = "";
    balance.innerHTML = 
    /* `<h5 class='teal grey darken-3 white-text center-align'>Costo Pasaje</h5>
        <p class='teal amber darken-2 white-text center-align'>$${inputCardBip}</p>` */
    `<h6 class='teal grey darken-3 white-text center-align'>SALDO TOTAL</h6>
        <p class='teal amber darken-2 white-text center-align'>$${balanceMinusSelectOptionRate}</p>`
}
