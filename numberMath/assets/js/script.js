let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");

let getP = document.querySelector("p");

let button = document.querySelector("#btn");

button.addEventListener("click", (e) => {
    e.preventDefault();

    let valueA = a.value;
    let valueB = b.value;
    let valueC = c.value;

    const bhaskara = (a, b, c) => {
        let delta = Math.pow(b, 2) - 4 * a * c

        if (delta < 0) {
            getP.innerHTML = 'como o Δ e negativo, não existe raiz real.'
            return
        }

        expressionOn = -(b)
        expressionTwo = Math.sqrt(delta)
        expressionThree = 2 * a

        x1 = (expressionOn + expressionTwo) / expressionThree
        x2 = (expressionOn - expressionTwo) / expressionThree
        
        getP.innerHTML = `Resultado:(${Math.floor(x1)} e ${Math.floor(x2)})`;
        
    }

    bhaskara(valueA, valueB, valueC)


    
})