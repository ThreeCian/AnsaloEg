const calc = document.querySelectorAll('.calc')
const show = document.getElementById('showResult')
const operation = document.getElementById('operation')


const dat = document.getElementById('dat')
console.log(dat)

let numero = []
let operacion = []
for (let i = 0; i < calc.length; i++) {
    calc[i].addEventListener('click', (e) => {

        const num = e.target.textContent

        if (num == "+") {

            operation.innerHTML += " + "
            numero = []
            show.innerHTML = ""

        } else if (num == "-") {
            operation.innerHTML += " - "
            numero = []
            show.innerHTML = ""
        } else if (num == "x") {
            operation.innerHTML += " * "
            numero = []
            show.innerHTML = ""
        } else if (num == "÷") {
            operation.innerHTML += " / "
            numero = []
            show.innerHTML = ""
        } else if (num == ".") {
            operation.innerHTML += "."

            show.innerHTML += "."
        } else if (num == "=") {

            show.innerHTML = eval(operation.textContent)

        }
        else {
            numero.push(num)
            console.log(numero)
            show.innerHTML += num
            operation.innerHTML += num


        }


    })
}

const del = document.getElementById('del')

del.addEventListener('click', () => {
    show.innerHTML = ""
    operation.innerHTML = ""
})


