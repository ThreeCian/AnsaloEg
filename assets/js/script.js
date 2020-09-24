
const guardadoBG = [
    { neon: false, position: 1 },
    {
        dark: false, position: 2
    }];
const bgStorage = () => {
    const guardado = localStorage.getItem('bg');
    for (let i = 0; i < guardadoBG.length; i++) {
        const element = guardadoBG[i];


    }
    if (guardado == 'neon') {
        document.getElementById('body').className = 'neon';
    } else if (guardado == 'dark') {
        document.getElementById('body').className = 'dark';
    }
};
bgStorage();
const neon = document.getElementById('Switch1');
neon.addEventListener('click', () => {
    for (let i = 1; i < guardadoBG.length; i++) {
        const element = guardadoBG[i];

    }
    console.log(neon.checked);
    if (neon.checked) {
        const body = document.getElementById('body');
        body.className = "neon";
        localStorage.setItem("bg", "neon");

    } else {

    }

});

const dark = document.getElementById('Switch2');
dark.addEventListener('click', () => {

    const body = document.getElementById('body');
    body.className = "dark";
    localStorage.setItem("bg", "dark");

});

//teclado


const cajaL = document.getElementById('letras')
const cajaN = document.getElementById('Numeros')

const letra = document.querySelectorAll('.letra')

let guardarL = [];
let guardarN = [];

const validadorN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const validadorL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', "I", "J"]
console.log(guardarL.length)
console.log(guardarL)

for (let i = 0; i < letra.length; i++) {
    letra[i].addEventListener('click', (e) => {

        tecla = e.target.textContent.split('-');
        //Comparar tamaño si es distinto el tamaño
        if (guardarL.length !== validadorL.length) {
            //almacena hasta que el tamaño de guardar L sea <= Validador L
            if (guardarL.length <= validadorL.length) { // Esto valida que las letras  que almacenaste 
                let tamañoArrayquesellena = guardarL.length;
                console.log(validadorL[tamañoArrayquesellena]);
                console.log(tecla[0]);

                if (tecla[0] === validadorL[tamañoArrayquesellena]) {
                    guardarL.push(tecla[0])
                    cajaL.innerHTML += tecla[0];
                }
                else {
                    swal("¡Oh Oh!", "debes seleccionar las letras en el orden correcto", "error");
                }
                console.log(guardarL);
            }
        }

        else {
            if (guardarN.length <= validadorN.length) {
                if (tecla[1] == validadorN[guardarN.length]) {
                    guardarN.push(tecla[1])
                    cajaN.innerHTML += tecla[1];
                }
                else {
                    swal("¡Oh Oh!", "debes seleccionar los números en el orden correcto", "error");
                }
                console.log(guardarN);
            }

            if (guardarL.length === validadorL.length && guardarN.length === validadorN.length) {
                swal("¡Felicidades!", "Haz Completado todos los campos", "success");
            }
        }




    })


}

const btnReset = document.getElementById('btnReset')


btnReset.addEventListener('click', () => {

    cajaN.innerHTML = "";
    cajaL.innerHTML = "";
    guardarL = []
    console.log(guardarL)
    guardarN = []
    console.log(guardarL)
})

const calc = document.getElementById('Calculadora')

calc.addEventListener('click', () => {

    window.location = './assets/pages/calculadora.html'
})