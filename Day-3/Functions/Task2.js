function f(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('parameter type should be an array');
    }
  
    if (arr.length === 0) {
      throw new Error('parameter cannot be empty');
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        throw new Error('parameter should only contain numbers');
      }
    }
  
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }

  

  try {
    f([1, 2, 3]);
    // f(1, 2, 3); 
    // f("Content"); 
    // f([]); 
    // f(["🧛🏼", "👨🏽‍🔧", 5, "dogs"]); 
  } catch (error) {
    console.log(error.name+": "+error.message);
  }
  