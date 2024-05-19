function sumAll(arr) {
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(sumAll([1, 4])); 
  console.log(sumAll([4, 1]));  
  console.log(sumAll([5, 10]));