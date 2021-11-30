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
let moneda3 = new Moneda (3,"Usdt", 185)

moneda1.comision();
moneda2.comision();
moneda3.comision();

const arrayCripto = [moneda1, moneda2, moneda3]
    console.log(arrayCripto)

/*Botones de comprar y vender*/

let divCriptos = document.getElementById("divCriptos")

arrayCripto.forEach(Moneda=> {
    divCriptos.innerHTML +=`
    <div id="moneda${Moneda.id}" class="col-lg-4 col-xs-12">
        <h3>${Moneda.nombre}</h3>
        <h4>${Moneda.precio}</h4>
    <input type="submit" class="" id="botonComprar${Moneda.nombre}" value="COMPRAR">
    <input type="submit" class="" id="botonVender" value="VENDER">
    
  `})

let boton1  =  document.getElementById("botonComprarBitcoin")

    boton1.addEventListener("click", ()=>{ 
        let inputValue = document.getElementById("dinero").value;
        let btc = moneda1.precio 

        function division(inputValue, btc){
            return inputValue / btc
        }
        let resultado = division(inputValue, btc)


        document.getElementById("monedaRecibida").innerHTML = `${resultado} BTC`; 

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


        document.getElementById("monedaRecibida").innerHTML = `${resultado} ETH`; 

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


        document.getElementById("monedaRecibida").innerHTML = `${resultado} USDT`; 
        
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

function cerrarVentana(){
    document.getElementById("ventanilla").style.display="none";
}

/*  ---CARGA DE DATOS DEL CLIENTE---  */
/**/

class Cliente{
    constructor(nombre, apellido, edad, dni, email, saldo, tarjetas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dni = dni;
    this.email = email;
    this.saldo = saldo;
    this.tarjetas = [];
    }

    realizarPago(gasto){
        this.saldo -= gasto
    }

    solicitarTarjeta(nuevaTarjeta){
        this.tarjeta.push(nuevaTarjeta)
    }

}


class tarjeta{
    constructor(numero, fechaVencimiento, tipo){
        this.numero = numero
        this.fechaVencimiento = fechaVencimiento;
        this.tipo = tipo;
    }
}

/*aplico funcionalidad*/

let clientes = []

let formCliente = document.getElementById("formCliente")
let botonRegistro = document.getElementById("botonRegistrarse")
let botonClientes = document.getElementById("botonMostrarClientes")
let divClientes = document.getElementById("divClientes")

formCliente.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e.target)
    let datosFormulario= new FormData(e.target)
    const Cliente= new Cliente (datosFormulario.get("nombre"), datosFormulario.get("apellido"), datosFormulario.get("edad"), datosFormulario.get("Dni"), datosFormulario.get("email"))
    clientes.push(Cliente)
    localStorage.setItem('clientes',JSON.stringify(clientes))
    formCliente.reset()
})

botonRegistro.addEventListener("click", () =>{
    document.getElementById("ventanilla").style.display="block";
    })

botonClientes.addEventListener("click", () =>{
     let clientesParseados = JSON.parse(localStorage.getItem('clientes'))
        clientesParseados.forEach((Cliente, indice) => {
            divClientes.innerHTML += `
                <div class="card" style="width: 18rem;" id="cliente${indice + 1}">
                        <div class="card-body">
                        <h5 class="card-title">Cliente N'${indice + 1}</h5>
                        <p>Nombre: ${Cliente.nombre}</p>
                        <p>Apellido: ${Cliente.apellido}</p>
                        <p>Edad: ${Cliente.edad}</p>
                        <p>Email: ${Cliente.email}</p>
                        <p>Dni: ${Cliente.dni}</p>
                        <p>Saldo: ${Cliente.saldo}</p>
                    </div>
                </div>`
            })
    })



$(() => {
    
    $('#formCliente').append(
        `
    
    <div class="mb-3">
      <input type="text" class="form-control" id="nombre" placeholder="Apellido y nombre">
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" id="email" placeholder="Correo electronico">
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" id="dni" placeholder="Dni">
    </div>
    <div class="mb-3">
      <input type="password" id="contraseña" class="form-control" placeholder="Contraseña" aria-describedby="passwordHelpBlock">
    </div>
    <div class="mb-3">
      <input type="password" id="confirmarContraseña" class="form-control" placeholder="Confirmar contraseña" aria-describedby="passwordHelpBlock">
    </div>
    
    <button id="submit" type="submit" class="btn btn-primary">Confirmar</button>
   
    

    `)})




/*---------animacion----------*/
$('#tituloAnimate').animate({
    "font-size":"40px",
    "padding":"30px",
    },
    "slow",
    function(){
        console.log("animacionterminada")
    }
).fadeOut(5000).fadeIn(5000)
  