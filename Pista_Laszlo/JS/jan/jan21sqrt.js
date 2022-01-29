/* let a = 5
let b = 6

function square(a){
    return console.log(a*a)
}

square(b)
 */

function squareRoot(a){
   
    for(let i = a ;i >= 0 ; i--){
        if( a / i === i){
           return console.log( i)
        }
    }
    return console.log('a számból gyökvonás után nem egész számot kapunk')
}

squareRoot(9)