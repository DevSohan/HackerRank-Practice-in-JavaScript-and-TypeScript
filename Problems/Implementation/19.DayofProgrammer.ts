function dayOfProgrammer(year: number): string {
    // if leapyear, the date is 12.09
    // if regular years, then the date is 13.09
    // if 1918, then the date is 27.09
    // 1700 - 1917 - julian calander - lear year divisible by 4
    // from 1919, either devisible by 400 or divisible by 4 but not by 100
    let text:string = "";
    if(year < 1918){
        const leapYear:boolean = (year % 4 == 0) ? true : false
        text = leapYear ? "12.09" : "13.09"
    }else if(year == 1918){
        text = "26.09"
    }else{
        let leapYear:boolean;
        if(year % 400 == 0) leapYear = (year / 4) ? true : false
        else if(year % 4 == 0 && year % 100 != 0) leapYear = (year / 4) ? true : false
        else leapYear = false
        console.log(leapYear)
        text = leapYear ? "12.09" : "13.09"
    }

    return `${text}.${year}`

}