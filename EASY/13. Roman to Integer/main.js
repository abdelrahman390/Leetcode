// /**
//  * @param {string} s
//  * @return {number}
//  */

var romanToInt = function(s) {

    let romanDefinition = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let result = []

    for(let i = 0; i < s.length; i++){
        result.push(romanDefinition[s[i]]);
        console.log(result)
    }

    let finalResult = 0;

    for(let i = 0; i < s.length ; i++){

        let test = result.slice(0, 2)

        // console.log(test)

            if(test[0] === test[1] || test.length === 1 || test[0] > test[1]){

                // console.log(finalResult)
                // console.log(test[0])
                finalResult += test[0]
                // console.log(finalResult)

            } else if(test[0] < test[1]){

                // console.log(finalResult)
                // console.log(test[0])
                finalResult -= test[0];
                // console.log(finalResult)

            } 
            // console.log(finalResult)
        result.shift()
    }
console.log(finalResult)
};
romanToInt("XXLL")  // expected = 1994


