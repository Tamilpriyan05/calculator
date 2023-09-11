 let displayvalue= document.getElementById("inputtext");

 let string="";
  
console.log(displayvalue);
 function buttonclick(number){
   displayvalue.value+=number;
}

 function deletebutton(){
    displayvalue.value=string;
 }

 function result(){
   try{
    displayvalue.value=eval(displayvalue.value);
   }
   catch (err){
    alert("Enter the correct method  ")
   }
     
 }

 function clearbutton(){
    displayvalue.value=displayvalue.value.slice(0,-1);
 }
  

     

