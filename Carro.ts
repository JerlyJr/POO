export class Carro{
    pass : number;
    gas : number;
    km : number;

    
    constructor(){
        this.pass = 0
        this.gas = 0
        this.km = 0
    }

    entrar() : any {
        if (this.pass == 2){
        console.log ("\n" + "Limite de maximo pessoas Atingido");
    }  else { this.pass += 1;
    }}
    sair() : any {
        if (this.pass == 0){
            console.log ("\n" +"Nao ha pessoas para retirar");
        }
        else{ this.pass--;
    }}
    abastecer(valor: number) : void{
        if (this.gas + valor >=10){
            this.gas = 10
        } else{
        this.gas += valor;
    }}
    andar(kilometragem : number) : void {
        if (this.gas > kilometragem/10 && this.pass > 0){
            this.km += kilometragem;
            this.gas = this.gas - (kilometragem/10)
        } else{
            console.log ("\n" + "Não foi possivel realizar esta ação");
        }
        
    }
   
}