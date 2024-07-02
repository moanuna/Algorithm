function solution(array) {
    const newArr = array.sort((a, b) => a - b);
    const midNum = Math.floor(newArr.length/2);
    const answer = newArr[midNum];
    return answer;
}
