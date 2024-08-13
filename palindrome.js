function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
}

let input = "A man, a plan, a canal, Panama";
if (isPalindrome(input)) {
    console.log(`"${input}" is a palindrome.`);
} else {
    console.log(`"${input}" is not a palindrome.`);
}
