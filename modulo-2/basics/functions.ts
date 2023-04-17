// puedo definir los argumentos que envio y que tipo de funcion es o que me retorna
const sayHi = (name: string): void => {
    console.log(`hola ${name}`)
};
sayHi("estudiantes de codigo Facilito");

function sayGoodBye(name: string) : number{
    console.log(`adios ${name},casi terminamos el curso`);
    return 1;
};

sayGoodBye("estudiantes");

// como relacionar las interfaces los objetos y las funciones
// destructuracion y respuesta
interface responseService {
    id: number;
    name: string;
    charge: string;
    number: number;
}
// creo un objeto que podria ser una respuesta de una api o desestructuracion previa
const response: responseService = {
    id: 1,
    name: "codigo Facilito",
    charge: "Developer",
    number: 4,
}
function show({name, ...other}: responseService): number {
    console.log("el nombre mandado es", name);
    console.log("otros datos", other)
    return 1;
}
// paso un objeto com arjumento de la funcion y dentro de la misma lo desestructuro
show(response);

