let numeroDeAlunos = 10;

    for (let contador = 0; contador < numeroDeAlunos; contador++) {
        
        if (contador == 0) {
            console.log ("zerooooo!")
        }else if (contador % 2 == 0) {
            console.log ("o número " + contador + " é par")
        } else {
            console.log(`O número ${contador} é impar`)
        }

    }
let contador = 0
while (contador < numeroDeAlunos) {
        if (contador == 0) {
            console.log ("zerooooo!")
        }else if (contador % 2 == 0) {
            console.log ("o número " + contador + " é par")
        } else {
            console.log(`O número ${contador} é impar`)
        }
        contador++
}

let nomeDeAluno = ["Marcel", "Franklin", "Rita", "Afrânio"]

for (let nome of nomeDeAluno) {
    console.log(`Esta pessoa se chama ${nome}`)

}