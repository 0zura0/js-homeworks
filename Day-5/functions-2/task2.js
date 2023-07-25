function mix(...callbacks) {
    let result;
    const errors = [];
  
    for (let i = 0; i < callbacks.length; i++) {
      try {
        if (typeof callbacks[i] !== 'function') {
          throw new Error('Argument should be a function');
        } else if (i === 0) {
          result = callbacks[i]();
        } else {
          result = callbacks[i](result);
        }
      } catch (error) {
        errors.push({
          name: error.name,
          message: error.message,
          stack: error.stack,
          level: i,
        });
      }
    }
  
    return {
      errors,
      value: result,
    };
  }


console.log(mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
	throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
}));


// Test case 1: No callbacks provided
const testCase1 = mix();
console.log(testCase1.errors.length === 0 && testCase1.value === undefined ? "Test case 1 passed" : "Test case 1 failed");

// Test case 2: Callbacks returning numbers
const testCase2 = mix(
  () => 5,
  (prev) => prev * 2,
  (prev) => prev + 3
);
console.log(testCase2.errors.length === 0 && testCase2.value === 13 ? "Test case 2 passed" : "Test case 2 failed");

// Test case 3: Callbacks returning strings
const testCase3 = mix(
  () => "Hello, ",
  (prev) => prev + "world!",
  (prev) => prev + " How are you?"
);
console.log(testCase3.errors.length === 0 && testCase3.value === "Hello, world! How are you?" ? "Test case 3 passed" : "Test case 3 failed");

