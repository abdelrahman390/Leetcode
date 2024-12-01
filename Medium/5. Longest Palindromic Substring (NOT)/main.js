/**
//  * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let sArray = s.split(""),
        objects = [],
        solutions = [],
        wanted = [],
        unmatchedLetter = false,
        lastElemint;
    if (sArray.length == 1 | (sArray.length == 2 & sArray[0] !== sArray[1])) {
        solutions = sArray[0]
    } else {
        for (let i = 0; i < sArray.length; i++) {
            let number = 0,
                matchedNumbers = 0;
            console.log(lastElemint)
            if (!objects.includes(sArray[i])) {
                objects.push(sArray[i]);
                // console.log(sArray[i])
            } else {
                wanted.push(sArray[i])
                GetWantedWord(sArray[i], i) //  a - 3
                // console.log(sArray[i] ,'down')
                if ((unmatchedLetter)) {
                    console.log("done")
                    break;
                }
                matchedNumbers = i
            }
            // console.log(sArray[i], lastElemint)
            if (sArray[i] !== lastElemint && i !== 0) {
                unmatchedLetter = true
            }
            lastElemint = sArray[i]
        }
        function GetWantedWord(wantedCarecter, wantedCarecterIndex) {
            let partToWork = sArray.slice(0, wantedCarecterIndex + 1),
                firstWantedCarecterIsFined = false,
                FirstWantedCarecter;
            newLetter = false;
            // console.log(wantedCarecterIndex)
            // console.log(wantedCarecter)
            // console.log(partToWork) // [ 'a', 'a', 'c', 'a' ]
            for (let k = -1; k >= -partToWork.length; k--) {
                // console.log(k, partToWork[partToWork.length + k], wantedCarecter)
                if (partToWork[partToWork.length + k] === wantedCarecter && k !== -1) {
                    // console.log(FirstWantedCarecter, wantedCarecterIndex + 1)
                    FirstWantedCarecter = k
                    // console.log(k, FirstWantedCarecter)
                    if (newLetter) {
                        break;
                    }
                } else if ((partToWork[partToWork.length + k] !== wantedCarecter && k !== -1)) {
                    // console.log("worked")
                    newLetter = true
                }
            }
            // console.log(partToWork, FirstWantedCarecter, wantedCarecterIndex + 1, (partToWork.slice(FirstWantedCarecter, wantedCarecterIndex + 1)).join(""))
            solutions = (partToWork.slice(FirstWantedCarecter, wantedCarecterIndex + 1)).join("")
        }
    }
    return solutions
};
