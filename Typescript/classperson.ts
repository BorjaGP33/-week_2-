export class Person{

    nombre: string;
   
    edad : number;
    
    private address: string;
    

    constructor (nombre:string, edad:number, address: string){

        this.nombre = nombre;
        
        this.edad = edad;
        
        this.address = address;
       
    }
    //metodos:

    printNombre(){
        console.log(`su nombre es ${this.nombre}`)
       }

       yearOfBirth(){
        let year = new Date().getFullYear();
        return year - this.edad;
    }

     public setaddress(address:string):void{
       
        this.address = address;
       }

   public getaddress():string
   {
          
            return this.address
        }
    
}


