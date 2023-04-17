console.log("hola mundo");
// type script si no declaramos que tipo es toma la asignacion inicial para que esa variable sea de el tipo declarado
let age = 20;
// otra forma seria declarandolo nosotros de la siguiente manera
let edad:number = 20;
let dir:string = "Pelegrinni";
let isSenior:boolean = true;
let person:Object = {};

//arrays
let fruits: Array<string> = ["manzana", "banana", "pera"];// arrays de string
let autos: string[] = ["ford", "mercedes", "audi"];// otra forma de darle tipos a los arraysponemos el tipo y el simbolo
let verduras: Object[] = [{}, {name: "zanahoria"}];// arrays de objetos 

// y lo que no se debe usar o evitarlo es el tipo any // nos evita el autocompletado 
let respuesta : any = "hola mundo";
respuesta = 20;
respuesta = true;
respuesta = ["juan", 123];

// tipo de datos void no retorna nada tipode  datos de funciones 
function saludar(): void {
    console.log("Animas");
}
//tenemos el tipo de dato unknown (que es un dato desconodido) parecido a any pero mas controlado
let response:unknown;
//no se le permite hacer lo que quiera como el eni nos da errores si queremos usar metodos de los datos ya que no se conoce el tipo
response =  true;

//metodos null y undefined sirven mucho para el consumo de apis o manejo de errores
let response2 = null;// variables nulas o vacias pero si inicializadas 
let response3 = undefined;// variables que no fueron inicializadas 

//  combinacion de datos utiles un servicio de la nube que devuelve un tipo o puede devolver otro
let response5: number | undefined;
response5?.toString();// el operador del signo de operacion me permite evaluar si la variable no es undefinded o null o si existe

let responseProducts: number | undefined;
let responsePartners: string | undefined;

// creamos un tipo para pdoer asignarlo a nuestras variables y no repetir como en el ejemplo de arriba
type ResTypes = number | undefined;// si cambio el tipo creado me da error donde use metodos que no coresponden el nuevo tipo creado
// permitiendome solucionar errores o arreglar codigo antes de compilar 

let responseContact: ResTypes;
let consumoresponse: ResTypes;// sentralizamos la logica en un tipo creado por nosotros y se lo asignamos secun corresponda
// en la siguiente linea a la variable responseContact le pase el metodo concat() de los tipo string pero como luego cambie mi tipo a number me dio un error lo que genero que agregara tostring() metodo de numbers para recien usar concact
responseContact?.toString().concat();

// Type ASSERTION consiste en castear los tipos de datos 
// a que nos referimos con castear , simplemente es tratarlo como nosotros pensamos que es util 
// en el ejemplo siguiene asignamos  una variable un tipo any lo que no me deja autocompletar
let message: any = "";
// pero ahora si queremso tratatlo como string usamos la palabra reservada as
(message as string).includes("s")
// de esta manera me permite no solo autocompletar sino usar los metodos de string 
// las utilidades son poder darle tipos a lo que desconocemos ejemplo:
let messageUppercase = <string>message;
messageUppercase.toUpperCase();
// tambien se puede estribir como al principio
let messageUppercase2 = (message as string).toUpperCase();
// ambas formas nos permiten castear las variables 
// otro ejemplo muy util es el siguiente creamos una variable que nso puede devolver un elemento HTML o null
// pero si casteamos dicho elemento por que estamos seguros de que el elemento de tipo id canvas es de tipo canvas
// lo casteamos, para el manejo del dom el casteo sirve bastante es bueno recordarlo
const canvas =<HTMLCanvasElement>document.getElementById("canvas");
const canvas2 = document.getElementById("canvas") as HTMLCanvasElement;