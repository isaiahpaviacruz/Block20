document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.querySelector('input[name="number"]');
    const addButton = document.querySelector('button');
    const numberBankOutput = document.querySelector('#numberBank output');
    const oddsOutput = document.querySelector('#odds output');
    const evensOutput = document.querySelector('#evens output');
    const sortOneButton = document.querySelector('#sortOne');
    const sortAllButton = document.querySelector('#sortAll');
  
    const numberBank = [];
  
    addButton.addEventListener('click', function (event) {
      event.preventDefault();
      const enteredNumber = parseInt(numberInput.value);
      if (!isNaN(enteredNumber)) {
        numberBank.push(enteredNumber);
        numberBankOutput.textContent = numberBank.join(', ');
        numberInput.value = '';
      }
    });
  
    sortOneButton.addEventListener('click', function () {
      const firstNumber = numberBank.shift();
      if (firstNumber !== undefined) {
        if (firstNumber % 2 === 0) {
          evensOutput.textContent += firstNumber + ', ';
        } else {
          oddsOutput.textContent += firstNumber + ', ';
        }
        numberBankOutput.textContent = numberBank.join(', ');
      }
    });
  
    sortAllButton.addEventListener('click', function () {
      numberBank.forEach((number) => {
        if (number % 2 === 0) {
          evensOutput.textContent += number + ', ';
        } else {
          oddsOutput.textContent += number + ', ';
        }
      });
      numberBankOutput.textContent = '';
      numberBank.length = 0;
    });
  });