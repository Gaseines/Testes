let nome = "Gabriel"

for(let i = 0; i <= 10; i = i + 1){


    if(i == 3){
        nome = "luiza"
    }

    if(i == 5 && nome == "luiza"){
        console.log("nome é luiza, para")
        break
    }

    console.log(i)

}