function testRegex(pattern, str) {
    // Create a regular expression object from the pattern
    const regex = new RegExp(pattern);

   return regex.test(str);
}

// Test the function with various patterns and strings
console.log(testRegex('hello', 'hello world')); 
console.log(testRegex('world$', 'hello world')); 
console.log(testRegex('^hello', 'hello world')); 
console.log(testRegex('\\d+', 'abc123def')); 
console.log(testRegex('\\d{3}', 'abc123def')); 
console.log(testRegex('abc', 'defghi')); 
console.log(testRegex('[a-z]', '1234')); 
console.log(testRegex('[a-zA-Z]', '1234')); 
console.log(testRegex('[a-zA-Z]', '1a234')); 
