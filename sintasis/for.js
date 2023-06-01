function azar (){
    return Math.floor(Math.random()*100)
}



matriz =[[azar(),azar(),azar(),azar()],[azar(),azar(),azar(),azar()],[azar(),azar(),azar(),azar()],[azar(),azar(),azar(),azar()]] 




matriz[0].sort((a, b) => a - b)
matriz[1].sort((a, b) => a - b)
matriz[2].sort((a, b) => a - b)
matriz[3].sort((a, b) => a - b)




console.log(matriz[0])
console.log(matriz[1])
console.log(matriz[2])
console.log(matriz[3])



let opc = []


opc.push(matriz[0].splice(0,4))
opc.push(matriz[1].splice(0,4))
opc.push(matriz[2].splice(0,4))
opc.push(matriz[3].splice(0,4))

let datos = opc.flat()
console.log(datos)



datos.sort((a, b) => a - b)

console.log(datos)

let matriz2 = []
var doc = []

matriz2.push(datos.splice(0,4))

doc =(datos.splice(0,4))
matriz2.push(doc.reverse())

matriz2.push(datos.splice(0,4))

doc =(datos.splice(0,4))
matriz2.push(doc.reverse())

console.log(matriz2[0])
console.log(matriz2[1])
console.log(matriz2[2])
console.log(matriz2[3])
