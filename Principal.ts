declare function require(msg : string) : any;
var readline = require('readline-sync');

import {Carro} from "./Carro";{
    let car : Carro = new Carro();

    while(true){
        let statusCar : string = "\n" +
        "mostrar - Informações sobre o carro \n" +
        "in - adiciona um passageiro ao carro\n" +
        "out - remove um passageiro do carro\n" +
        "abastecer - abastece o carro\n" +
        "andar - andar a distância determinada pelo usuário\n" +
        "sair - para o programa";
        console.log (statusCar);
        let ações : string = readline.question("\n" +"Determine uma atividade do carro: ");
        if (ações == "sair"){
            console.log("Até a próxima");
            break;
        }
        switch(ações){
            case "mostrar" :
                console.log("Passageiros: " + car.pass + " Gasolina: "+ car.gas + " Quilometragem: "+ car.km);
                break;
            case "in" : 
                car.entrar();
                break;
            case "out" :
                car.sair();
                break;
            case "abastecer" :
                let valor : number = Number(readline.question("Quantidade de gasolina: "));
                car.abastecer(valor);
                break;
            case "andar" :
                let andar : number = Number (readline.question("Distancia a ser percorrida: "));
                car.andar(andar);
                break;
            default :
            console.log("Comando Inválido")




        }


    } 
}