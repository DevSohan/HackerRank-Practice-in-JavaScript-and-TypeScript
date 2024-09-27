function migratoryBirds(arr) {
    const counter = {}

    const arrSort = arr.sort((a,b) => a - b)
    for(let i = 0; i < arrSort.length; i++){
        if(counter[arrSort[i]]) counter[arrSort[i]] += 1
        else counter[arrSort[i]] = 1
    }
    let minKey
    let maxCount = 0
    Object.entries(counter).forEach(([key, value]) => {
        if(maxCount < value){
            maxCount = value
            if(minKey && parseInt(minKey) > parseInt(key)) return
            else minKey = key
            
        }
    })
    return minKey

}