function addNumbers() {
    // Get the input values
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    {
        // Perform the addition
        var sum = num1 + num2;

        // Display the result
        document.getElementById("result").textContent = "Result: " + sum;
    }
}
