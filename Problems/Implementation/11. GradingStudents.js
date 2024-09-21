function gradingStudents(grades) {
    const finalResults = [];
    grades.map((grade) => {
        if(grade <= 40){
            if(grade >= 38){
                finalResults.push(40)
            }else{
                finalResults.push(grade)
            }
        }else if(((parseInt(grade/5) + 1)*5) - grade  < 3){
            finalResults.push((parseInt(grade/5) + 1)*5)
        }else{
            finalResults.push(grade)
        }
    })
    return finalResults

}