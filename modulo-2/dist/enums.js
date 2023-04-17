// un tipo de dato que nos permite almacenar lista de valores estaticos
var User;
(function (User) {
    User[User["NormalUser"] = 0] = "NormalUser";
    User[User["PayedUser"] = 1] = "PayedUser";
    User[User["AdminUser"] = 2] = "AdminUser";
    User[User["MegaUser"] = 3] = "MegaUser";
})(User || (User = {}));
var myUser = User.AdminUser;
console.log(myUser);
