function migratoryBirdsTS(arr: number[]): number {
    const counter: { [key: number]: number } = {}


    const arrSort = arr.sort((a, b) => a - b)
    for (let i = 0; i < arrSort.length; i++) {
        if (counter[arrSort[i]]) counter[arrSort[i]] += 1
        else counter[arrSort[i]] = 1
    }
    let minKey: number
    let maxCount: number = 0
    Object.entries(counter).forEach(([key, value]: [string, number]) => {
        if (maxCount < value) {
            maxCount = value
            if (minKey !== undefined && minKey > parseInt(key)) return
            else minKey = parseInt(key)

        }
    })
    return minKey!


}