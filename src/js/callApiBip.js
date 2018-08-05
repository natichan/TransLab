const btn = document.getElementById('buttonSaldo');
const container = document.getElementById('resultado');

btn.addEventListener('click', getBipSaldo = () => {
    let numTarjeta = document.getElementById('saldoBip').value
    url=`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numTarjeta}` ;
    fetch(url)
        .then(response => response.json()
        ).then(data => {
            console.log(data);            
        let dataBip = Object.values(data)
        let resultTarjeta = dataBip[2];
        dataBip[2] =document.getElementById('saldoBip').value;
        container.innerHTML= 
        `<h6 class='teal grey darken-3 white-text'>SALDO TOTAL</h6>
            <p class='teal amber darken-2 white-text'>${resultTarjeta}</p>`

    });
});
