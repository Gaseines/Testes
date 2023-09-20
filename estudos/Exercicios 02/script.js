
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = []

for(const elemento of arr){
    if(elemento % 2 != 0){
        semPares.push(elemento)
    }
}

console.log(semPares)

function classificarNumero(num){
    if(num > 0 && num % 2 ==0){
        return'Positivo e Par'
    }else if(num > 0 && num % 2 != 0){
        return'Positivo e Impar'
    }else if(num < 0){
        return'Negativo'
    }else{
        return'Neutro'
    }
}

console.log(classificarNumero(5));
console.log(classificarNumero(10));
console.log(classificarNumero(-5));
console.log(classificarNumero(0));
