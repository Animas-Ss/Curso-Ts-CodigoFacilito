type Person {
    name: string,
    code: string | number;
    description?: string;
}

const newPersona: Person = {
    code:"H",
    name: "Sebastian"
}

type ServiceResponse = string | null | number | undefined;

let response: ServiceResponse;// la respuesta que resivamos del servicio puede set de los tipos declarados en el type service
type UserChanges = "admin" | "nomal" | "superUser";

const myUserType: UserChanges= "admin";// de esta manera cualqueir usuario que genere con el tipo UserChanges va a ser de lo declarado me permite el autocompleatdo