// se utliza para mantener un orden en el codigo principal utilidad pero fue remplazado por los modulos
namespace DatabaseEntity {
    //para la utilizacion del namespaces necesito exportar lo que deseo utilizar
    export class User {
        constructor(public name: string){}
    }
    const myUser = new User("Sebastian");
    //console.log(myUser)
}
// de esta manera puedo utilizar lo creado en mi namespaces
const myOtherUser = new DatabaseEntity.User("Ricardo");
console.log(myOtherUser)