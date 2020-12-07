const funcionOpcional = (x:number,y?:number)=>{
   let res : number;
   res = x+y;
   if (isNaN(res))
      console.log("debe definir el argumento Y");
   else 
      console.log(res);
}

const funcionOpcional2 = (x:number,y:number=0)=>{
   let res : number;
   res = x+y;
   console.log(res);
}

funcionOpcional(24,4);
funcionOpcional2(5)

export default{}