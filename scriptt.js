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
    const cliente= new Cliente (datosFormulario.get("nombre"), datosFormulario.get("apellido"), datosFormulario.get("edad"), datosFormulario.get("dni"), datosFormulario.get("email"))
    clientes.push(cliente)
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








/*
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
*/