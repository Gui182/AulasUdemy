const prod1 = {}//objeto
prod1.nome = 'Celular Ultra Mega'//pode se criar um objeto dinamico
prod1.preco = 7998.90
prod1['Desconto Legal'] = 0.40//evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}// colocando objeto dentro de objeto

console.log(prod2)