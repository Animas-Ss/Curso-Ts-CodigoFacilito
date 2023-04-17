// creamos interfaces para saber que tipo es cada objeto que creamos
interface Person {
    name: string,
    code: string | number;
    charge: number;
    token?: string;
    description?: string;// nos da la alternativa de que puede o no formar parte de nuestra interfase osea que los objetos que formemos con este typo que creamos puede o no pedirnos descripcion
    soyHello: () => string;// agregamos un metodo que nos devuelve un tipo string
}

// es una estructura que nos da como premisa que todos los objetos que sean de esta clace o interface van a tener estos typos

let persona: Person = {
    name: "Lucas",
    code: "01",
    charge: 1,
    description: "hola mundo",
    soyHello: () => {
        // guardartoken() ya que un token es una cadena de caracteres
        // tomarFoto() ya que guarda una direccion 
        return "hola"
    }
}

let secondPerson: Person = {
    name: "",
    code: "",
    charge: 0,
    soyHello: () => "buenas"
};

// como el objeto no lo posee pregunta primero antes de agregar el metodo si esta si no esta no lo considera
secondPerson.description?.toLocaleLowerCase();