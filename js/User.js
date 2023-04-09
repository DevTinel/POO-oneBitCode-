class User {
  constructor(name, email, password) {
    (this.name = name), (this.email = email), (this.password = password);
  }
  login(user, password) {
    if (user != this.email || password != this.password) {
      console.log(
        "Email ou senha inválidas, por favor verifique suas credenciais"
      );
    } else {
      console.log("Usuario Logado!");
    }
  }
}

const david = new User(
  "david Augusto",
  "davidaugustolol36@gmail.com",
  "chocolattra123"
);
console.log(david);
david.login("davidaugustolol36@gmail.com", "chocolattra123");
