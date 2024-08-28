const inputValue = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const checkUserInput = () => {
    // Convert user input into an integer.
    const numberValue = parseInt(inputValue.value);

    // Check whether user has entered a value.
    if (inputValue.value === "") {
        output.textContent = 'Please enter a valid number';
        output.classList.add('is-error');
    }
    // Check if value is less than or equal to zero
    else if (numberValue < 1) {
        output.textContent = 'Please enter a number greater than or equal to 1';
        output.classList.add('is-error');
    }
    // Check whether value is greater than or equal to 4000
    else if (numberValue >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999';
        output.classList.add('is-error');
    }
    // If everything checks out then value may be converted to a roman numeral
    else {
        output.textContent = convertToRoman(numberValue);
        output.classList.add('is-correct');
    }

    return;
}

convertBtn.addEventListener('click', checkUserInput);

const convertToRoman = (num) => {
    // Create A Roman Numeral to Number Lookup table
    const lookupTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    // Create an accumulator that stores the string values/roman characters
    let accumulator = '';

    // Loop through the lookup table
    for (const key in lookupTable) {
        const value = lookupTable[key];

        // While the number is greater than the value in the lookup table
        while (num >= value) {
            num -= value;
            accumulator += key;
        }
    }

    return accumulator;
}