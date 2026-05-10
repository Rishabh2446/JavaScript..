const accountId = 144532
let accountEmail = "rishu@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 ->Not allowed

console.log(accountId);

accountEmail = "rg@gmail.com"
accountPassword = "24455"
accountCity = "Noida"

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
