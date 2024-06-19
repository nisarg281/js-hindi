const accountId = 12.  // define by const means we can't change the value afterwords.
// console.log(accountId)

// accountId = 121   // -- compiler will throw const assingment error.

// console.log(accountPass)   // Will show result as undefined. "NO error is thrown by compiler".


let accountEmail = "nisarg28@gmail.com"
// console.log(accountEmail)

accountEmail = "changgedmail"
// console.log(accountEmail); // We'll able to change here. 

// accountEmail = 1234     // Change of type of variable is also OK in let declaration. 
// console.log(accountEmail); 

// Prefer Not to use var , Because of issue in Block scope and functional scope.
var accountPass = "password"

accountPass = "changedpasss"
// console.log(accountPass);

accountPass = 45        // Change of type of variable is also OK in var declaration.
// console.log(accountPass);


// We can use a variable without declaration in js but prefer not to use it.
accountCity = "Gandhinagar" 
console.log(accountCity);

accountCity = 1234 

let accountstate  // If i try to print it then it will be done but undefined is printed.
console.table([accountEmail ,accountId ,accountPass , accountstate])
