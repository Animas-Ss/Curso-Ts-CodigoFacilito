//import { PI, genereteId } from "./utils";
import * as Utils from "./utils";// otra forma de exportar todos loe elementos 
import { User as Person } from "./utils";// para renombrar lo que exporto

const myNumber = 10 * Utils.PI;

const myUser: Person = {
    id: Utils.genereteId().toString(),
    name: "Sosa Sebastian"
}

console.log({
    myNumber,
    myUser,
})