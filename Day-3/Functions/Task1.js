function getDivisors(number) {
    if (typeof number !== 'number') {
      throw new Error('parameter type is not a Number');
    }
  
    if (number <= 0) {
      throw new Error('parameter can\'t be a 0');
    }
  
    const divisors = [];
  
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }
    console.log(divisors);
    return divisors;
  }

  
  try {
    getDivisors(12);
    // getDivisors("Content");
    // getDivisors(0);
  } catch (error) {
    console.log(error.name+": "+error.message);
  }
  



