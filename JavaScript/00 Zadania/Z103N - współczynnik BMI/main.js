const weight = document.querySelector('#w')
const height = document.querySelector('#h')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let w = parseInt(weight.value)
    let h = parseFloat(height.value)

    function BMI(w, h){

        let bmi = w / (h * h)

        if (bmi < 16)
            return `Twoje bmi: ${bmi.toFixed(2)} - wygłodzenie`
        if (bmi > 16 && bmi < 16.99)
            return `Twoje bmi: ${bmi.toFixed(2)} - wychudzenie`
        if (bmi > 17 && bmi < 18.49)
            return `Twoje bmi: ${bmi.toFixed(2)} - niedowaga`
        if (bmi > 18.5 && bmi < 24.99)
            return `Twoje bmi: ${bmi.toFixed(2)} - optimum`
        if (bmi > 25 && bmi < 29.99)
            return `Twoje bmi: ${bmi.toFixed(2)} - nadwaga`
        if (bmi > 30 && bmi < 34.99)
            return `Twoje bmi: ${bmi.toFixed(2)} - otyłość I stopnia`
        if (bmi > 35 && bmi < 39.99)
            return `Twoje bmi: ${bmi.toFixed(2)} - otyłość II stopnia`
        if (bmi >= 40)
            return `Twoje bmi: ${bmi.toFixed(2)} - otyłość III stopnia`
    }

    wynik.innerHTML = `${BMI(w, h)}`

})