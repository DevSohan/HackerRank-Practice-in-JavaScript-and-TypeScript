function birthdayCakeCandles(candles) {
    const sortedCandles = candles.sort((a,b) => {
        return a - b
    })
    const highValue = sortedCandles[sortedCandles.length - 1]
    const filtered = sortedCandles.filter(item => item == highValue)
    
    return filtered.length
}