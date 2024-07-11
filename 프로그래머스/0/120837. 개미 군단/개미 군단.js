function solution(hp) {
    var first = Math.floor(hp/5);
    var second = Math.floor((hp-first*5)/3);
    var third = hp - first*5-second*3;
    var answer = first+second+third;
    return answer;
}