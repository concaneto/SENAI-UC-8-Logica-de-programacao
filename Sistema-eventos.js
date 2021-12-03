/* REGRAS DO NEGÓCIO
1. se a data do evento for posterior a atual, permitir o evento;
senão, alertar que o cadastro não será permitido por data inválida

2. se o participante for maior de 18 anos, permitir o cadastro;
senão alertar que o cadastro não é permitido pela idade;

3. Listar participantes e palestrantes por evento;

4. enquanto a quantidade de participantes for inferior a 100 {
    permitir cadastro};
    senão, 
    alertar que o cadastro não será permitio por ter excedido o limite;

5. Criar fluxograma com todos os requisitos que devem ser atendidos pelo sistema;
*/

/* como não faz sentido a pessoa preencher um monte de cadastro,
 e no final não conseguir cadastrar, por ter lotado, 
 vou colocar a regra 4 na frente.
*/

// array dos participantes (regra 4)
// function (cadastro)

let participantes = ["João", "José", "Marta", "Maria"] 

/*mais para frente podemos trocar por:
while (participantes.length <= 100) {

    function (cadastro)
}

*/
let confirmacao = 1

if (participantes.length > 100) {


    console.log ("Inscrições encerradas. Número de participantes atingiu o limite")
    confirmacao = 0

} else {

    console.log ("Inscrições abertas. Garanta já a sua vaga")
}

//verificando a data do evento

let hoje = new Date()
console.log ("hoje é dia " + hoje.getDate() + "/" + (hoje.getMonth () + 1 ) + "/" + hoje.getFullYear())

// indicação da data do evento (regra 1)
console.log ("insira a data do seu evento:")
//leia a data do evento
let dataDoEvento = new Date(2021,11,5)
console.log ("Seu evento será " + dataDoEvento.getDate() + "/" + (dataDoEvento.getMonth () + 1 ) + "/" + dataDoEvento.getFullYear())

if (hoje.getTime() > dataDoEvento.getTime()) {
	console.log("Acho que não vai rolar... esse dia já passou, amigo!");
    confirmacao = 0
}
else {
	console.log("Pode prosseguir com o cadastro do seu evento :) ");
}

if (confirmacao != 0) {
//  indicação da idade (Regra 2) - somente se a data estiver ok...
    console.log ("Qual a sua idade?")
// leia idade
    let idade = 18
    
    // testando funcionalidade
    //console.log ("você tem " + idade + " anos")
    console.log ("você tem %i anos", idade)

    if (idade < 18) {
    
    console.log ("Sorry... muito novo para continuar o cadastro.")
    confirmacao = 0
    }
}
// Lista de participantes e palestrantes (Regra 3)
let palestrantes = ["Jessica", "Claudia", "Ana", "Rodrigo"]

// caso tenha algum motivo para não proceder a inscrição, a mensagem irá mudar

if (confirmacao != 0) {
    console.log ("sua inscrição foi realizada com sucesso!!")


    console.log ("Lista de inscritos:")
    console.log (participantes)

    console.log ("lista de palestrantes:")
    console.log (palestrantes)
} else {

    console.log ("Infelizmente não pudemos contar com você desta vez... nos vemos na próxima!")
}

//fim :)