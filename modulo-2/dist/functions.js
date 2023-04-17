var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// puedo definir los argumentos que envio y que tipo de funcion es o que me retorna
var sayHi = function (name) {
    console.log("hola ".concat(name));
};
sayHi("estudiantes de codigo Facilito");
function sayGoodBye(name) {
    console.log("adios ".concat(name, ",casi terminamos el curso"));
    return 1;
}
;
sayGoodBye("estudiantes");
// creo un objeto que podria ser una respuesta de una api o desestructuracion previa
var response = {
    id: 1,
    name: "codigo Facilito",
    charge: "Developer",
    number: 4,
};
function show(_a) {
    var name = _a.name, other = __rest(_a, ["name"]);
    console.log("el nombre mandado es", name);
    console.log("otros datos", other);
    return 1;
}
// paso un objeto com arjumento de la funcion y dentro de la misma lo desestructuro
show(response);
