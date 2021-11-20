let ejecucion

class Persona{
    constructor(nombre, apellido, edad, sueldo){
    this.nombre= nombre;
    this.apellido= apellido;
    this.edad= edad;
    this.sueldo= sueldo;
    }

}


    const persona1 = new Persona ("Alexis", "Campesato", 23, 12000)
    const persona2 = new Persona ("Federico", "Fernandez", 23, 15000)
    const persona3 = new Persona ("Milton", "Cala", 23, 7000)
    const persona4 = new Persona ("Esteban", "Garcia", 23, 18000)

   const personas = [persona1.sueldo, persona2.sueldo, persona3.sueldo, persona4.sueldo]
   console.log(personas)

   console.log(personas.sort(function(a, b){return a - b}));
    
    /*for(Persona of personas){
     
        for(atributo in Persona){
            console.log(Persona.sueldo)
        }
    }


    


    console.log(personas.map(Persona=>Persona.sueldo))

*/