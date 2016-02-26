range = function(n) {
    results = [];
    for (i=0; i<=n; i++) {
        if (i%3 === 0 || i%5 === 0) {
            results.push(i);
        }
    }
    return results;
}

console.log(range(999).reduce(function(a,b){return a+b}));