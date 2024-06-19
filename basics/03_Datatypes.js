let score = "033"
console.log(typeof(score));

let scoreinNumber = Number(score) 
console.log(typeof(scoreinNumber)); 
console.log(scoreinNumber);
// If we give anything else then number (like character, undefined in score ) , then it will show NaN in log. For boolean , it gives 0/1.

score = null 
scoreinNumber = Number(score) 
console.log(scoreinNumber); 
// will convert null as zero. So for uses first check type of score, if it is object then value returned is not 0 but a data not fatch message.

/* Summary via Examples as : score => scoreinNumber
    "0033" =>  33   
    null => 0   
    undefined => NaN   
    "0933a" => NaN  
    "nisarg" => NaN.    
    true => 1 
    false => 1 
*/


let val = -2 ;
let valInBool = Boolean(val);
console.log(valInBool);
/*  number != 0 => true , else false 
    empty string => false , else true .
*/

let num = -123;
// console.log(typeof num); If i give num = ! (something) then it is treated as boolean.
let numInStr = String(num)
console.log(typeof numInStr);
console.log(numInStr);
    