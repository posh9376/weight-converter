let input = document.querySelector('#input');
output = document.querySelector('.output')

input.addEventListener('input', convert)

function convert(e) {
    let inpt = e.target.value
    let kgs = inpt * 2.20462
    output.textContent =`Your weight in Pounds is: ${kgs}`
}

