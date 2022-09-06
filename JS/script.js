// Javascript error : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
'use strict';

//evalerror
//range error
/* const arr = [5, 6, 7, 8];
arr.length = 90 ** 99;
console.log(arr); */
const check = n => {
    if (n < 500 && n > 100) {
        console.log(`${n} is valid`);
    } else {
        throw new RangeError(`Argument must be in 100 to 500 range`);
    }
};
try {
    check(800);
} catch (error) {
    if (error instanceof RangeError) {
        console.log(error);
    }
}
//reference error
//syntax error
//typeerror
//URI error
//Aggregate error
//Internal Error