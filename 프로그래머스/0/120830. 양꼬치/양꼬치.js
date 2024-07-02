function solution(n, k) {
    var meet = 12000 * n;
    var drink = 2000 *k;
    var service = Math.floor(n/10);
    var answer = meet + drink -(service *2000);
    return answer;
}