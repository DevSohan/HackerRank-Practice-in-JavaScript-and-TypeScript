function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const appleRange = apples.map(apple => apple + a)
    const orangeRange = oranges.map(orange => orange + b)
    
    const appleinHouse = appleRange.filter(item => (item >= s && item <= t))
    console.log(appleinHouse.length)
    const orangeinHouse = orangeRange.filter(item => (item >= s && item <= t))
    console.log(orangeinHouse.length)
}