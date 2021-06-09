// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:


// const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]

// const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]

// const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

let invalidArr = [];

function validateCred (arr) {
    arrLength = arr.length;
    sumarr1 = [];
    sumarr2 = [];
    finalSumarr2 = [];
    test = " ";
    //return arr[arrLength - 1]

    const reducer = (accumulator, currentValue) => accumulator + currentValue;


    if (arrLength % 2 !== 0) {
    // If the i divided by 2 remainder is not 0 then
    // We use continue and skip to the next one
        for (let i = 0; i < arrLength; i++) {
            if (i % 2 !== 0) {
                continue
            }
            sumarr1.push(arr[i]);
            

        }
    // We are repeating the first block of code since it worked
    // But this time we need to multiply by 2 and subtract 9
        for (let i = 0; i < arrLength; i++) {
            if (i % 2 === 0) {
                continue
            }
            sumarr2.push(arr[i])
            // if (arr[i] > 9) {
            //     let timesTwo = arr[i] * 2
            //     console.log(timesTwo)
            //     sumarr.push(timesTwo)
            // } else {
            //     arr.push(arr[i])
            // }
            

        }
        let multiplyTwo = sumarr2.map(x => x * 2);
        for (let i of multiplyTwo) {
            if (i > 9) {
                let minus = i - 9
                finalSumarr2.push(minus)
            } else {
                finalSumarr2.push(i)
            }
            
        }
        const finalNumber = sumarr1.reduce(reducer) + finalSumarr2.reduce(reducer)

        if (finalNumber % 10 === 0) {
            return `Transaction complete. The card is valid. Total number from the algorithm is ${finalNumber}`
            
        } else {
            invalidArr.push(arr)
            return `The card is invalid. Total number from the algorithm is ${finalNumber}`
        }
        
        // const finalNumber = sumarr1.reduce(reducer) + finalSumarr2.reduce(reducer)
        // console.log(finalNumber);


        // console.log(sumarr1.reduce(reducer))
        // console.log(finalSumarr2.reduce(reducer))

        // console.log(sumarr1, sumarr2, finalSumarr2);
        // console.log(sumarr + finalSumarr2)

    }


    if (arrLength % 2 === 0) {
        // If the i divided by 2 remainder is not 0 then
        // We use continue and skip to the next one
            for (let i = 0; i < arrLength; i++) {
                if (i % 2 === 0) {
                    continue
                }
                sumarr1.push(arr[i]);
                
    
            }
        // We are repeating the first block of code since it worked
        // But this time we need to multiply by 2 and subtract 9
            for (let i = 0; i < arrLength; i++) {
                if (i % 2 !== 0) {
                    continue
                }
                sumarr2.push(arr[i])
                // if (arr[i] > 9) {
                //     let timesTwo = arr[i] * 2
                //     console.log(timesTwo)
                //     sumarr.push(timesTwo)
                // } else {
                //     arr.push(arr[i])
                // }
                
    
            }
            let multiplyTwo = sumarr2.map(x => x * 2);
            for (let i of multiplyTwo) {
                if (i > 9) {
                    let minus = i - 9
                    finalSumarr2.push(minus)
                } else {
                    finalSumarr2.push(i)
                }
                
            }
            const finalNumber = sumarr1.reduce(reducer) + finalSumarr2.reduce(reducer)
    
            if (finalNumber % 10 === 0) {
                return `Transaction complete. The card is valid. Total number from the algorithm is ${finalNumber}`
            } else {
                invalidArr.push(arr)
                return `The card is invalid. Total number from the algorithm is ${finalNumber}`
            }
            
            // const finalNumber = sumarr1.reduce(reducer) + finalSumarr2.reduce(reducer)
            // console.log(finalNumber);
    
    
            // console.log(sumarr1.reduce(reducer))
            // console.log(finalSumarr2.reduce(reducer))
    
            // console.log(sumarr1, sumarr2, finalSumarr2);
            // console.log(sumarr + finalSumarr2)
    
        }
    }
    
function validateBatch (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(validateCred(arr[i]));
    }
}

function idInvalidCardCompanies (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === 3) {
            console.log("Amex (American Express)") 
        } 
        if (arr[i][0] === 4) {
            console.log("Visa") 
        }
        if (arr[i][0] === 5) {
            console.log("Mastercard") 
        }
        // console.log(arr[i].length)
        // for (let x = 0; x < arr[i].length; x++ ) {
        //     console.log(i[0])
        // }

    }
}
console.log(validateBatch(batch))


console.log(validateCred(valid5))

console.log(idInvalidCardCompanies(batch))

// Coding notes: currenty able to push the numbers that do not need to be multiplied
// Using for loop and pushing i to sumarr then adding everything
// After that, we can check if it is equals to 100
