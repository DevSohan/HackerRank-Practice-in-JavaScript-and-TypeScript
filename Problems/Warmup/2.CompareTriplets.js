/**
 * Problem URL: https://www.hackerrank.com/challenges/compare-the-triplets/problem
 * 
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */

function compareTriplets(a, b) {
    let atotalPoint = 0;
    let btotalPoint = 0;
    if(a[0] > b[0]){
        atotalPoint ++;
    } else if (a[0] < b[0]){
        btotalPoint ++
    }
    
    if(a[1] > b[1]){
        atotalPoint ++;
    } else if (a[1] < b[1]){
        btotalPoint ++
    }
    if(a[2] > b[2]){
        atotalPoint ++;
    } else if (a[2] < b[2]){
        btotalPoint ++
    }
    
    return [atotalPoint, btotalPoint]

}