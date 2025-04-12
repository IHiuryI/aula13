let cont = 0;

while (cont <=10) {
    console.log(`Cont vale: ${cont}`)
    cont++
}
//Quando usar o for? R: Quando você ja sabe quantas vezes quer repetir algo.
//Quando usar o While? R: Quando você não sabe quantas vezes repetir algo e espera algo mudar.

let senha = Number.parseInt(prompt('Digite sua senha:'))

/* console.log(senha) */

while (senha !== 1234 ) {
    alert(`Senha incorreta!`)
    senha = Number.parseInt(prompt('Digite sua senha:'))
}
alert(`Acesso autorizado`)