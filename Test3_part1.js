// 1. Write a JavaScript function to check whether an `input` is an array or not. 
// Test Data :
// console.log(is_array('w3resource')); 
// console.log(is_array([1, 2, 4, 0]));
// false
// true

function is_Array(input){
    if (toString.call(iput) === '[object Array]'){
        alert('Input is an Array');
    }else{
        alert('input is not an array');
    }
}
// 2. Write a JavaScript function to clone an array. 
// Test Data :
// console.log(array_Clone([1, 2, 4, 0])); 
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0] 
// [1, 2, [4, 0]]
function array_Clone(arrclone){
    return arrclone.slice(0);
}

//    3. Write a JavaScript function to get the first element of an array. 
//          Passing a parameter 'n' will return the first 'n' elements of the array. 
//    Test Data : 
//    console.log(first([7, 9, 0, -2])); 
//    console.log(first([],3));
//    console.log(first([7, 9, 0, -2],3));
//    console.log(first([7, 9, 0, -2],6));
//    console.log(first([7, 9, 0, -2],-3));
//    Expected Output : 
//    7
//    [] 
//    [7, 9, 0] 
//    [7, 9, 0, -2] 
//    [] 
function first(arr1, n){
    if (arr1 === null || n < 0){
        console.log('[]');
    }if (n === null){
        console.log(arr1[0]);
    }else {
        let result = arr1.slice(0, n);
        console.log(result);
    }

// 4. Write a JavaScript function to get the last element of an array. 
//  Passing a parameter 'n' will return the last 'n' elements of the array. 
// Test Data : 
// console.log(last([7, 9, 0, -2])); 
// console.log(last([7, 9, 0, -2],3)); 
// console.log(last([7, 9, 0, -2],6));
// Expected Output : 
// -2 
// [9, 0, -2] 
// [7, 9, 0, -2]
function last(arr2, n){
    let last1, lastn ;
    if (n == null){
        last = arr2[arr2.length - 1];
        console.log(last1);
    }else {
        lastn = array.slice(Math.max(array.length - n, 0));
        console.log(lastn);
    }
}
// arr.slice(-1).pop();
// arr.slice(-1)[0];

// 5. Write a simple JavaScript program to join all elements of the following array into a string. 
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output : 
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
function arrayString(myColor){
    let output1, output2, output3;
    output1 = myColor.toString();
    output2 = myColor.join();
    output3 = myColor.join('+');
    console.log(output1, output2, output3);
}

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) 
// between each two even numbers. For example if you accept 025468 the 
// output should be 0-254-6-8. 
function dash(input){
    let string1 = input.toString();
    let newstring = [string1[0]];
    for (let i = 1; i < string1.length; i++){
        if ((string1[i-1] % 2 === 0) && (string1[i] % 2 === 0)) {
            newstring.push("-", string[i]);
        }
        else {
            newstring.push(string1[i]);
        }
    }
    alert(newstring.join(''));
}
// 7. Write a JavaScript program to sort the items of an array. 
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

function sortArray(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length - i; j++) {
            if (arr1[j] < arr1[j + 1]) {
                let temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
            }
        }
    }
    console.log(arr1);
}

// 8. Write a JavaScript program to find the most frequent item of an array. 
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times ) 
function frequent(arr1){
    let count = 0;
    let highest = 1;
    let current;

    for (let i = 0; i < arr1.length; i++){
        for (let j = i; j < arr1.length; j++){
            if (arr1[i] == arr1[j]){
                count++;
            }if (highest < count){
                highest = count;
                current = arr1[i];
            }
        }count = 0;
    }console.log(current + "( " + highest +" times ) ") ;
}

// 1. Write a JavaScript function to convert a number from one base to another. 
// Note : Both bases must be between 2 and 36.
// Test Data :
// console.log(base_convert('E164',16,8)); 
// console.log(base_convert(1000,2,8));
// "160544"
// "10"
function base_convert(num1, firstbase, secondbase) {
    if ((firstbase && secondbase) >= 2 || (firstbase && secondbase) <= 36){
        let result = parseInt(num1 + '', firstbase).toString(secondbase);
        console.log(result);
    }else{
        console.log('Bases are not between 2 and 36');
    }
}
// 2. Write a JavaScript function to convert a binary number to a decimal number. 
// Test Data :
// console.log(bin_to_dec('110011')); 
// console.log(bin_to_dec('100'));
// 51 
// 4
function convert(binary) { 
    let decimal = parseInt((binary + '').replace(/[^01]/gi, ''), 2);
    console.log (decimal);
}

// 3. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number. 
// Test Data :
// console.log(dec_to_bho(120,'B')); 
// console.log(dec_to_bho(120,'H')); 
// console.log(dec_to_bho(120,'O'));
// "1111000" 
// "78" 
// "170"

function dec_to_bho(x, base) {
    if (x < 0) {
      x = 0xFFFFFFFF + x + 1;
     } 
    switch (base){  
        case 'B':  
            return parseInt(x, 10).toString(2);
            break;  
        case 'H':  
            return parseInt(x, 10).toString(16);
            break;  
        case 'O':  
            return parseInt(x, 10).toString(8);
            break;  
        default:  
        return("invalid error");  
    }  
}
// 4. Write a JavaScript function to generate a random integer. 
// Test Data :
// console.log(rand(20,1)); 
// console.log(rand(1,10)); 
// console.log(rand(6)); 
// console.log(rand()); 
// 15 
// 5 
// 1 
// 0
function rand(x, y) {
    if (x === null && y === null){
        console.log("0");
    }if (y == null) {
        y = x;
        x = 0;
    }else {
        console.log(x + Math.floor(Math.random() * (y - x + 1)));
    }
}

// 5. Write a JavaScript function to format a number up to specified decimal places. 
// Test Data :
// console.log(decimals(2.100212, 2));
// console.log(decimals(2.100212, 3));
// console.log(decimals(2100, 2));
// "2.10" 
// "2.100" 
// "2100.00"
function decimals(n, d) {
    if ((typeof n !== 'number') || (typeof d !== 'number')){
        console.log('invalid number');
        //console.log() false;
        let decimal = parseFloat(n) || 0;
        let newdecimal = n.toFixed(d);
        console.log(newdecimal);
       }
}

// 6. Write a JavaScript function to find the highest value in an array. 
// Test Data :
// console.log(max([12,34,56,1]));
// console.log(max([-12,-34,0,-56,-1]));
// 56 
// 0
function max(num) {
    if (toString.call(num) !== '[object Array]'){ 
        console.log('not an array');
    }else{
        let highest = Math.max.apply(null, num);
    }   
}

// 7. Write a JavaScript function to find the lowest value in an array. 
// Test Data :
// console.log(min([12,34,56,1])); 
// console.log(min([-12,-34,0,-56,-1]));
// 1 
// -56

function min(num) {
    if (toString.call(num) !== "[object Array]"){ 
        console.log('not an array');
    }else{
        let lowest = Math.min.apply(null, num);
    }
}

// 8. Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers. 
// Test Data :
// console.log(gcd_more_than_two_numbers([3,15,27])); 
// console.log(gcd_more_than_two_numbers([5,10,15,25]));
// Output :
// 3 
// 5
function gcd(n1, n2) {      //compare 2 number gcd
    let temp;
    n1 = Math.abs(n1);  //negative numbers
    n2 = Math.abs(n2);
    while(n2) {
        temp = n2;
        n2 = n1 % n2;
        n1 = temp;
    }return n1;
}
function gcd_more_than_two_numbers(arr2) {
    let x, y, arrlength;

    arrlength = arr2.length;
    x = arr2[0];
    for (let i = 1; i < arrlength; i++ ) {
        y = arr2[i];
        x = gcd(x , y);   //calls previous gcd function
    }return x;
    console.log (x);
}
// 9. Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers. 
// Test Data :
// console.log(lcm_more_than_two_numbers([100,90,80,7]));
// console.log(lcm_more_than_two_numbers([5,10,15,25]));
// Output :
// 25200 
// 150
function lcm_more_than_two_numbers(num1, num2) {
    let lcm;
    lcm =  Math.abs((num1 * num2) / gcd(num1, num2));
    console.log (lcm);
 }
 
function gcd(n1, n2) {      //same gcd
    let temp;
    n1 = Math.abs(n1);  //negative numbers
    n2 = Math.abs(n2);
    while(n2) {
        temp = n2;
        n2 = n1 % n2;
        n1 = temp;
    }return n1;
}

//  1. Write a JavaScript function to check whether an `input` is a string or not. 
// Test Data :
// console.log(is_string('w3resource')); 
// true
// console.log(is_string([1, 2, 4, 0]));
// false
function is_string(input){
    if (typeof input === 'string'){ 
        console.log('true');
    }else{
        console.log('false');
    }
}

// 2. Write a JavaScript function to check whether a string is blank or not. 
// Test Data :
// console.log(is_Blank('')); 
// console.log(is_Blank('abc'));
// true 
// false
function is_Blank(stringx) {
    if (stringx.length === 0){
        console.log('true');
    }else{
        console.log('false');
    }

// 3. Write a JavaScript function to split a string and convert it into an array of words. 
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]
function string_to_array(stringdata) {
    let wordsarray = stringdata.trim().split(' ');
    console.log(wordsarray);
}

// 4. Write a JavaScript function to extract a specified number of characters from a string. 
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"
function truncate_string(input, length){
    let str = input.substring(0, length);
    console.log(str);
}

// 5. Write a JavaScript function to convert a string in abbreviated form. 
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."
function abbrev_name(strdata) {
    let abb = strdata.trim().split(" ");
    if (abb.length > 1) {
        let name = (abb[0] + ' ' + abb[1].charAt(0) + '.');
        console.log(name);
    }
}

// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user. 
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"
function protect_email(email) {
    let first, separate, x;
    separate = email.split("@");
    x = separate[0];
    first = x.length / 2;
    let name = x.substring(0, (x.length - first));
    let com = separate[1];
    console.log(x + "...@" + com);
}
// 7. Write a JavaScript function to capitalize the first letter of each word in a string. 
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

function capitalize_Words(words){
    let nospaces, capitalWords;
    nospaces = words.split(" ");
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(0, 1);
    }
    
    capitalWords = words.join(' ');
    console.log(capitalWords);
}