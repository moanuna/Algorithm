function solution(age) {
    var answer = '';
    var alphabet = ['a','b','c','d','e','f','g','h','i','j'];
    age = age.toString();
    
    for(i=0; i<age.length; i++){
        answer += alphabet[age[i]];
    }
    return answer;
}