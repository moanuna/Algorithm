function solution(price) {
    var answer = 0;
    if(price<100000){
        answer = price
    }else if(price<300000){
        answer = 0.95 * price
    }else if(price<500000){
        answer = 0.90 * price
    }else {
        answer = 0.80 * price
    }
    return Math.floor(answer)
}