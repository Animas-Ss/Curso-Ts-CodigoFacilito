// se utliza para mantener un orden en el codigo principal utilidad pero fue remplazado por los modulos
var DatabaseEntity;
(function (DatabaseEntity) {
    //para la utilizacion del namespaces necesito exportar lo que deseo utilizar
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User("Sebastian");
    //console.log(myUser)
})(DatabaseEntity || (DatabaseEntity = {}));
// de esta manera puedo utilizar lo creado en mi namespaces
var myOtherUser = new DatabaseEntity.User("Ricardo");
console.log(myOtherUser);
// de esta manera importamos o traemos nuestro namespaces
/// <reference path="namespaces.ts" />
// de esta manera  importamos el name space en diferentes archivos
var otherUser = new DatabaseEntity.User("Sosa");
console.log(otherUser);
