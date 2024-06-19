// console.log(2 > 3);

// console.log("zss">"sss");   // gives true.
// console.log("ass">"sss");   // gives false.

// console.log(null>0);    // gives false.
// console.log(null==0);   // gives false
// console.log(null>=0);   // gives true.

// Reason is comparsion and equality check works differently. 
// Comparisons convert anything to a number and then check. So null>=0 is true. because null is converted to 0. While equality direct checks without conversion.

// console.log(undefined>0);    // gives false.
// console.log(undefined==0);   // gives false
// console.log(undefined>=0);   // gives false.


// strict check -> === (Not onlt check values but datatype also.)
console.log("2" == 2);  // true
console.log("2" === 2); // false