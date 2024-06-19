/* data has 2 type of categarisations based on how data is stored and accessed in memory.
    Primitive :  7 types ( When accessed , only given its values ,  not reference )
                string , number , Boolean , null, undefined , symbol , bigint  
    Non-Primtive : Array , Objects , Functions .    
(Reference type)
    Js is dynamically types language. Means we don't have to tell that value is of which type.
*/

// let id = Symbol('123');
// let id2 = Symbol('123');
// console.log(id==id2); // result false.

const names = ["nisarg","patel"];
console.log(names);

let myObj = {
    name : "naaaam",
    id : 11,
}

const myfun = function(){
    console.log("hello");
}

myfun()
console.log(typeof myfun);
console.log(typeof myObj);
console.log(typeof names);