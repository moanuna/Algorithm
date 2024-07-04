function solution(money) {
    let americano = 5500;
    const glass = Math.floor(money/americano);
    const change = money % americano;
    const answer = [glass,change];
    return answer;
}