function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1 || n === 2) return 1;
      let prev1 = 1, prev2 = 1, current;
      for (let i = 3; i <= n; i++) {
      current = prev1 + prev2;
      prev1 = prev2;
      prev2 = current;
    }
      return current;
}
  console.log(fibonacci(43)); 
  console.log(fibonacci(101)); 
  console.log(fibonacci(227)); 
  console.log(fibonacci(491)); 
  console.log(fibonacci(881));