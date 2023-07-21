function rotate(array, count, direction = 'right') {
    if (!Array.isArray(array)) {
      throw new Error('First parameter must be an array.');
    }
  
    if (typeof count !== 'number' || !Number.isInteger(count)) {
      throw new Error('Second parameter must be a number.');
    }
  
    if (typeof direction !== 'string') {
      throw new Error('Third parameter must be a string.');
    }
  
    count = count % array.length
  
    if (direction === 'left') {
      for (let i = 0; i < count; i++) {
        const temp = array.shift();
        array.push(temp);
      }
    } else if (direction === 'right') {
      for (let i = 0; i < count; i++) {
        const temp = array.pop();
        array.unshift(temp);
      }
    } else {
      throw new Error('wrong direction. Use "left" or "right".');
    }
  
    return array;
  }
  
  const arr = [1, 2, 3];
  
try{
//   console.log(rotate(arr, 1, 'left'));  // Output: [2, 3, 1]
//   console.log(rotate(arr, 1));          // Output: [3, 1, 2]
//   console.log(rotate(arr, 2));          // Output: [2, 3, 1]
}catch (e){
console.log(e.name+": "+e.message);
}


