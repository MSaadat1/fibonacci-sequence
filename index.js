//fibonacci sequence
//what is fibonacci: the sum of two previous numbers
//it mostly starts with 0 and 1
// f(0) = 0 and f(1) = 1
// f(2) = f(1) + f(0) = 1 and so on ....
function genFib(n){
    if(n === 0) return [];   // case when n = 0
    if(n === 1) return [0];  // case when n = 1
    const fib = [0,1];   // starts with 0 and 1
    for(let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n).join(',');  // if we return it with comma-separated string
}

console.log(genFib(5));