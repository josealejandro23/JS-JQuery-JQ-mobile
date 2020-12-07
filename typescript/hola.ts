interface objectInterface{
   label:string;
   name?: string;
}

function printLabel(obj : objectInterface){
   if(obj.name){
      console.log(obj.name);
   }
   console.log(obj.label);
}

const testObj = {size : 20,label:'prueba',name : 'alejo'};

printLabel(testObj);

export default{};