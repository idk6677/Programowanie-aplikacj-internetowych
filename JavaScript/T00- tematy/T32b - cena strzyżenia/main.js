function showPrice() {
    const hairLengths = document.getElementsByName('hairLength');
    let selectedValue;
    for (const hairLength of hairLengths) {
        if (hairLength.checked) {
            selectedValue = hairLength.value;
            break;
        }
    }

    const resultElement = document.getElementById('result');
    if (selectedValue) {
        resultElement.textContent = 'Cena strzyżenia: ' + selectedValue + ' zł';
    } else {
        resultElement.textContent = 'Proszę wybrać długość włosów.';
    }
}