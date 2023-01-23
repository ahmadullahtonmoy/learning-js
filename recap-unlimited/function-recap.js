function bringSingara(taka){
    let singaraPrice = 10;
    const givenMoney = taka;
    const giveSingara = givenMoney / singaraPrice;
    return giveSingara;
}

const singaraQty = bringSingara(100);
console.log(singaraQty);