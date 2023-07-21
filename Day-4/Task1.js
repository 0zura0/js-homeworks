function f(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Parameter must be an array.');
    }
  
    let sum = 0;
  
    for (const element of arr) {
      if (Array.isArray(element)) {
        sum += f(element);
      } else if (typeof element === 'number') {
        sum += element;
      } else {
        throw new Error('Invalid element found in the array.');
      }
    }
    return sum;
  }
  

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];

const arr2 = [[[[[1,2]]]]];

const arr3 = [[[[[1,2]]],2],1];

const arr4 = [[[[[]]]]];

const arr5 = [[[[[],3]]]];

try{
console.log(f(arr));  // 12
console.log(f(arr2)); //3
console.log(f(arr3)); //6
console.log(f(arr4)); //0
console.log(f(arr5)); //3
}catch(e){
    console.log(e.name+": "+e.message);
}