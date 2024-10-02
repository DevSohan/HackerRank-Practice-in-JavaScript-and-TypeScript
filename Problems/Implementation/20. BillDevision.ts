function bonAppetit(bill: number[], k: number, b: number): void {
    // k = ith number of item anna did not eat
    // b = chargedBill
    // sum of total bills without anna / 2 = actual
    // b - actual == Bon Appetit or b -actual
    let actualTotal = 0;
    let actualPortion;

    for(let i = 0; i < bill.length; i++){
        if(i !== k) actualTotal += bill[i]
    }

    actualPortion = actualTotal / 2

    console.log((b == actualPortion) ? "Bon Appetit" : b - actualPortion)
}