function reversedString(str){
    let str2Arr = str.split('');
    let reversedStr = ""
    for(let i = str2Arr.length - 1; i >= 0; i--){
        reversedStr+=str2Arr[i]
    }
    return reversedStr
}

// reversedString('Gabriel') -> 'leirbaG'