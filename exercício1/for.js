
let passo = 2;

for (let cont = 0; cont <= 6; cont+= passo) {

console.log (`O contador vale ${cont}`)
}

let tarefas = ["Acordar","Comprar leite", "Tomar café", "Estudar JavaScript", "Amimir"]

for (let c = 0; c < tarefas.length; c++) {
    /* console.log(tarefas[c]) */
    resultado.innerHTML += `<p>${tarefas[c]}</p>`
}