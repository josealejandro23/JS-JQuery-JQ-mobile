class animal{
   public name : string;  //se puede acceder dentro o fuera de la clase
   private age : number;  //no se puede acceder fuera de la clase
   readonly color : string;  //se puede acceder pero no modificar
   constructor(name:string, age:number, color:string){
      this.name = name;
      this.age = age;
      this.color = color;
   }
   public esMayor(){
      if(this.age > 2)
         return true
      else 
         return false;
   };
}

class perro extends animal{
   raza : string;
   constructor(name : string, age:number, color:string,raza:string){
      super(name, age, color);
      this.raza = raza;
   }
}

let mascota = new perro("zeus", 9, "habano","mestizo");
if(mascota.esMayor()) 
   console.log("es mayor");
else  
   console.log("es cachorro");

