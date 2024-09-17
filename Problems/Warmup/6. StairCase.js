function staircase(n) {
    for(let i = n-1; i >= 0; i--){
        console.log(" ".repeat(i)+"#".repeat(n-i))
    }

}