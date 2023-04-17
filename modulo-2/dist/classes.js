var Animal = /** @class */ (function () {
    function Animal() {
        // tipo privado de clases
        this.age = 10;
    }
    Animal.prototype.sayHi = function () {
        console.log("Grrr", this.age);
    };
    return Animal;
}());
var myAnimal = new Animal();
myAnimal.sayHi();
// como tengo una propiedad privada no tengo acceso a esa propiedad de la clace 
// pero si se puede ver que pertenece a mi objeto utilizandolo dentro de mi clace ejemplo poniendolo despues del saludo del metodo sayHi()
