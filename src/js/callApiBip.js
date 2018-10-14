const btn = document.getElementById('buttonSaldo');
const container = document.getElementById('resultado');

btn.addEventListener('click', getBipSaldo = () => {
    let numTarjeta = document.getElementById('saldoBip').value
    url=`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numTarjeta}` ;
    fetch(url)
        .then(response => response.json()
        ).then(data => {
            printData(data);
            //console.log(data);            
   });
});

printData = (data) => {
    let dataBip = Object.values(data)
    // console.log(data);
    let resultTarjeta = dataBip[2];
    let fechaHora = dataBip[3];
    // console.log(fechaHora);
    dataBip[2] =document.getElementById('saldoBip').value;
    container.innerHTML= 
    `<h6 class='blueBip white-text'>SALDO TOTAL</h6>
        <p class='white black-text'>${resultTarjeta}</p>
        <p class='white black-text dateHour'>${fechaHora}</p>`
        
}