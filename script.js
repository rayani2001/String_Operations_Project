document.getElementById("calculate").addEventListener("click", () => {
    const str1 = document.getElementById("string1").value;
    const str2 = document.getElementById("string2").value;
    const str3 = document.getElementById("string3").value;

    // Example: Perform a random operation
    const operations = [
        () => `String length of 1: ${str1.length}`,
        () => `String slice(0, 3): ${str1.slice(0, 3)}`,
        () => `String concat: ${str1.concat(" ", str2)}`,
        () => `String replace: ${str1.replace("a", "@")}`,
    ];

    // Choose a random operation
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    document.getElementById("result").innerText = `Result: ${randomOperation()}`;
});

document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("string1").value = "";
    document.getElementById("string2").value = "";
    document.getElementById("string3").value = "";
    document.getElementById("result").innerText = "Result: ";
});

