// Select elements
const age = document.getElementById("age");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const gender = document.getElementById("gender");
const form = document.getElementById("bmi-form");
const resultDiv = document.getElementById("bmi-result");
resultDiv.style.visibility = "hidden";

// Calculate BMI
function calculateBMI(event) {
    event.preventDefault(); // Prevent form submission

    // Convert inputs to numbers
    const weightValue = parseFloat(weight.value);
    const heightValue = parseFloat(height.value) / 100;  // convert to meters

    // Validate input
    if (!weightValue || !heightValue) {
        resultDiv.innerHTML = `<p class="error">Please enter valid weight and height!</p>`;
        return;
    }

    // BMI calculation
    const bmi = (weightValue / (heightValue ** 2)).toFixed(2);

    // Generate result
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display result
    resultDiv.innerHTML = `
        <p>Your BMI value is <span class="bmi-value">${bmi}</span>, which means you're <span class="category">${category}</span>.</p>
    `;
    resultDiv.style.visibility = "visible";
}

// Add event listener to form
form.addEventListener("submit", calculateBMI);
