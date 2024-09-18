/*
Leap Year Problem

বাং
Problem Statement
Write a program that checks if a year entered by the user is a leap year or not.

Input
The input consists of an integer.

Output
Output will print the type of the year whether it is leap year or not.

Constraints
0 ≤ |S| ≤ 231 - 1
Example-1:
Enter a year

Input:
1900
Output:
1900 is not a leap year.
Example-2:
Enter a year

Input:
2020
Output:
2020 is a leap year.    

লিপইয়ারের সমস্যা

EN
সমস্যার বিবরণ
এমন একটি প্রোগ্রাম লিখ যেখানে ইউজার একটি বছরের নাম লিখলে তা লিপইয়ার কিনা জানানো হবে।

ইনপুট
ইনপুটটি হচ্ছে একটি integer।

আউটপুট
আউটপুটটি হচ্ছে বছরটির টাইপ এটি লিপইয়ার নাকি লিপইয়ার না তা প্রিন্ট করবে।

সীমাবদ্ধতা
0 ≤ |S| ≤ 231 - 1
উদাহরণ-১:
Enter a year

ইনপুট:
1900
আউটপুট:
1900 is not a leap year.
উদাহরণ-২:
Enter a year

ইনপুট:
2020
আউটপুট:
2020 is a leap year.    

*/

function main (input) {
    
    let year = parseInt(input);

    leapYear(year);
   
    function leapYear(year){

        if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ){
        
        console.log(year,"is a leap year.");
        }
        else{
            console.log(year,"is not a leap year.")
        }
    }
    
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});









