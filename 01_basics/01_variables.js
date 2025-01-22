const accountId=144553

let accountEmail= "aditya1234@gmail.com"

/*we don't use var to declare variable instead use let keyword only (so prefer not to use var instead use let)
bcz of issue in block scope and functional scope
*/
var accountPassword="12345"

accountCity="Kanpur"

let accountState;

// accountId=2 const keyword cant be changed

console.log(accountId);

accountEmail="abd451845@gmail.com"

accountPassword="21212121"

accountCity="Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);