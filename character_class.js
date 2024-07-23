function searchCharacterClasses(str) {
    // Define the patterns for different character classes
    const digitPattern = /\d/g;
    const uppercasePattern = /[A-Z]/g;
    const lowercasePattern = /[a-z]/g;
    const specialCharPattern = /[^a-zA-Z0-9\s]/g;

    // Find matches for each pattern in the string
    const digits = str.match(digitPattern) || [];
    const uppercaseLetters = str.match(uppercasePattern) || [];
    const lowercaseLetters = str.match(lowercasePattern) || [];
    const specialChars = str.match(specialCharPattern) || [];

    return {
        digits,
        uppercaseLetters,
        lowercaseLetters,
        specialChars
    };
}
const testString1 = "Hello World! 123";
const testString2 = "JavaScript123$%^";
const testString3 = "aBcDeFg123456";

console.log(searchCharacterClasses(testString1));

console.log(searchCharacterClasses(testString2));
