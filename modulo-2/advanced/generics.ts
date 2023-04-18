// tipo de datos genericos
// para no escribir todos los datos que puede ser 
// resive un parametro que es el tipo de dato que vamos ausar y se asigna ese dato
interface myInterface <T> {
    field: T;
}

interface Example {
    id: string;
    name: string;
}

// ejemplo de como usarlo
const myValue: myInterface<string> = {
    field: "sebastian"
}
// colocamos el tipo una interface
const myValue2: myInterface<Example> = {
    field: {
        id: "onsasd",
        name: "Ricardo"
    }
}

// lo aplicamos a clases
class MyClass<T>{
   field: T;
   constructor(field: T){
    this.field = field
   }
};

//const myObject: MyClass<number> = new MyClass()

//aplicado en funciones 
function getData<T>(id: string): Promise<T> | void {}

// example whit class ejemplos de la vida real
interface UserResponse {
    id: number;
    name: string;
};

class HttpResponse<T>{
    data: T;
    status: number;
    code: number;
    constructor(data: T, status: number, code: number){
        this.data= data;
        this.status = status;
        this.code = code;
    };
};

const fetchUser = (): UserResponse => {
    return {
        id: 1,
        name: "Animas",
    };
};

const myUser = fetchUser();
const res = new HttpResponse( myUser, 200, 1 );
console.log(res)

// aniadir items a nuestros arrays creando un crud
// creamos una clace con datos genericos los cuales savemos que va a ser un array
class CRUD<T>{
    private items: T[];// clase privada que solo va a ser usada en nuestra clase crud
    constructor(items: T[]){
        //asignamos el valor del dato ingresado a nuestro array items
        this.items = items;
    }

    addItem(item: T){
        this.items.push(item);
    }
    removeItem(){
        this.items.pop();
    }
    printItems(): T[]{
        return this.items;
    }
}

const users: UserResponse[] = [
    {id: 1, name: "Ricardo"},
    {id: 2, name: "Sebastian"},
    {id: 3, name: "Renata"},
]
// el controlador de mi crud el cual es de tipo UserResponse que significa que es de tipo objeto con dos clave valores luego le paso mis user que es un arrelo o matriz
// de objetos con cada usuario co su respectiva id y nombre
// y ya puedo trabajar con mi crud
const userCRUD: CRUD<UserResponse> = new CRUD(users);
userCRUD.addItem({id: 4, name: "TypeScript"});//uso el emtodo que creamos en nuestra clace CRUD y agregamos un nuevo item a nuestro array
console.log(userCRUD.printItems());// ahora usamos el metodo para solicitar todos el arreglo