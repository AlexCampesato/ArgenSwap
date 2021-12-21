let ejecucion

class Moneda{
    constructor(id, nombre, precio){
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;
    }

    comision(){
        this.precio=this.precio * 1.05
    }

}


let moneda1 = new Moneda (1,"Bitcoin", 11470000)
let moneda2 = new Moneda (2,"Ethereum", 740000)
let moneda3 = new Moneda (3,"Usdt", 190)

moneda1.comision();
moneda2.comision();
moneda3.comision();


const arrayCripto = [moneda1, moneda2, moneda3]
    console.log(arrayCripto)

/*------------------------------------------Botones de comprar y vender----------------------------------------------------------------------*/

let divCriptos = document.getElementById("divCriptos")

arrayCripto.forEach(Moneda=> {
    divCriptos.innerHTML +=`
    <div id="moneda${Moneda.id}" class="col-lg-4 col-xs-12">
        <h3>${Moneda.nombre}</h3>
        <h4>${Moneda.precio}</h4>
    <input type="submit" class="" id="botonComprar${Moneda.nombre}" value="COMPRAR">
    <input type="submit" class="" id="botonVender${Moneda.nombre}" value="VENDER">
    
  `})


let boton4  =  document.getElementById("botonVenderBitcoin")

boton4.addEventListener("click", ()=>{ 
    let inputValue = document.getElementById("dinero").value;
    let btc = moneda1.precio 

    function division(inputValue, btc){
        return inputValue / btc
    }
    let resultado = division(inputValue, btc)


    document.getElementById("monedaRecibida").innerHTML = ` Usted vendió ${resultado} BTC`; 

    $('#boxComplete').animate({
        height: "20px",
        width: "300px"
    }, {
        duration: 1000,
        easing: "linear",
        complete: function(){
            $(this).after("<p> La transaccion fue realizada con exito</p>")
            
            $('#boxComplete').remove()
        }
    })


})

let boton5  =  document.getElementById("botonVenderEthereum")

boton5.addEventListener("click", ()=>{

    let inputValue = document.getElementById("dinero").value;
    let eth = moneda2.precio 

    function division(inputValue, eth){
        return inputValue / eth
    }
    let resultado = division(inputValue, eth)


    document.getElementById("monedaRecibida").innerHTML = `Usted vendió ${resultado} ETH`; 

    $('#boxComplete').animate({
        height: "20px",
        width: "300px"
    }, {
        duration: 1000,
        easing: "linear",
        complete: function(){
            $(this).after("<p> La transaccion fue realizada con exito</p>")
            
            $('#boxComplete').remove()
        }
    })
})

let boton6  =  document.getElementById("botonVenderUsdt")

boton6.addEventListener("click", ()=>{

    let inputValue = document.getElementById("dinero").value;
    let usdt = moneda3.precio 

    function division(inputValue, usdt){
        return inputValue / usdt
    }
    let resultado = division(inputValue, usdt)


    document.getElementById("monedaRecibida").innerHTML = `Usted vendió ${resultado} USDT`; 
    
    $('#boxComplete').animate({
        height: "20px",
        width: "300px"
    }, {
        duration: 1000,
        easing: "linear",
        complete: function(){
            $(this).after("<p> La transaccion fue realizada con exito</p>")
            
            $('#boxComplete').remove()
        }
    })
})

let boton1  =  document.getElementById("botonComprarBitcoin")

    boton1.addEventListener("click", ()=>{ 
        let inputValue = document.getElementById("dinero").value;
        let btc = moneda1.precio 

        function division(inputValue, btc){
            return inputValue / btc
        }
        let resultado = division(inputValue, btc)


        document.getElementById("monedaRecibida").innerHTML = `Usted recibió ${resultado} BTC`; 

        $('#boxComplete').animate({
            height: "20px",
            width: "300px"
        }, {
            duration: 1000,
            easing: "linear",
            complete: function(){
                $(this).after("<p> La transaccion fue realizada con exito</p>")
                
                $('#boxComplete').remove()
            }
        })


    })

let boton2  =  document.getElementById("botonComprarEthereum")

    boton2.addEventListener("click", ()=>{

        let inputValue = document.getElementById("dinero").value;
        let eth = moneda2.precio 

        function division(inputValue, eth){
            return inputValue / eth
        }
        let resultado = division(inputValue, eth)


        document.getElementById("monedaRecibida").innerHTML = `Usted recibió ${resultado} ETH`; 

        $('#boxComplete').animate({
            height: "20px",
            width: "300px"
        }, {
            duration: 1000,
            easing: "linear",
            complete: function(){
                $(this).after("<p> La transaccion fue realizada con exito</p>")
                
                $('#boxComplete').remove()
            }
        })
    })

let boton3  =  document.getElementById("botonComprarUsdt")

    boton3.addEventListener("click", ()=>{

        let inputValue = document.getElementById("dinero").value;
        let usdt = moneda3.precio 

        function division(inputValue, usdt){
            return inputValue / usdt
        }
        let resultado = division(inputValue, usdt)


        document.getElementById("monedaRecibida").innerHTML = `Usted recibió ${resultado} USDT`; 
        
        $('#boxComplete').animate({
            height: "20px",
            width: "300px"
        }, {
            duration: 1000,
            easing: "linear",
            complete: function(){
                $(this).after("<p> La transaccion fue realizada con exito</p>")
                
                $('#boxComplete').remove()
            }
        })
    })

/*--------------------------------animacion-----------------------------------------------------------*/

$('#tituloAnimate').animate({
    "color":"blue",
    "font-size":"40px",
    "padding-top":"10%",
    "padding-bottom":"10%",
    },
    "slow",
    function(){
        console.log("animacionterminada")
    }
).fadeOut(5000).fadeIn(5000)

/*-----------------------------------------API---------------------------------------------------------*/


let dolares = []
let divDolares = document.getElementById("divDolares")


document.getElementById("botonCotizaciones").addEventListener('click', ()=> {

    
    fetch("https://criptoya.com/api/satoshitango/btc/ars")
.then(response => response.json())
.then(data =>  {
    let datosPasados = Object.entries(data)
    datosPasados.forEach(dolar => {
        if(dolar[0] == "totalAsk") {
     divDolares.innerHTML += `
        <p id="${dolar[0]}"> Precio de compra BTC ${dolar[1]}</p>`
        }else if (dolar[0] == "totalBid"){
            divDolares.innerHTML += `
               <p id="${dolar[0]}"> Precio de venta BTC ${dolar[1]}</p>`}
    })}
    )
 
fetch("https://criptoya.com/api/satoshitango/eth/ars")
.then(response => response.json())
.then(data =>  {
    let datosPasados = Object.entries(data)
    datosPasados.forEach(dolar => {
        if(dolar[0] == "totalAsk") {
     divDolares.innerHTML += `
        <p id="${dolar[0]}"> Precio de compra ETH ${dolar[1]}</p>`
        }else if (dolar[0] == "totalBid"){
            divDolares.innerHTML += `
               <p id="${dolar[0]}"> Precio de venta ETH ${dolar[1]}</p>`}
    console.log(dolar[1])
})
    }
    )

fetch("https://criptoya.com/api/satoshitango/usdt/ars")
.then(response => response.json())
.then(data => {
    let datosPasados = Object.entries(data)
    datosPasados.forEach(dolar => {
        if(dolar[0] == "totalAsk") {
     divDolares.innerHTML += `
        <p id="${dolar[0]}"> Precio de compra USDT ${dolar[1]}</p>`
        }else if (dolar[0] == "totalBid"){
            divDolares.innerHTML += `
               <p id="${dolar[0]}"> Precio de venta USDT ${dolar[1]}</p>`}
    })}
    )
})

