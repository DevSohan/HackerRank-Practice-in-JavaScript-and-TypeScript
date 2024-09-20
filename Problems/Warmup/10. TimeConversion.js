function timeConversion(s) {
    // Write your code here
    const hms = s.slice(0, s.length - 2).split(":")
    const ampm = s.slice(-2)
    hms[0] = ampm == "PM" && parseInt(hms[0]) != 12 ? parseInt(hms[0]) + 12 : parseInt(hms[0])
    hms[0] = ampm == "AM" && hms[0] == "12" ? "0" : parseInt(hms[0])
    hms[0] = parseInt(hms[0]) < 10 ? "0"+ hms[0] : hms[0]
    
    return hms.join(":")
}