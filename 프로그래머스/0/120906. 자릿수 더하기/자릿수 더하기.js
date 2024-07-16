function solution(n) {
    const arr=n.toString().split('');
    var answer =0;
    for(i=0;i<arr.length;i++){
        answer +=Number(arr[i])
    }
    return answer;
}