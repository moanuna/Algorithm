function solution(my_string) {
    var letters = ['a','e','i','o','u'];
    for(i=0;i<letters.length;i++){
            my_string = my_string.replaceAll(letters[i],'')
    }
    return my_string.split('').join('')
}

