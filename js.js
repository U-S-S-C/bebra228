function fn (num) {
    let n, sum;
    n = 0;
    sum = 0;
    for(let i = num; Math.floor(i) > 0; i/=10) n++;
    
    for(let j = num; Math.floor(j) > 0; j = Math.floor(j/10)) {
      sum += (j%10)**n;
    }
    return sum == num;
  }