// Operations Used: Object Access, Invocation
console.log("What's your name?");

// Operations Used: Object Access, Invocation
process.stdin.on('data', function(data) {

    // Operations Used: Object Access, Invocation
    const name = data.toString().trim();
    
    // Operations Used: Object Access, Variable Access, Invocation   
    console.log(`Hello, ${name}!`);

});