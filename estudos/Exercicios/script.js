const nome = "Gabriel"

if(nome == "Gabriel"){
    console.log(`Olá ${nome}, seja bem vindo`)
}

for(i = 0; i <= 19; i++){
    if(i == 2 || i == 3 || i ==18){
        let numero = Math.pow(i,2)
        console.log(numero)
    }
}



let velocidade = 150

if(velocidade > 100){
    console.log(`Multado, sua velocidade foi de ${velocidade}km/h e maxima permitida é de 100km/h`)
}else{
    console.log('Velocidade permitida!')
}



let idade = 18
let cnh = true

if(idade >= 18 && cnh == true){
    console.log('Pode dirigir')

}else if(idade < 18){
    console.log('não pode dirigir, é menor de idade')
}else{
    console.log('Você precisa da CNH para dirigir')
}



for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        console.log(`O número ${i} é par`)
    }else{
        console.log(`O número ${i} é impar`)
    }
}


let num = 17
let divisoes = 0

for(let h = 1; h <= num; h++){
    if(num % h == 0){
        divisoes++
    }
}

if(divisoes == 2){
    console.log('o número é primo')
}else{
    console.log('o número não é primo')
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = []

for(const elemento of arr){
    if(elemento % 2 != 0){
        semPares.push(elemento)
    }
}

console.log(semPares)

