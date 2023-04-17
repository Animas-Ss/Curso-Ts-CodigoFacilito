// un tipo de dato que nos permite almacenar lista de valores estaticos
// si usamos o llevamos a esto a una base de datos donde los usuarios sean asignados segun el numero 
// el sero seria usuario normal y asi consecutivamente segun los usuarios asignados , tambien se puede dar el numero que yo quiera aca da usuario

enum User{
    NormalUser,//= 6 , o tambien podemos darles un string como = "normal"
    PayedUser,//= 9 , o tambien podemos darles un string como = "payed"
    AdminUser,//= 7 , o tambien podemos darles un string como = "admin"
    MegaUser,//= 3 , o tambien podemos darles un string como = "mega"
}
// como se ve en eljemplo siguiente me conviene este metodo por que centralizo codigo evito la repeticion 
//si dentro de un tiempo las condiciones cambian puedo solo cambiando el enum adminUser por la asignacion nueva 
// y asi no cambiar apso por paso cada codigo o condicional
const myUser = User.AdminUser

if(myUser === User.AdminUser){
    console.log("hola Administrador");
}
