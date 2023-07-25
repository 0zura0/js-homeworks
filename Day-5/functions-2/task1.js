function mix(...callbacks){
    try{
    let result;
    for(let i=0;i<callbacks.length;i++){
        if(typeof callbacks[i] !== "function"){
            console.log(typeof callbacks[i]);
            throw new Error("argument should be function")
        }else if(i===0){
            result = callbacks[i]();
        }else{
            result=callbacks[i](result);
        }
    }
    return result
    }catch(e){
        console.log(e.name+": "+e.message);
    }
}


console.log(mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
}) )  // 2);



// // Test case 1
// const testCase1 = mix(() => 0, (prev) => prev + 1, (prev) => prev * 2);
// console.log(testCase1 === 2 ? "Test case 1 passed" : "Test case 1 failed");

// // Test case 2
// const testCase2 = mix(() => 5, (prev) => prev * 2);
// console.log(testCase2 === 10 ? "Test case 2 passed" : "Test case 2 failed");

// // Test case 3
// const testCase3 = mix(() => 5);
// console.log(typeof testCase3 === "number"? "Test case 3 passed" : "Test case 3 failed");

// // Test case 4
// const testCase4 = mix(() => 1, () => 2, () => 3);
// console.log(testCase4 === 3 ? "Test case 4 passed" : "Test case 4 failed");

// // Test case 5
// const testCase5 = mix(() => 0, () => 1, () => 2, () => 3, () => 4, () => 5);
// console.log(testCase5 === 5 ? "Test case 5 passed" : "Test case 5 failed");

// // Test case 6
// const testCase6 = mix();
// console.log(testCase6 === undefined ? "Test case 6 passed" : "Test case 6 failed");

// // Test case 7
// const testCase7 = mix(() => 1, (prev) => prev + 2, (prev) => prev + 3);
// console.log(testCase7 === 6 ? "Test case 7 passed" : "Test case 7 failed");

// // Test case 8
// const testCase8 = mix(() => 100);
// console.log(testCase8 === 100 ? "Test case 8 passed" : "Test case 8 failed");

// // Test case 9
// const testCase9 = mix(
//   () => "Hello, ",
//   (prev) => prev + "world!",
//   (prev) => prev + " How are you?"
// );
// console.log(
//   testCase9 === "Hello, world! How are you?" ? "Test case 9 passed" : "Test case 9 failed"
// );

// // Test case 10
// const testCase10 = mix((prev) => prev + 1, (prev) => prev + 2, (prev) => prev + 3);
// console.log(isNaN(testCase10) ? "Test case 10 passed" : "Test case 10 failed");
