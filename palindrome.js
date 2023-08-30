function isPalindrome(number) {
    const originalNumber = number;
    let reversedNumber = 0;

    while (number > 0) {
        const lastDigit = number % 10;
        reversedNumber = reversedNumber * 10 + lastDigit;
        number = Math.floor(number / 10);
    }

    return originalNumber === reversedNumber;
}

const numToCheck = 12321; 
if (isPalindrome(numToCheck)) {
    console.log(`${numToCheck} is a palindrome.`);
} else {
    console.log(`${numToCheck} is not a palindrome.`);
}
