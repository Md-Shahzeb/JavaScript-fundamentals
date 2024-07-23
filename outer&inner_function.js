function outerFunction(outerParam) {

    const outerVar = 'I am an outer variable';

    // Define and return the innerFunction
    return function innerFunction(innerParam) {
        
        return `Outer param: ${outerParam}, Outer var: ${outerVar}, Inner param: ${innerParam}`;
    };
}

// Create an instance of the innerFunction by calling outerFunction
const innerFuncInstance = outerFunction('Hello');

// Demonstrate lexical scoping by calling the inner function with an argument
console.log(innerFuncInstance('World')); // Output: Outer param: Hello, Outer var: I
