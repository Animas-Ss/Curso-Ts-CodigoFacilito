interface Person {
    name: string;
    age: number;
}

// si creo una interfase con erencias de otra seria de la siguiente manera
//esta interfase nueva exteinde de la anterior es decir hereda sus typos tiene que incluir los valores en person
interface Employee extends Person {
    charge: string,
}

// lo que es la herencia o extencion puede darse en situaciones entre type y interface no solo de interface a interface
// una interface puede extender pero no type no extiende peros i puede ser objeto de extencion

const newEmployee: Employee = {
    name: "",
    age: 1,
    charge:""
}

// merciar entre typos
// union type

type User = {
    id: string;
};
// de esta manera extendemos typos . ya que no funciona igual que las interface con el & y la interface o type
type Admin = User & { token: string };// puedo extender tambien desde una interface
type AdminSeconds = User & Employee;// asi etendemos un type de una interface

const myAdmin: Admin = {
    id: "",
    token: "",
}

// la principal diferencia entre interface y type es que en interface es parecido a un objeto un contrato con clave valor 
// en cambio un type es algo mas expesifico donde declaramos los tipos exactos que puede ser nuestra variable

type ServiceResponseToken = string | null | undefined | number;
type UserTypes = "admin" | "superUser" | 0;

const myUser: UserTypes = 0;// solo puede ser de los tipos declarados 

//agreagr mas propiedades a mi interface nos brinca caracteristicas de un sofware basado en comosicion 
interface Developer {
    name: string;
    stack: string[];
}
interface Developer {
    phone: number;
}

const me: Developer = {
    name: "",
    stack: [],
    phone: 0
};

// tratar siempre de priorizar interface antes que typos 