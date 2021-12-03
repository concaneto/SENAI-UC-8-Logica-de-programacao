var listadePreco = ["Filtro de Ar", "Motor", "Amortecedor"]

if (listadePreco.length < 2) {
    // é possível cadastrar
    console.log("É possível cadastrar mais peças")
} else {
    // não é mais possível cadastrar
   console.log ("Não é possível cadastrar mais peças!!!")
}

// medindo o peso

let peso = 50;
if (peso < 100) {
  
  // peso muito baixo
    console.log ("A peça deve ter no mínimo 100g")

// peso correto
}else {
    console.log("a peça possui peso adequado")

}

// nome tem que ter 3 dígitos... vamos conferir

let nomePeca = "disco de freio"

if (nomePeca.length > 3) {

    console.log ("nome da peça está adequado para cadastro")
} else {

    console.log ("O nome deve ter mais que 3 caracteres, digite um nome adequado")
}

switch (nomePeca.length) {
    case 0:
    console.log ("o nome da peça não pode ser vazio")
    break;

    case 1:
    case 2:
    case 3:
    console.log ("O nome deve ter mais de 3 caracteres, digite ")

    default:
            console.log("nome da peça está adequado")
            break;
}