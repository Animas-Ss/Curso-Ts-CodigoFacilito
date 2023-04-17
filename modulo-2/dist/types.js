console.log("hola mundo");
// type script si no declaramos que tipo es toma la asignacion inicial para que esa variable sea de el tipo declarado
var age = 20;
// otra forma seria declarandolo nosotros de la siguiente manera
var edad = 20;
var dir = "Pelegrinni";
var isSenior = true;
var person = {};
//arrays
var fruits = ["manzana", "banana", "pera"]; // arrays de string
var autos = ["ford", "mercedes", "audi"]; // otra forma de darle tipos a los arraysponemos el tipo y el simbolo
var verduras = [{}, { name: "zanahoria" }]; // arrays de objetos 
// y lo que no se debe usar o evitarlo es el tipo any // nos evita el autocompletado 
var respuesta = "hola mundo";
respuesta = 20;
respuesta = true;
respuesta = ["juan", 123];
// tipo de datos void no retorna nada tipode  datos de funciones 
function saludar() {
    console.log("Animas");
}
//tenemos el tipo de dato unknown (que es un dato desconodido) parecido a any pero mas controlado
var response;
//no se le permite hacer lo que quiera como el eni nos da errores si queremos usar metodos de los datos ya que no se conoce el tipo
response = true;
//metodos null y undefined sirven mucho para el consumo de apis o manejo de errores
var response2 = null; // variables nulas o vacias pero si inicializadas 
var response3 = undefined; // variables que no fueron inicializadas 
//  combinacion de datos utiles un servicio de la nube que devuelve un tipo o puede devolver otro
var response5;
response5 === null || response5 === void 0 ? void 0 : response5.toString(); // el operador del signo de operacion me permite evaluar si la variable no es undefinded o null o si existe
var responseProducts;
var responsePartners;
// permitiendome solucionar errores o arreglar codigo antes de compilar 
var responseContact;
var consumoresponse; // sentralizamos la logica en un tipo creado por nosotros y se lo asignamos secun corresponda
// en la siguiente linea a la variable responseContact le pase el metodo concat() de los tipo string pero como luego cambie mi tipo a number me dio un error lo que genero que agregara tostring() metodo de numbers para recien usar concact
responseContact === null || responseContact === void 0 ? void 0 : responseContact.toString().concat();
