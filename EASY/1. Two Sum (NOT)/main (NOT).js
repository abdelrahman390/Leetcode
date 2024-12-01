// /**
// * @param {number[]} nums
// * @param {number} target
// * @return {number[]}
// */
// var twoSum = function(nums, target) {
//     let myArray = Array.from(nums),firstNum = [], breakValue = false ,result = [];
//     for(let i = 0; i < nums.length; i++){        
//         if(breakValue === false){
//             firstNum = myArray.splice(0, 1) 
//                 nums.some(function(number, index) {
//                 if (+number + +firstNum === target && nums.indexOf(+firstNum) !== index) {
//                     // console.log("firstNum:", firstNum);
//                     // console.log("SecondNum:", number );
//                     // console.log("FirstNumIndex:", nums.indexOf(+firstNum));
//                     // console.log("SecondNumIndex:", index );
//                     // console.log('MainArray', nums);     
//                     breakValue = true;
//                     result = [nums.indexOf(+firstNum) , index]
//                     // console.log(result)
//                 }
//             });
//             // myArray.push(...firstNum)
//         }
//     }
//     console.log('Result', result)
//     return result;
// };
    
// const t0 = performance.now();
// twoSum([3,3], 6)
// const t1 = performance.now();
// console.log(`Function took ${t1 - t0} milliseconds.`);



// twoSum([2,7,11,15], 13)
// const t1 = performance.now();
// console.log(`Function took ${t1 - t0} milliseconds.`);

        // result = nums.map(function(number, index){
        //     number + +firstNum === 9;
        // });





// //  this solution cant work neverly with larg amount of data 
// var twoSum = function(nums, target) {
//     let firstNum = [], breakValue = false ,result = [];
//     for(let i = 0; i < nums.length; i++){
//         // if(breakValue === false){
//             firstNum = nums.slice(i, i+1)
//             // console.log(firstNum) 
//             // it dosn`t work with map and some
//                 nums.map(function(number, index) {

//                 if (+number + +firstNum === target && nums.indexOf(+firstNum) !== index) {
//                     console.log("firstNum:", firstNum);

//                     // console.log("SecondNum:", number );
//                     // console.log("FirstNumIndex:", nums.indexOf(+firstNum));
//                     // console.log("SecondNumIndex:", index );
//                     // console.log('MainArray', nums);
//                     breakValue = true;
//                     result = [nums.indexOf(+firstNum) , index]
//                     console.log(result) // qustion [3,3], target 6
//                 }
//             });
//             // myArray.push(...firstNum)
//         // }
//         break;
//     }
//     console.log('Result', result)
//     return result;
// };

// const t0 = performance.now();
// twoSum([3,3], 6)
// const t1 = performance.now();
// console.log(`Function took ${t1 - t0} milliseconds.`);






// the problem her that it return semelar index num if numbers are equal
// var twoSum = function(nums, target) {
//     let newArray = new Array(...nums)
//     let firstNum = [], breakValue = false ,result = [];

//     console.log(newArray)
//     for(let i = 0; i < nums.length; i++){
//         if(breakValue === false){
//             firstNum = newArray.slice(i, i + 1)
//             if(nums.length > 5000){
//             newArray.reverse();
//             newArray.some(function(number, index) {
//                 if (+number + +firstNum === target && newArray.indexOf(+firstNum) !== index) {
//                     // console.log(nums.indexOf(+firstNum))
//                     // console.log(index)
//                     breakValue = true;

//     result = [nums.indexOf(number) , nums.indexOf(+firstNum) === nums.indexOf(number) ? index : nums.indexOf(+firstNum)]}}); }}
//             }
//         // console.log('Result', result)
//     return result;
//  };

// const t0 = performance.now();
// twoSum([2,7,11,15] , 9)
// const t1 = performance.now();
// console.log(`Function took ${t1 - t0} milliseconds.`);
// ###############################################################################








// last answer in the leetcode take 2169 ms      ################
// var twoSum = function(nums, target) {
//     let newArray = new Array(...nums), firstNum = [], breakValue = false ,result = [];
//     newArray.reverse();
//     console.log(newArray)
//     for(let i = 0; i < nums.length; i++){
//         if(breakValue === false){
//             firstNum = newArray.slice(i, i + 1)
//             newArray.some(function(number, index) {
//                 if (+number + +firstNum === target && newArray.indexOf(+firstNum) !== index) {
//                     breakValue = true;
//                     result = [nums.indexOf(number) , nums.indexOf(+firstNum) === nums.indexOf(number) ? index : nums.indexOf(+firstNum)]
//                 }});
//             }}
// console.log(result)

// const t0 = performance.now();
//  twoSum([3,3], 6)
// const t1 = performance.now();
// console.log(`Function took ${t1 - t0} milliseconds.`);

// #################################################################################













//  it works with all another test wetiout this twoSum([2,7,11,15], 18) and take 90ms only !!!!!
var twoSum = function(nums, target) {
    let newArray = new Array(...nums), firstNum = [], result = [];
    newArray.reverse();
    for(let i = 0; i < nums.length; i++){
            firstNum = nums.slice(i, i + 1) 
    // if it newArray.splice it works only with //   twoSum([3,2,4], 6)
    // if it nums.slice it works only with // twoSum([2, 7, 11, 15 ], 9) & twoSum([3,3], 6)
            newArray.some(function(number, index) {
                console.log(+number)
                console.log(firstNum)
                // console.log(+number + +firstNum)
                if (+number + +firstNum === target && newArray.indexOf(+firstNum) !== index) {
                    console.log(+number + +firstNum)
                    console.log(firstNum)
                    // console.log(index)
                    // console.log(newArray.indexOf(+firstNum))
                    // console.log(nums.indexOf(+firstNum))
                    result = [nums.indexOf(number) , nums.indexOf(+firstNum) === nums.indexOf(number) ? index : nums.indexOf(+firstNum)];
                }
            });
                    break;
            }
            console.log(result)
    return result;
 };
//  twoSum([2, 7, 11, 15 ], 9)
//   twoSum([3,3], 6)
//   twoSum([3,2,4], 6)
