function areThereDuplicates(...arr) {
    const arrSort = arr.sort((a,b) => {
        if(a < b) return -1
        if(a > b) return 1
        return 0
    })

    let start = 0
    let next = 1
    while(next < arrSort.length){
        if(arrSort[start] == arrSort[next]) return true
        start ++
        next ++
    }

    return false
}

//areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
//areThereDuplicates('a', 'b', 'c', 'a') // true 