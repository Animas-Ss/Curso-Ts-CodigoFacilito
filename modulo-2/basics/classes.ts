class Animal {
    // todos tienen aceso 
    public name: "generic animal";
    // tipo privado de clases accesibles a la clace
    private age = 10;
    //es accesible a las clases que extienden 
    protected identity = "12312"

    // el constructor es la funcion ens iq eu reprensenta al animal
    constructor(){

    }

    sayHi(){
       console.log("Grrr", this.age); 
    }
}
// herencia
class Dog extends Animal{
    type:"pastor aleman";
    sayHi(){
        this.identity;
    }
    // caundo generamos una herencia que posea constructor tenemosque inicializarla con la palabra super()
    // lo que generamos es que la clase que extiende primero ejecute todo lo que hereda
    constructor(){
        super();
    }
}

const myAnimal: Animal = new Animal()

myAnimal.sayHi();
// como tengo una propiedad privada no tengo acceso a esa propiedad de la clace 
// pero si se puede ver que pertenece a mi objeto utilizandolo dentro de mi clace ejemplo poniendolo despues del saludo del metodo sayHi()

const myDog: Dog = new Dog();

myDog.