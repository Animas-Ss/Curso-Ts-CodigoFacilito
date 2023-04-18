// ejemplo de como usarlo
var myValue = {
    field: "sebastian"
};
// colocamos el tipo una interface
var myValue2 = {
    field: {
        id: "onsasd",
        name: "Ricardo"
    }
};
// lo aplicamos a clases
var MyClass = /** @class */ (function () {
    function MyClass(field) {
        this.field = field;
    }
    return MyClass;
}());
;
//const myObject: MyClass<number> = new MyClass()
//aplicado en funciones 
function getData(id) { }
;
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    ;
    return HttpResponse;
}());
;
var fetchUser = function () {
    return {
        id: 1,
        name: "Animas",
    };
};
var myUser = fetchUser();
var res = new HttpResponse(myUser, 200, 1);
console.log(res);
// aniadir items a nuestros arrays creando un crud
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CRUD.prototype.removeItem = function () {
        this.items.pop();
    };
    CRUD.prototype.printItems = function () {
        return this.items;
    };
    return CRUD;
}());
var users = [
    { id: 1, name: "Ricardo" },
    { id: 2, name: "Sebastian" },
    { id: 3, name: "Renata" },
];
// el controlador de mi crud el cual es de tipo UserResponse que significa que es de tipo objeto con dos clave valores luego le paso mis user que es un arrelo o matriz
// de objetos con cada usuario co su respectiva id y nombre
// y ya puedo trabajar con mi crud
var userCRUD = new CRUD(users);
userCRUD.addItem({ id: 4, name: "TypeScript" }); //uso el emtodo que creamos en nuestra clace CRUD y agregamos un nuevo item a nuestro array
console.log(userCRUD.printItems()); // ahora usamos el metodo para solicitar todos el arreglo
