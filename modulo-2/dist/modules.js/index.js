"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { PI, genereteId } from "./utils";
var Utils = require("./utils"); // otra forma de exportar todos loe elementos 
var myNumber = 10 * Utils.PI;
var myUser = {
    id: Utils.genereteId().toString(),
    name: "Sosa Sebastian"
};
console.log({
    myNumber: myNumber,
    myUser: myUser,
});
